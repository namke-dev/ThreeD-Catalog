import React from "react";
import Layout from "@/components/layouts/Layout";
import HomePageCart from "@/components/layouts/HomePageCart";

export default function About() {
  return (
    <Layout>
      {/* <img src="images/news-header.jpg" className="brightness-50 opacity-70" /> */}
      {/* <PageHeader>About Us</PageHeader> */}
      <HomePageCart
        className="max-w-[1400px] mx-auto
        relative z-10 text-gray-900 m-14 !pt-10 !pb-32 -mb-52"
      >
        <img src="images/news-header.jpg" className="opacity-90 px-8" />

        <div className="px-16 mx-8 my-10 bg-neutral-100">
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
          <div className="flex flex-wrap justify-center gap-36">
            {/* Team member 1 */}
            <div className="max-w-sm mx-4 my-4">
              <img
                src="textures/Wood_white.jpg"
                alt="Team Member 1"
                className="w-full h-48 object-cover rounded-full"
              />
              <h3 className="text-lg font-semibold mt-2">Hai Ngo</h3>
              <p>Co-Founder & 3D Designer</p>
            </div>

            {/* Team member 2 */}
            <div className="max-w-sm mx-4 my-4 ">
              <img
                src="textures/Wood_white.jpg"
                alt="Team Member 2"
                className="w-full h-48 object-cover rounded-full"
              />
              <h3 className="text-lg font-semibold mt-2">Hai Ngo</h3>
              <p className="text-gray-00">Lead Developer</p>
            </div>

            {/* Add more team members as needed */}
          </div>

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
