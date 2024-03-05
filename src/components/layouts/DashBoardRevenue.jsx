// Import necessary components from Recharts
import {
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Legend,
} from "recharts";

// RevenueDashboard component
export default function DashboardRevenue() {
  // Sample data for demonstration
  const donutChartData = [
    { name: "Social", value: 400 },
    { name: "Direct", value: 300 },
    { name: "Organic Search", value: 200 },
    { name: "Paid Search", value: 100 },
  ];

  const barChartData = [
    { date: "2022-03-01", revenue: 200 },
    { date: "2022-03-02", revenue: 300 },
    { date: "2022-03-03", revenue: 400 },
    // Add more data as needed
  ];

  const revenueData = [
    { date: "2022-03-01", revenue: 200, source: "Social" },
    { date: "2022-03-02", revenue: 300, source: "Direct" },
    { date: "2022-03-03", revenue: 400, source: "Organic Search" },
    // Add more data as needed
  ];

  console.log("donutChartData:", donutChartData);
  console.log("barChartData:", barChartData);

  return (
    <div className="flex flex-col space-y-8 dark:text-black p-5">
      <div className="flex flex-row flex-wrap -mx-4">
        <div className="w-full md:w-3/5 px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl my-2">Conversion by Source</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={donutChartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  fill="#8884d8"
                  label
                />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="w-full md:w-2/5 px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl my-2">Revenue by Day</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="revenue" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Add a table or any other components for the second row as needed */}
      {/* Revenue Details Table */}
      <div className="w-full">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl my-2">Revenue Details</h2>
          <table className="w-full">
            <thead>
              <tr>
                <th>Date</th>
                <th>Revenue</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {revenueData.map((entry) => (
                <tr key={entry.date}>
                  <td>{entry.date}</td>
                  <td>{entry.revenue}</td>
                  <td>{entry.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
