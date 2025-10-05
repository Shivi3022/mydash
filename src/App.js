import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <header className="app-header"></header>

      <div className="dashboard">
        <Card title="🌧️ Live Rainfall Data" />
        <Card title="⚠️ Flood Risk Score" />
        <Card title="🗺️ Map Visualization" />
        <Card title="🔔 Alert Panel" />
        
        <Card title="📊 Historical Data & Trends">
        
        </Card>
      </div>

      <div className="footer-section">
        <Card title="📌 Data Sources">
          <ul className="data-sources">
            <li>🌧️ IMD (Indian Meteorological Department)</li>
            <li>💧 Central Water Commission</li>
            <li>📡 IoT Sensors</li>
            <li>🗺️ GIS Mapping</li>
            <li>📱 Citizen Reports</li>
          </ul>
          <p className="last-updated">
            Last Updated: <b>5 mins ago</b>
          </p>
        </Card>
      </div>
    </div>
  );
}

export default App;
