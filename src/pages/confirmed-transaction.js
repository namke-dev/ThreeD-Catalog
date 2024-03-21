import Layout from "@/components/layouts/Layout";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

export default function ConfirmedTransaction() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <FiCheckCircle className="text-green-500 w-16 h-16 mb-4" />
        <h1 className="text-2xl font-bold mb-2">
          Đã hoàn tất thông tin thanh toán
        </h1>
        <p className="text-lg text-gray-600">
          Thông tin đơn hàng của bạn đã được hệ thống ghi nhận.
        </p>
        <Link href="/">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3"
          >
            Quay lại home
          </button>
        </Link>
      </div>
    </Layout>
  );
}
