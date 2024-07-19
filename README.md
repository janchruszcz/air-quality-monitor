# 🌬️ Air Quality Monitor

A Raspberry Pi-based system for measuring and visualizing air quality data.

## 🤔 What's Air Quality Monitor?

Air Quality Monitor is an embedded system that tracks environmental parameters using a Raspberry Pi and a BME680 sensor. It displays the data through a web interface, making it easy to keep an eye on your air quality.

### 🌟 Key Features

- 🌡️ Measures temperature, humidity, pressure, and gas resistance
- 📊 Shows real-time data and historical trends
- ☁️ Stores data in Google Sheets for easy access
- 💻 Uses a React frontend with Tailwind CSS for a clean, responsive design

## 🛠️ Setting Up

### You'll Need

- 🍓 Raspberry Pi with a BME680 sensor
- 📦 Node.js and npm
- 🌐 Google Cloud account with Sheets API access

### Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/janchruszcz/air-quality-monitor.git
   cd air-quality-monitor

2. Install dependencies:
   ```bash
   npm install
3. Set up your environment:
Create a `.env` file in the root directory with these variables:
   ```bash
   REACT_APP_SPREADSHEET_ID=your_spreadsheet_id
   REACT_APP_SHEET_ID=your_sheet_id
   REACT_APP_CLIENT_EMAIL=your_client_email
   REACT_APP_PRIVATE_KEY="your_private_key"
4. Start the development server:
   ```bash
   npm start

## 🚀 Using Air Quality Monitor

1. Make sure your Raspberry Pi is set up and sending data to Google Sheets.
2. Open `http://localhost:3000` in your browser to see your air quality data.
3. Use the navigation to switch between different views.

## 💻 Tech Stack

- Frontend: React with Tailwind CSS and Chart.js
- Backend: Node.js for API integration (if needed)
- Data Storage: Google Sheets
- Hardware: Raspberry Pi with BME680 sensor

## 🤝 Contributing

If you'd like to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Open a pull request

## 📄 License

This project is licensed under the MIT License.

---

🎓 Air Quality Monitor started as a part of bachelor thesis project and has grown from there. It's designed for anyone interested in tracking their local air quality with a DIY approach.
