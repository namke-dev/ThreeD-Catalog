import React from "react";

const CountryTable = ({ rawData }) => {
  return (
    <div>
      <table className="table w-full dark:text-black border border-collapse">
        <thead className="bg-neutral-600 text-white">
          <tr>
            <th className="border p-2">City</th>
            <th className="border p-2">Active Users</th>
            <th className="border p-2">Event Count</th>
          </tr>
        </thead>
        <tbody>
          {rawData.rows.map((point, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-200" : ""} border`}
            >
              <td className="border p-2">{point.dimensionValues[0].value}</td>
              <td className="border p-2">
                {Number(point.metricValues[0].value)}
              </td>
              <td className="border p-2">
                {Number(point.metricValues[1].value)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;
