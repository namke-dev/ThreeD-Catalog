import React, { useState } from "react";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";
import PageHeader from "@/components/layouts/PageHeader";
import { SERVICE_PACK } from "@/data/service_pack_data";
import Link from "next/link";
import PricingCard from "@/components/layouts/PricingCard";

export default function Billing() {
  const [chargePlan, setChargePlan] = useState(SERVICE_PACK[0].title);
  const [total, setTotal] = useState(0);
  const [period, setPeriod] = useState("");

  const handleChargePlanChange = (e) => {
    console.log(`==> ${e.target.value}`);
    setChargePlan(e.target.value);
  };

  const handlePeriodChange = (e) => {
    console.log(`==> ${e.target.value}`);
    setPeriod(e.target.value);

    const selectedOption = e.target.options[e.target.selectedIndex];
    const selectedOptionContent = selectedOption.textContent;

    console.log("==> " + selectedOptionContent);
    setTotal(selectedOptionContent.split("-")[0]);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    console.log("Confirmation clicked!");
  };

  return (
    <Layout>
      <PageHeader>Thông tin mua hàng và hoá đơn</PageHeader>
      <HomePageCart className="!pt-10 !pb-32">
        <div className="flex flex-row gap-4 text-lg bg-white">
          <div className="flex-1">
            <div className="h-full py-10 px-16 rounded-lg  text-black">
              {chargePlan && (
                <PricingCard
                  pack={SERVICE_PACK.find((pack) => pack.title === chargePlan)}
                />
              )}
            </div>
          </div>
          <div className="flex-1">
            <div className="h-full py-10 px-16 rounded-lg bg-white text-black">
              <div className="text-2xl font-semibold mb-8 text-center">
                Thông tin đặt hàng
              </div>
              <form onSubmit={() => handleConfirm}>
                <div className="mb-2">
                  <label
                    htmlFor="chargePlan"
                    className="block text-lg font-semibold mb-2"
                  >
                    Gói dịch vụ:
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
                    Kỳ hạn hỗ trợ:
                  </label>
                  <select
                    id="period"
                    name="period"
                    className="w-full p-2 border rounded-md"
                    onChange={handlePeriodChange}
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Chọn kỳ hạn dịch vụ
                    </option>
                    {SERVICE_PACK.filter(
                      (pack) => pack.title === chargePlan
                    ).map((pack) => (
                      <React.Fragment key={pack.title}>
                        {pack.priceMonth && (
                          <option value={`Thời hạn 1 tháng`}>
                            {`${pack.priceMonth} - 1 Tháng`}
                          </option>
                        )}
                        {pack.price3Months && (
                          <option value={`Thời hạn 3 tháng`}>
                            {`${pack.price3Months} - 3 Tháng`}
                          </option>
                        )}
                        {pack.price6Months && (
                          <option value={`Thời hạn 6 tháng`}>
                            {`${pack.price6Months} - 6 Tháng`}
                          </option>
                        )}
                        {pack.priceYear && (
                          <option value={`Thời hạn 1 năm`}>
                            {`${pack.priceYear} - 1 Năm`}
                          </option>
                        )}
                      </React.Fragment>
                    ))}
                  </select>
                </div>

                {chargePlan && period && (
                  <>
                    <div className="mb-2 mt-5 border border-dashed border-blue-400 px-3 py-6">
                      <div className="text-2xl font-semibold mb-4 text-blue-600">
                        Thông tin đơn hàng
                      </div>
                      <p className="font-semibold">{chargePlan} </p>
                      <p className="pl-4">{period}</p>

                      <hr className="my-6 border-t" />
                      <div className="mt-8">
                        <p className="font-semibold">Tổng cộng:</p>
                        <p className="pl-4">{total}</p>
                      </div>
                    </div>
                    <Link
                      title="next step"
                      href={`/billing-confirm?chargePlan=${chargePlan}&period=${period}`}
                    >
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3"
                      >
                        Bước tiếp theo
                      </button>
                    </Link>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </HomePageCart>
    </Layout>
  );
}
