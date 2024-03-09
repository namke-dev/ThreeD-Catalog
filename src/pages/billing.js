import React from "react";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";
import PageHeader from "@/components/layouts/PageHeader";

export default function Billing() {
  return (
    <Layout>
      <PageHeader>Billing & Cost Management</PageHeader>
      <HomePageCart
        className="
        !pt-10 !pb-32 "
      >
        <div className="flex flex-row gap-4 text-lg">
          <div className="flex-1">
            <div className="h-full py-10 px-16 rounded-lg bg-white text-black">
              <div className="text-2xl font-semibold mb-8 text-center">
                Phương thức thanh toán
              </div>

              <ul className="list-disc mb-6">
                <p className="mb-2">Quét mã QR trên App ngân hàng của bạn</p>
                <div className="border-2 p-3 border-gray-500">
                  <p className="mb-2">Tổng chi phí sẽ bao gồm</p>
                  <p className="mb-2">
                    1. Phí membership (chi phí duy trì trang Web)
                  </p>
                  <p className="mb-2">2. Phí tạo model sản phẩm</p>
                  <div className="pl-3 italic text-sm">
                    <p>
                      Dưới 10 sản phẩm, phí: 300 000 VND cho mỗi model sản phẩm
                    </p>
                    <p>
                      Từ sản phẩm thứ 10, phí: 200 000 VND cho mỗi model sản
                      phẩm
                    </p>
                    <a className="text-blue-600 underline">Learn more here</a>
                  </div>
                </div>
              </ul>
              <hr className="my-4 border-t" />

              <div className="flex justify-center items-center">
                <img src="/images/bankQr.jpg" className="w-[400px]" />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="h-full py-10 px-16 rounded-lg bg-white text-black">
              <div className="text-2xl font-semibold mb-8 text-center">
                Charge Option
              </div>
              <form>
                <div className="mb-2">
                  <label
                    htmlFor="chargePlan"
                    className="block text-lg font-semibold mb-2"
                  >
                    Charge Plan:
                  </label>
                  <select
                    id="chargePlan"
                    name="chargePlan"
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="basic">Gói cơ bản</option>
                    <option value="premium">Gói cao cấp</option>
                    <option value="fullySupport">Gói hỗ trợ đầy đủ</option>
                  </select>
                  <p className="italic text-sm pl-5 pt-2">
                    Price: 100$ per month
                  </p>
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="period"
                    className="block text-lg font-semibold mb-2"
                  >
                    Chọn kỳ hạn:
                  </label>
                  <select
                    id="period"
                    name="period"
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="1month">1 tháng</option>
                    <option value="6months">6 tháng</option>
                    <option value="1year">1 năm</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Confirm
                </button>
              </form>
              <hr className="my-6 border-t" />

              <div className="mb-2">
                <div className="text-2xl font-semibold mb-4">Hoá Đơn</div>
                <p>Premium plan ($100 per Month)</p>
                <p>Period: 6 months</p>
                <p>Total</p>
                <div
                  className="pl-3 w-[200px] border p-4 shadow-inner 
                  text-right
                  my-2"
                >
                  <p>$100</p>
                  <p>x</p>
                  <p>6</p>
                  <hr className="my-1 border-t" />
                  <p>$600</p>
                </div>
                <hr className="my-6 border-t" />

                <div className="mt-8">
                  <p>Thanh toán qua tài khoảng ngân hàng phía trên</p>
                  <p>
                    Tổng cộng:{" "}
                    <span className="font-semibold">$600 (14.793.000 VND)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomePageCart>
    </Layout>
  );
}
