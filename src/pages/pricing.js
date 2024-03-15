import React from "react";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";
import PricingCard from "@/components/layouts/PricingCard";

export default function Pricing() {
  return (
    <Layout>
      <HomePageCart
        className="max-w-[1400px] mx-auto
        relative z-10 text-gray-900 m-14 !pt-10 -mb-52 !pb-72
        flex flex-row gap-10 items-center justify-center"
      >
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </HomePageCart>
    </Layout>
  );
}
