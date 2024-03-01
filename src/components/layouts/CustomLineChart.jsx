// LineChart.js
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function CustomLineChart({ rawData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Extracting labels, datasets, and data points
    const newData = rawData.rows.map((point) => ({
      label: `${formatDate(point.dimensionValues[0].value)}`,
      activeUsers: Number(point.metricValues[0].value),
      eventCount: Number(point.metricValues[1].value),
    }));

    setData(newData);
  }, [rawData]);

  return (
    <div>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="activeUsers" stroke="#8884d8" />
        <Line type="monotone" dataKey="eventCount" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
}

function formatDate(inputDate) {
  // Parse the input date string (assuming it's in the format YYYYMMDD)
  const year = inputDate.substring(0, 4);
  const month = inputDate.substring(4, 6) - 1; // Months are 0-indexed in JavaScript
  const day = inputDate.substring(6, 8);

  // Create a Date object
  const dateObject = new Date(year, month, day);

  // Format the date as "dd-mmm"
  const options = { day: "2-digit", month: "short" };
  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  return formattedDate;
}
