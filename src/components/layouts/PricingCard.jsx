import Link from "next/link";
import React from "react";
import { FaCheckCircle, FaDollarSign } from "react-icons/fa";

function PricingCard() {
  return (
    <div
      className="max-w-[400px] min-h-[500px] bg-gray-50 border-2 border-dashed rounded hover:shadow-xl hover:scale-105 
    p-8
    transition-all"
    >
      <div className="flex flex-col justify-between items-center mb-4">
        {/* Header */}
        <h2 className="text-2xl font-bold">Business Pro</h2>
        <p className="text-gray-500 pb-3">
          Starting at <FaDollarSign className="inline mr-1" />
          389 billed monthly
        </p>
      </div>
      <ul className="list-none space-y-2 text-blue-700">
        {/* Feature list */}
        <li className="flex items-center">
          <FaCheckCircle className="mr-2 text-blue-500" />
          <span>3D asset management</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="mr-2 text-blue-500" />
          <span>Product variations & configurator</span>
        </li>
      </ul>
      <Link title="Go to payment" href="/billing">
        <div className="text-center my-8 bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded">
          Start Trial
        </div>
      </Link>
      <div className="mt-4">
        <p className="text-gray-900 mb-2">Gói dịch vụ sẽ hỗ trợ</p>
        <ul className="text-gray-600 list-disc space-y-2 pl-8">
          <li>100GB storage</li>
          <li>20 Models</li>
          <li>Unlimited bandwidth.</li>
          <li>Custom foreground</li>
        </ul>
      </div>
    </div>
  );
}

export default PricingCard;
