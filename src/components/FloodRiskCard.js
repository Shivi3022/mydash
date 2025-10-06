
import React, { useEffect, useState } from "react";
import Card from "./Card";

function FloodRiskCard() {
  const [risk, setRisk] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/flood-risk")
      .then((res) => res.json())
      .then((data) => setRisk(data))
      .catch((err) => console.error("Error fetching risk score:", err));
  }, []);

  return (
    <Card title="⚠️ Flood Risk Score">
      {risk ? (
        <>
          <p>Predicted Risk: <b style={{ color: "#ef4444" }}>{risk.level}</b></p>
          <p>Model Confidence: {risk.confidence}%</p>
          <p>Recommended Action: {risk.action}</p>
        </>
      ) : (
        <p>Loading risk data...</p>
      )}
    </Card>
  );
}

export default FloodRiskCard;
