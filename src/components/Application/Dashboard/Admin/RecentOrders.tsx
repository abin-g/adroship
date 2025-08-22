import {
    HiPencilAlt,
    HiTrash,
    HiSearch,
} from "react-icons/hi";
import { MdLocalShipping, MdPayment } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { BsSortUp } from "react-icons/bs";

const RecentOrders = () => {

    const orders = [
        {
            id: "ORD-1001",
            customer: "John Doe",
            email: "john@example.com",
            status: "Delivered",
            date: "2025-08-20",
            payment: "Paid",
        },
        {
            id: "ORD-1002",
            customer: "Sophia Brown",
            email: "sophia@example.com",
            status: "In Transit",
            date: "2025-08-19",
            payment: "Pending",
        },
        {
            id: "ORD-1003",
            customer: "Michael Smith",
            email: "michael@example.com",
            status: "RTO",
            date: "2025-08-18",
            payment: "Refunded",
        },
        {
            id: "ORD-1004",
            customer: "Emma Wilson",
            email: "emma@example.com",
            status: "Processing",
            date: "2025-08-17",
            payment: "Paid",
        },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mt-6 bg-white rounded-sm shadow-md border border-gray-100 p-5">


            <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
                <button className="cursor-pointer text-sm text-blue-600 font-medium hover:underline">View All</button>
            </div>

            <div className="overflow-x-auto">

                <table className="w-full text-sm text-left text-gray-700 bg-white">
                    <thead className="bg-gray-50 text-gray-700 text-xs uppercase tracking-wide border-b border-gray-200">
                        <tr>
                            <th className="px-4 py-3 whitespace-nowrap">#</th>
                            <th className="px-6 py-3 font-semibold whitespace-nowrap">
                                Order ID
                            </th>
                            <th className="px-6 py-3 font-semibold whitespace-nowrap">
                                Customer
                            </th>
                            <th className="px-6 py-3 font-semibold whitespace-nowrap">
                                <MdLocalShipping className="text-green-600 inline-block mr-1" />
                                Status
                            </th>
                            <th className="px-6 py-3 font-semibold whitespace-nowrap">
                                <BsCalendarDateFill className="text-green-600 inline-block mr-1" />
                                Date
                            </th>
                            <th className="px-6 py-3 font-semibold whitespace-nowrap">
                                <MdPayment className="text-green-600 inline-block mr-1" />
                                Payment
                            </th>
                            <th className="px-6 py-3 font-semibold">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {orders.map((order, index) => (
                            <tr
                                key={order.id}
                                className={`transition-colors duration-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    } hover:bg-green-50`}
                            >
                                <td className="px-4 py-4">{index + 1}</td>
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    {order.id}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-gray-900 font-medium">
                                            {order.customer}
                                        </span>
                                        <span className="text-sm text-green-700 underline cursor-pointer">
                                            {order.email}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="flex items-center gap-2">
                                        <span
                                            className={`w-2.5 h-2.5 rounded-full ${order.status === "Delivered"
                                                ? "bg-green-500"
                                                : order.status === "In Transit"
                                                    ? "bg-blue-500"
                                                    : order.status === "Processing"
                                                        ? "bg-yellow-500"
                                                        : "bg-red-500"
                                                }`}
                                        ></span>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{order.date}</td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`px-2 py-1 text-xs font-medium rounded-md ${order.payment === "Paid"
                                            ? "bg-green-100 text-green-700 border border-green-200"
                                            : order.payment === "Pending"
                                                ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
                                                : "bg-red-100 text-red-700 border border-red-200"
                                            }`}
                                    >
                                        {order.payment}
                                    </span>
                                </td>
                                <td className="px-6 py-4 flex justify-end space-x-2">
                                    <button className="cursor-pointer flex items-center gap-1 px-3 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
                                        <HiPencilAlt size={16} /> Edit
                                    </button>
                                    <button className="cursor-pointer flex items-center gap-1 px-3 py-1.5 text-sm border border-red-300 rounded-md text-red-600 hover:bg-red-50 transition">
                                        <HiTrash size={16} /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Footer */}
                <div className="flex items-center justify-between px-4 py-3 bg-white">
                    <p className="text-sm text-gray-600">Showing 1–4 of 20 orders</p>
                    <div className="flex items-center space-x-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">
                            <FaChevronLeft size={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-green-500 text-white font-medium">
                            1
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">
                            2
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">
                            <FaChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentOrders;  