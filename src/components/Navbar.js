import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🌊 Flood Monitoring Dashboard</div>
      <ul className="nav-links">
        <li><a href="#overview">Overview</a></li>
        <li><a href="#live">Live Data</a></li>
        <li><a href="#alerts">Alerts</a></li>
        <li><a href="#map">Map</a></li>
        <li><a href="#sources">Sources</a></li>
      </ul>
      <div className="status-dot">● Live Data Active</div>
    </nav>
  );
}

export default Navbar;
