# Air Quality Monitor

Air Quality Monitor is an embedded system designed to measure and visualize air quality data. Powered by a Raspberry Pi and a BME680 environmental sensor, the system utilizes a React frontend with Tailwind CSS and Chart.js for data visualization.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project was originally developed as part of a bachelor thesis and has since been updated periodically. The system measures various environmental parameters and displays the data on an elegant web interface.

## Features
- Real-time air quality monitoring
- Visualization of temperature, humidity, pressure, and gas resistance data
- Historical data tracking for the last five days
- Responsive design using Tailwind CSS
- Easy integration with Google Sheets for data storage

## Technologies Used
- **Frontend**: React, Tailwind CSS, Chart.js
- **Backend**: Node.js (for API integration if needed)
- **Data Storage**: Google Sheets
- **Embedded Hardware**: Raspberry Pi, BME680 sensor

## Setup and Installation

### Prerequisites
- Node.js and npm installed
- Raspberry Pi with BME680 sensor set up and connected
- Google Cloud service account with access to Google Sheets API

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/air-quality-monitor.git
   cd air-quality-monitor

2. **Install Dependencies**:
    ```bash
    npm install

3. **Setup .env variables**:
    Create a .env file in the root directory and add the following environment variables:
    ```bash
    REACT_APP_SPREADSHEET_ID=your_spreadsheet_id
    REACT_APP_SHEET_ID=your_sheet_id
    REACT_APP_CLIENT_EMAIL=your_client_email
    REACT_APP_PRIVATE_KEY="your_private_key"

4. **Start the Development Server**:
    ```bash
    npm start


## Usage
1. Ensure your Raspberry Pi and BME680 sensor are correctly set up and sending data to the Google Sheet.
2. Access the web interface at `http://localhost:3000` to view real-time and historical air quality data.
3. Use the navigation bar to switch between different data visualizations.

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License
All rights reserved.
