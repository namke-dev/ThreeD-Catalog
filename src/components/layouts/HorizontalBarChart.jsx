import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
} from "recharts";

const HorizontalBarChart = ({ rawData }) => {
  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      // Update chart size based on the size of its container or any other criteria
      const containerWidth = document.getElementById(
        "horizontal-bar-chart-container"
      ).offsetWidth;
      const containerHeight = 400; // Set a default or calculate based on your needs

      setChartSize({ width: containerWidth, height: containerHeight });
    };

    // Initial resize
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = rawData.rows.map((point) => ({
    label: point.dimensionValues[0].value,
    value: Number(point.metricValues[0].value),
  }));

  return (
    <div id="horizontal-bar-chart-container">
      <BarChart
        width={chartSize.width}
        height={chartSize.height}
        data={data}
        layout="vertical"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis
          dataKey="label"
          type="category"
          interval={0}
          tick={{ dy: 10 }}
          width={130}
        />

        {/* <Tooltip /> */}
        {/* <Legend /> */}
        <Bar dataKey="value" fill="#8884d8">
          <LabelList dataKey="value" position="insideRight" fill="#fff" />
        </Bar>
      </BarChart>
    </div>
  );
};

export default HorizontalBarChart;
