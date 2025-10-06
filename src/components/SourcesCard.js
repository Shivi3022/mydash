
import React from "react";
import Card from "./Card";

function SourcesCard() {
  return (
    <Card title="📌 Data Sources">
      <ul>
        <li>🌧️ IMD (Indian Meteorological Department)</li>
        <li>💧 Central Water Commission</li>
        <li>📡 IoT Sensors</li>
        <li>🗺️ GIS Mapping</li>
        <li>📱 Citizen Reports</li>
      </ul>
      <p className="last-updated">Last Updated: <b>5 mins ago</b></p>
    </Card>
  );
}

export default SourcesCard;
