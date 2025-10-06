
import React, { useEffect, useState } from "react";
import Card from "./Card";

function LiveRainfallCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    
    fetch("http://localhost:5000/api/rainfall")
      .then((res) => res.json())
      .then((info) => setData(info))
      .catch((err) => console.error("Error fetching rainfall data:", err));
  }, []);

  return (
    <Card title="🌧️ Live Rainfall Data">
      {data ? (
        <>
          <p>Rainfall Intensity: <b>{data.intensity} mm/hr</b></p>
          <p>24h Average: <b>{data.avg} mm</b></p>
          <p>Region: {data.region}</p>
        </>
      ) : (
        <p>Loading rainfall data...</p>
      )}
    </Card>
  );
}

export default LiveRainfallCard;
