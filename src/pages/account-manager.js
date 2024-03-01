import React from "react";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";
import PageHeader from "@/components/layouts/PageHeader";

export default function AccountManager() {
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
                <li className="mb-2">Quét mã QR trên App ngân hàng của bạn</li>
                <li className="mb-2">Nội dung chuyển tiền: 2rxqz</li>
              </ul>
              <hr className="my-4 border-t" />

              <div className="flex justify-center items-center">
                <img src="/images/bankQr.jpg" className="w-[400px]" />
              </div>
            </div>
          </div>
        </div>
      </HomePageCart>
    </Layout>
  );
}
