
import React, { useEffect, useState } from "react";
import Card from "./Card";

function AlertCard() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/alerts")
      .then((res) => res.json())
      .then((data) => setAlerts(data))
      .catch((err) => console.error("Error fetching alerts:", err));
  }, []);

  return (
    <Card title="🔔 Alert Panel">
      {alerts.length > 0 ? (
        <ul>
          {alerts.map((a, i) => (
            <li key={i}>{a.message}</li>
          ))}
        </ul>
      ) : (
        <p>No active alerts.</p>
      )}
    </Card>
  );
}

export default AlertCard;
