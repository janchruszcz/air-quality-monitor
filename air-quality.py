#!/usr/bin/env python

import bme680
import time
from datetime import date, datetime
import numpy
import gspread

print("""Estimate indoor air quality

Runs the sensor for a burn-in period, then uses a 
combination of relative humidity and gas resistance
to estimate indoor air quality as a percentage.

Press Ctrl+C to exit

""")

sensor = bme680.BME680(bme680.I2C_ADDR_SECONDARY)

# These oversampling settings can be tweaked to 
# change the balance between accuracy and noise in
# the data.

sensor.set_humidity_oversample(bme680.OS_2X)
sensor.set_pressure_oversample(bme680.OS_4X)
sensor.set_temperature_oversample(bme680.OS_8X)
sensor.set_filter(bme680.FILTER_SIZE_3)
sensor.set_gas_status(bme680.ENABLE_GAS_MEAS)

sensor.set_gas_heater_temperature(320)
sensor.set_gas_heater_duration(150)
sensor.select_gas_heater_profile(0)

# start_time and curr_time ensure that the 
# burn_in_time (in seconds) is kept track of.

start_time = time.time()
curr_time = time.time()
burn_in_time = 300

burn_in_data = []
temp_data = []
pres_data = []
hum_data = []
gas_data = []
aq_data = []

# setup connection with Google Spreadsheet
gc = gspread.service_account()
sheet = gc.open('air-quality-monitor').sheet1

try:
    print(time.strftime("%H:%M:%S", time.localtime()))
    # Collect gas resistance burn-in values, then use the average
    # of the last 50 values to set the upper limit for calculating
    # gas_baseline.
    print("Collecting gas resistance burn-in data for 5 mins\n")
    while curr_time - start_time < burn_in_time:
        curr_time = time.time()
        if sensor.get_sensor_data() and sensor.data.heat_stable:
            gas = sensor.data.gas_resistance
            burn_in_data.append(gas)
            print("Gas: {0} Ohms".format(gas))
            time.sleep(1)

    gas_baseline = sum(burn_in_data[-50:]) / 50.0

    # Set the humidity baseline to 40%, an optimal indoor humidity.
    hum_baseline = 40.0

    # This sets the balance between humidity and gas reading in the 
    # calculation of air_quality_score (25:75, humidity:gas)
    hum_weighting = 0.25

    print("Gas baseline: {0} Ohms, humidity baseline: {1:.2f} %RH\n".format(gas_baseline, hum_baseline))

    while True:
        if sensor.get_sensor_data() and sensor.data.heat_stable:
            temp = sensor.data.temperature
            pres = sensor.data.pressure
            hum = sensor.data.humidity
            gas = sensor.data.gas_resistance
            gas_offset = gas_baseline - gas

            hum = sensor.data.humidity
            hum_offset = hum - hum_baseline

            # Calculate hum_score as the distance from the hum_baseline.
            if hum_offset > 0:
                hum_score = (100 - hum_baseline - hum_offset) / (100 - hum_baseline) * (hum_weighting * 100)

            else:
                hum_score = (hum_baseline + hum_offset) / hum_baseline * (hum_weighting * 100)

            # Calculate gas_score as the distance from the gas_baseline.
            if gas_offset > 0:
                gas_score = (gas / gas_baseline) * (100 - (hum_weighting * 100))

            else:
                gas_score = 100 - (hum_weighting * 100)

            # Calculate air_quality_score. 
            air_quality_score = hum_score + gas_score
            
            temp_data.append(temp)
            pres_data.append(pres)
            hum_data.append(hum)
            gas_data.append(gas)
            aq_data.append(air_quality_score)
            
            print("Temperature: {0:.2f}, Pressure: {1:.2f}, Gas: {2:.2f} Ohms, Humidity: {3:.2f} %RH, Air Quality: {4:.2f}".format(temp, pres,gas, hum, air_quality_score))
            time.sleep(1)
            if (len(aq_data) > 50):
                id = len(sheet.get_all_values())
                index = id + 1
                row = [id, date.today().strftime("%d/%m/%Y"), datetime.now().time().strftime("%H:%M:%S"), numpy.median(temp_data), numpy.median(hum_data), numpy.median(pres_data), numpy.median(gas_data), numpy.median(aq_data)]
                sheet.insert_row(row, index)
                print("Measurement done.")
                break
                
except KeyboardInterrupt:
    pass
