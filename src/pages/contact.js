import React from "react";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";
import PageHeader from "@/components/layouts/PageHeader";

export default function Contact() {
  return (
    <Layout>
      {/* <img src="images/news-header.jpg" className="brightness-50 opacity-70" /> */}
      {/* <PageHeader>Contact Us</PageHeader> */}
      <HomePageCart
        className="col-span-2 max-w-[1400px] 
        flex flex-col items-center 
        mx-auto relative"
      >
        <img src="images/news-header.jpg" className="mt-10 opacity-90 px-8" />

        <div className=" bg-white text-neutral-950 mx-8 p-8 mt-10 mb-20">
          <p className="mb-6">
            Welcome to our 3D Furniture Catalog, where we bring your interior
            design dreams to life! We are passionate about creating unique and
            stylish furniture pieces to enhance your living space.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-amber-400">
            Our Mission
          </h2>
          <p className="mb-6">
            Our mission is to provide high-quality and customizable 3D furniture
            models that cater to diverse tastes and preferences. We believe in
            blending aesthetics with functionality to transform your home or
            office into a place you'll love.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-amber-400">
            Meet the Team
          </h2>
          <p className="mt-8">
            Thank you for exploring our 3D furniture catalog. We are dedicated
            to providing you with a seamless and enjoyable experience as you
            discover the perfect pieces for your space. If you have any
            questions or feedback, feel free to contact us.
          </p>
        </div>
      </HomePageCart>
    </Layout>
  );
}
