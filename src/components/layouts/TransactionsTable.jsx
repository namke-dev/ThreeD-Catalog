import { MOCK_TRANSACTION_DATA } from "@/data/transaction_data";
import React from "react";

export const TransactionsTable = () => {
  function countOrders(transactions) {
    let orderCount = 0;

    transactions.forEach((transaction) => {
      if (transaction) {
        orderCount++;
      }
    });

    return orderCount;
  }

  function sumChargeAmounts(transactions) {
    let totalChargeAmount = 0;

    transactions.forEach((transaction) => {
      // Extracting the numeric value from chargeamount (removing non-numeric characters)
      const amount = parseFloat(
        transaction.chargeamount.replace(/[^\d.]/g, "")
      );
      totalChargeAmount += amount;
    });

    return totalChargeAmount;
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="text-lg border-2 border-dashed px-10 py-5 font-bold">
        <span>
          Tổng đơn hàng đã nhận: {countOrders(MOCK_TRANSACTION_DATA)} Đơn Hàng
        </span>
        <br />
        <span>
          Tổng doanh thu: {sumChargeAmounts(MOCK_TRANSACTION_DATA)} VND
        </span>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl my-2">Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">ID giao dịch</th>
                <th className="px-4 py-2">Tên Khách hàng</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Ngày mua</th>
                <th className="px-4 py-2">Gói dịch vụ</th>
                <th className="px-4 py-2">Thời hạn</th>
                <th className="px-4 py-2">Chi phí</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_TRANSACTION_DATA.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="border px-4 py-2">{transaction.id}</td>
                  <td className="border px-4 py-2">{transaction.customer}</td>
                  <td className="border px-4 py-2">{transaction.useremail}</td>
                  <td className="border px-4 py-2">{transaction.time}</td>
                  <td className="border px-4 py-2">
                    {transaction.servicePlan}
                  </td>
                  <td className="border px-4 py-2">{transaction.period}</td>
                  <td className="border px-4 py-2 text-right">
                    {transaction.chargeamount}
                  </td>
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
