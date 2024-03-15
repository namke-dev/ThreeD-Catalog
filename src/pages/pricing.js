import React from "react";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";
import PricingCard from "@/components/layouts/PricingCard";
import { SERVICE_PACK } from "@/data/service_pack_data";

export default function Pricing() {
  return (
    <Layout>
      <HomePageCart
        className="max-w-[1400px] mx-auto
        relative z-10 text-gray-900 m-14 !pt-10 -mb-52 !pb-72
        flex flex-row md:gap-4 items-center justify-center"
      >
        {SERVICE_PACK.map((pack, index) => (
          <PricingCard key={index} pack={pack} />
        ))}
      </HomePageCart>
    </Layout>
  );
}
