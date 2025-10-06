// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import LiveRainfallCard from "./components/LiveRainfallCard";
import FloodRiskCard from "./components/FloodRiskCard";
import MapCard from "./components/MapCard";
import AlertCard from "./components/AlertCard";
import TrendsCard from "./components/TrendsCard";
import SourcesCard from "./components/SourcesCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <header className="app-header"></header>

      <div className="dashboard">
        <LiveRainfallCard />
        <FloodRiskCard />
        <MapCard />
        <AlertCard />
        <TrendsCard />
      </div>

      <div className="footer-section">
        <SourcesCard />
      </div>
    </div>
  );
}

export default App;
