import React from "react";
import { FaCheckCircle, FaDollarSign } from "react-icons/fa";

function PricingCard({ pack }) {
  return (
    <div
      className="min-w-[280px] max-w-[400px] min-h-[550px] bg-gray-50 border-2 border-dashed rounded hover:shadow-xl hover:scale-105 
      p-8
      transition-all"
    >
      <div className="flex flex-col mb-4 h-[9rem]">
        {/* Header */}
        <h2 className="text-2xl font-bold pb-3 text-center">{pack.title}</h2>
        {pack.priceMonth && (
          <p className="text-gray-500 ">
            Giá chỉ từ
            <FaDollarSign className="inline h-3.5" />
            {pack.priceMonth} / Tháng
          </p>
        )}
        {pack.price3Months && (
          <p className="text-gray-500 ">
            Giá chỉ từ
            <FaDollarSign className="inline h-3.5" />
            {pack.price3Months} / 3 Tháng
          </p>
        )}
        {pack.price6Months && (
          <p className="text-gray-500 ">
            Giá chỉ từ
            <FaDollarSign className="inline h-3.5" />
            {pack.price6Months} / 6 Tháng
          </p>
        )}
        {pack.priceYear && (
          <p className="text-gray-500 ">
            Giá chỉ từ
            <FaDollarSign className="inline h-3.5" />
            {pack.priceYear} / Năm
          </p>
        )}
        {pack.priceSpecial && (
          <p className="text-gray-500 ">
            Liên hệ với chúng tôi để biết thêm chi tiết
          </p>
        )}
      </div>
      <a href="/billing" title="Go to payment">
        <div className="text-center my-8 bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded">
          Mua ngay
        </div>
      </a>
      <p className="text-gray-700 mb-2 font-semibold">Gói dịch vụ sẽ hỗ trợ</p>
      <ul className="list-none space-y-2 text-gray-500">
        {/* Feature list */}
        {pack.includeService &&
          pack.includeService.map((service, index) => (
            <li key={index} className="flex items-center text-sm ">
              <FaCheckCircle className="mr-2 text-blue-500" />
              <span>{service}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PricingCard;
