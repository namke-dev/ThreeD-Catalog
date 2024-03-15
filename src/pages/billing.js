import React, { useState } from "react";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";
import PageHeader from "@/components/layouts/PageHeader";
import { SERVICE_PACK } from "@/data/service_pack_data";

export default function Billing() {
  const [chargePlan, setChargePlan] = useState(SERVICE_PACK[0].title);
  const [serviceInfo, setServiceInfo] = useState("");
  const [total, setTotal] = useState(0);

  const handleChargePlanChange = (e) => {
    console.log(`==> ${e.target.value}`);
    setChargePlan(e.target.value);
  };

  const handlePeriodChange = (e) => {
    console.log(`==> ${e.target.value}`);
    setServiceInfo(chargePlan + " - " + e.target.value);
    setTotal(serviceInfo.split("-")[1]);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    console.log("Confirmation clicked!");
  };

  return (
    <Layout>
      <PageHeader>Billing & Cost Management</PageHeader>
      <HomePageCart className="!pt-10 !pb-32">
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
                  <p className="mb-2">
                    2. Phí tạo model sản phẩm (vượt quá hạn mức gói )
                  </p>
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
              <form onSubmit={handleConfirm}>
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
                    value={chargePlan}
                    onChange={handleChargePlanChange}
                  >
                    {SERVICE_PACK.map((pack) => (
                      <option key={pack.title} value={pack.title}>
                        {pack.title}
                      </option>
                    ))}
                  </select>
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
                    onChange={handlePeriodChange}
                  >
                    {SERVICE_PACK.filter(
                      (pack) => pack.title === chargePlan
                    ).map((pack) => (
                      <React.Fragment key={pack.title}>
                        {pack.priceMonth && (
                          <option
                            value={`${pack.priceMonth} - thời hạn 1 tháng`}
                          >
                            {`${pack.priceMonth} / Tháng`}
                          </option>
                        )}
                        {pack.price3Months && (
                          <option
                            value={`${pack.price3Months} - thời hạn 3 tháng`}
                          >
                            {`${pack.price3Months} / 3 Tháng`}
                          </option>
                        )}
                        {pack.price6Months && (
                          <option
                            value={`${pack.price6Months} - thời hạn 6 tháng`}
                          >
                            {`${pack.price6Months} / 6 Tháng`}
                          </option>
                        )}
                        {pack.priceYear && (
                          <option value={`${pack.priceYear} - thời hạn 1 năm`}>
                            {`${pack.priceYear} / Năm`}
                          </option>
                        )}
                      </React.Fragment>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Confirm
                </button>
              </form>
              <div className="mb-2 mt-5">
                <div className="text-2xl font-semibold mb-4">
                  Thông tin đơn hàng
                </div>
                <p>{serviceInfo}</p>

                <hr className="my-6 border-t" />
                <div className="mt-8">
                  <p>
                    Tổng cộng: <span className="font-semibold">{total}</span>
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
