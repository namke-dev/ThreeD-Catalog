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
import TransactionsTable from "./TransactionsTable";
import { MOCK_TRANSACTION_DATA } from "@/data/transaction_data";

// RevenueDashboard component
export default function DashboardRevenue() {
  // Sample data for demonstration
  const donutChartData = [
    { name: "Social", value: 400 },
    { name: "Direct", value: 300 },
    { name: "Organic Search", value: 200 },
    { name: "Paid Search", value: 100 },
  ];

  // const barChartData = [
  //   { date: "2022-03-01", revenue: 200 },
  //   { date: "2022-03-02", revenue: 300 },
  //   { date: "2022-03-03", revenue: 400 },
  // ];
  const barChartData = convertToBarChartData(MOCK_TRANSACTION_DATA);

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
        {/* <div className="w-full px-4 pb-5">
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
        </div> */}

        <div className="w-full px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl my-2">Biểu đồ doanh thu theo ngày</h2>
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
      {/* <div className="w-full">
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
      </div> */}

      <TransactionsTable />
    </div>
  );
}

function convertToBarChartData(transactions) {
  const barChartData = [];

  // Create an object to store revenue for each date
  const revenueByDate = {};

  // Iterate through each transaction
  transactions.forEach((transaction) => {
    // Extract date and revenue from the transaction
    const { time, chargeamount } = transaction;

    // Convert chargeamount to a numeric value
    const revenue = parseFloat(chargeamount.replace(/[^\d.]/g, ""));

    // Extract year, month, and day from the date
    const [year, month, day] = time.split("-");

    // Construct the date in YYYY-MM-DD format
    const date = `${year}-${month}-${day}`;

    // If the date already exists in revenueByDate, add revenue to existing revenue
    if (revenueByDate[date]) {
      revenueByDate[date] += revenue;
    } else {
      revenueByDate[date] = revenue;
    }
  });

  // Convert revenueByDate object to an array of objects
  Object.keys(revenueByDate).forEach((date) => {
    barChartData.push({ date, revenue: revenueByDate[date] });
  });

  // Sort the barChartData array by date
  barChartData.sort((a, b) => new Date(a.date) - new Date(b.date));

  return barChartData;
}
