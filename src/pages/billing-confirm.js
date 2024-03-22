import { UserAuth } from "@/components/context/auth-context";
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/layouts/PageHeader";
import { SERVICE_PACK } from "@/data/service_pack_data";
import { MOCK_TRANSACTION_DATA } from "@/data/transaction_data";
import { sendOrderConfirmEmail } from "@/helpers/sendOrderConfirmEmail.server";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

export default function BillingConfirm() {
  const router = useRouter();
  const { chargePlan, period } = router.query;
  const { user } = UserAuth();

  const [showPopup, setShowPopup] = useState(false);

  const getPrice = (title, period) => {
    // Find the service pack based on the title
    const servicePack = SERVICE_PACK.find((pack) => pack.title === title);

    // If service pack is found
    if (servicePack) {
      // Extract the price based on the period
      if (period === "Thời hạn 1 tháng") {
        return formatPrice(servicePack.priceMonth);
      } else if (period === "Thời hạn 3 tháng") {
        return formatPrice(servicePack.price3Months);
      } else if (period === "Thời hạn 6 tháng") {
        return formatPrice(servicePack.price6Months);
      } else if (period === "Thời hạn 1 năm") {
        return formatPrice(servicePack.priceYear);
      }
    }

    // If service pack or price for the given period is not found, return null or handle it accordingly
    return null;
  };

  const formatPrice = (priceString) => {
    // Remove non-numeric characters and convert to lowercase
    const cleanedPrice = priceString;

    // Check if the price is in million (triệu) or thousand (nghìn)
    if (cleanedPrice.includes("triệu Đồng")) {
      const numericPrice =
        parseFloat(cleanedPrice.replace("triệu", "").trim()) * 1000000;
      return numericPrice.toLocaleString("en-US") + " VND";
    } else if (cleanedPrice.includes("nghìn Đồng")) {
      const numericPrice =
        parseFloat(cleanedPrice.replace("nghìn", "").trim()) * 1000;
      return numericPrice.toLocaleString("en-US") + " VND";
    } else {
      // If the price is already in VND
      return parseFloat(cleanedPrice).toLocaleString("en-US") + " VND";
    }
  };

  const handleConfirmPayment = async () => {
    setShowPopup(true);
    // Send email
    await sendOrderConfirmEmail(user, chargePlan, period, getPrice);
  };

  function generateCode() {
    const characters = "0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
    return code;
  }

  return (
    <Layout>
      <PageHeader>Xác nhận mua hàng</PageHeader>
      <Link title="next step" href={"/billing"}>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3"
        >
          Quay lại trang chọn gói dịch vụ
        </button>
      </Link>
      <div className="flex flex-row gap-4   py-10">
        <div className="flex-1">
          <div className="mb-2 text-left px-16 pb-5">
            <p className="text-2xl font-semibold ">Phương thức thanh toán</p>
            <p className="mb-2">Quét mã QR trên App ngân hàng của bạn</p>
          </div>

          <div
            className="flex gap-10 border 
            shadow-md shadow-gray-200 
            rounded-2xl px-10 
             w-[500px] 
            bg-gradient-to-r from-pink-300 to-yellow-300
            justify-center items-center mx-auto"
          >
            <div className="h-full py-10">
              <img
                className="w-[140px]"
                src="/images/logo-vietcombank.png"
                alt="bank logo"
              />
              <p className="font-semibold text-lg pt-8">NGO QUANG HAI</p>
              <p>0581 000 781 259</p>
              <p>Vietcombank - PGD Cam Ranh</p>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/images/only-bankQr.jpg"
                className="w-[120px]"
                alt="bank QR"
              />
            </div>
          </div>
          {user && (
            <div className="px-16 py-10 ">
              <p className="text-red-600 font-bold underline">LƯU Ý :</p>
              <p>
                Ghi rõ phần nội dung chuyển khoảng chuyển khoản nội dung như
                sau:
              </p>
              <p className="border py-2 px-3 bg-green-500 text-white font-semibold my-6">
                {user.email + " - " + generateCode()}
              </p>
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="h-full px-16">
            <div className="mb-2 text-left pb-5">
              <p className="text-2xl font-semibold ">Thông tin hoá đơn</p>
            </div>

            <div className="mb-2 mt-2 border border-dashed border-blue-400 px-3 py-6">
              <div className="text-2xl font-semibold mb-4 ">Hoá đơn</div>
              <p className="font-semibold">{chargePlan} </p>
              <p className="pl-4">{period}</p>

              <hr className="my-6 border-t" />
              <div className="mt-8">
                <p className="font-semibold">Tổng Chi Phí:</p>
                <p className="pl-4">{getPrice(chargePlan, period)}</p>
              </div>
            </div>

            <p className="italic">
              Sau khi chuyển khoảng thành công, hệ thống sẽ ghi nhận thông tin
              giao dịch, thời gian xác nhận giao dịch thành công tuỳ thuộc vào
              giờ làm việc và chính sách của từng ngân hàng
            </p>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3"
              onClick={async () => await handleConfirmPayment()}
            >
              Xác nhận đã chuyển khoản
            </button>

            <hr className="my-5" />
            <ul className="list-disc mb-6">
              <div className="">
                <p className="mb-2">Chi phí mua gói dịch vụ đã bao gồm</p>
                <p className="mb-2">
                  1. Phí membership (chi phí duy trì trang Web)
                </p>
                <p className="mb-2">2. Phí tạo model sản phẩm</p>
                <div className="pl-3 italic text-sm">
                  <p>Trường hợp vượt quá hạn mức gói</p>
                  <p>
                    Dưới 10 sản phẩm, phí: 300 000 VND cho mỗi model sản phẩm
                  </p>
                  <p>
                    Từ sản phẩm thứ 10, phí: 200 000 VND cho mỗi model sản phẩm
                  </p>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="text-4xl font-bold mb-8
      relative ml-20"
      >
        Lịch sử giao dịch
      </div>
      {user && (
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
              <th className="px-4 py-2">Trạng thái thanh toán</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_TRANSACTION_DATA.filter(
              (transaction) => transaction.useremail === user.email
            ).map((transaction) => (
              <tr key={transaction.id}>
                <td className="border px-4 py-2">{transaction.id}</td>
                <td className="border px-4 py-2">{transaction.customer}</td>
                <td className="border px-4 py-2">{transaction.useremail}</td>
                <td className="border px-4 py-2">{transaction.time}</td>
                <td className="border px-4 py-2">{transaction.servicePlan}</td>
                <td className="border px-4 py-2">{transaction.period}</td>
                <td className="border px-4 py-2 text-right">
                  {transaction.chargeamount}
                </td>
                <td className="border px-4 py-2">Chờ xác nhận</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <FiCheckCircle className="text-green-500 w-16 h-16 mb-4 mx-auto" />
            <h1 className="text-2xl font-bold text-center mb-2">
              Đã hoàn tất thông tin thanh toán
            </h1>
            <p className="text-lg text-gray-600 text-center">
              Thông tin đơn hàng của bạn đã được hệ thống ghi nhận.
            </p>
            <div className="items-center justify-center flex">
              <button
                type="button"
                className="
              
              bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3"
                onClick={() => setShowPopup(false)}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
