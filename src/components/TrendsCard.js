
import React, { useEffect, useState } from "react";
import Card from "./Card";

function TrendsCard() {
  const [trends, setTrends] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/trends")
      .then((res) => res.json())
      .then((data) => setTrends(data))
      .catch((err) => console.error("Error fetching trends:", err));
  }, []);

  return (
    <Card title="📊 Historical Data & Trends">
      {trends ? (
        <>
          <p>Last Week Rainfall: {trends.weeklyRainfall} mm</p>
          <p>Flood Risk Trend: {trends.trend}</p>
        </>
      ) : (
        <p>Loading trend data...</p>
      )}
    </Card>
  );
}

export default TrendsCard;
