import React from "react";

// Sample data for the transactions table
const transactionsData = [
  {
    id: 1,
    name: "John Doe",
    company: "ABC Inc.",
    time: "2022-03-01 10:30 AM",
    productType: "Electronics",
    amount: 150,
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "XYZ Corp.",
    time: "2022-03-02 02:45 PM",
    productType: "Clothing",
    amount: 75,
  },
  {
    id: 3,
    name: "Bob Johnson",
    company: "123 Ltd.",
    time: "2022-03-03 09:15 AM",
    productType: "Home Appliances",
    amount: 200,
  },
  {
    id: 4,
    name: "Alice Brown",
    company: "DEF Ltd.",
    time: "2022-03-04 03:30 PM",
    productType: "Books",
    amount: 50,
  },
  {
    id: 5,
    name: "Charlie Davis",
    company: "456 Corp.",
    time: "2022-03-05 11:45 AM",
    productType: "Toys",
    amount: 120,
  },
  {
    id: 6,
    name: "Eva Wilson",
    company: "GHI Inc.",
    time: "2022-03-06 08:00 AM",
    productType: "Furniture",
    amount: 300,
  },
  {
    id: 7,
    name: "Frank Miller",
    company: "789 Ltd.",
    time: "2022-03-07 01:15 PM",
    productType: "Beauty",
    amount: 80,
  },
  {
    id: 8,
    name: "Grace Taylor",
    company: "JKL Corp.",
    time: "2022-03-08 04:45 PM",
    productType: "Sports Equipment",
    amount: 180,
  },
  {
    id: 9,
    name: "Harry Clark",
    company: "MNO Inc.",
    time: "2022-03-09 10:00 AM",
    productType: "Clothing",
    amount: 90,
  },
  {
    id: 10,
    name: "Ivy Turner",
    company: "PQR Ltd.",
    time: "2022-03-10 12:30 PM",
    productType: "Electronics",
    amount: 220,
  },
];

const TransactionsTable = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl my-2">Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Transaction ID</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Company</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Product Type</th>
                <th className="px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactionsData.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="border px-4 py-2">{transaction.id}</td>
                  <td className="border px-4 py-2">{transaction.name}</td>
                  <td className="border px-4 py-2">{transaction.company}</td>
                  <td className="border px-4 py-2">{transaction.time}</td>
                  <td className="border px-4 py-2">
                    {transaction.productType}
                  </td>
                  <td className="border px-4 py-2">${transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionsTable;
