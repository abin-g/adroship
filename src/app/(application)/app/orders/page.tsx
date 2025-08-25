"use client";

import { HiUser, HiSearch, HiDownload, HiCheckCircle } from "react-icons/hi";
import { BsSortUp, BsCalendarDateFill } from "react-icons/bs";
import { FaChevronRight, FaChevronLeft, FaShippingFast, FaEye, FaEdit } from "react-icons/fa";
import { MdBlockFlipped, MdSecurity } from "react-icons/md";

const orders = [
    {
        id: 1,
        orderDate: "20 Aug 2024",
        orderDetails: "Order #1001",
        product: "Hyundai Spare Parts",
        package: "Box - Medium",
        payment: "Paid (UPI)",
        status: "Shipped",
    },
    {
        id: 2,
        orderDate: "22 Aug 2024",
        orderDetails: "Order #1002",
        product: "Logistic Packaging Material",
        package: "Pallet",
        payment: "Pending",
        status: "Processing",
    },
    {
        id: 3,
        orderDate: "25 Aug 2024",
        orderDetails: "Order #1003",
        product: "Scooter Spare Parts",
        package: "Box - Small",
        payment: "Paid (Card)",
        status: "Delivered",
    },
];

export default function Orders() {
    return (
        <div className="p-6 min-h-screen">
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-gray-900">
                        <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                            <FaShippingFast size={28} />
                        </span>
                        Orders
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                        Manage and monitor all customer orders, payments, packages, and delivery status.
                    </p>
                    <div className="w-20 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
                </div>
            </div>

            <div className="overflow-x-auto bg-white rounded-lg shadow">

                <div className="flex items-center justify-between px-4 py-3 bg-white">
                    <div className="flex items-center gap-3">
                        <button className="cursor-pointer flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-green-500 text-white hover:bg-green-600 shadow-sm transition">
                            <HiDownload size={16} /> Download
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search orders..."
                                className="pl-8 pr-3 py-2 text-sm border border-gray-400 rounded-md outline-none text-gray-700"
                            />
                            <HiSearch className="absolute left-2 top-2.5 text-gray-400" size={16} />
                        </div>
                        <div className="relative">
                            <select className="appearance-none px-3 pr-8 py-2 text-sm border border-gray-400 rounded-md outline-none text-gray-700 bg-white cursor-pointer">
                                <option value="">Sort by</option>
                                <option value="date">Order Date</option>
                                <option value="status">Order Status</option>
                                <option value="payment">Payment</option>
                            </select>
                            <svg
                                className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 text-gray-600">
                            <BsSortUp size={16} />
                        </button>
                    </div>
                </div>

                <table className="w-full text-sm text-left text-gray-700 bg-white">
                    <thead className="bg-gray-50 text-gray-700 text-xs uppercase tracking-wide border-b border-gray-200">
                        <tr>
                            <th className="px-4 py-3 align-middle">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-400 accent-green-500" />
                            </th>

                            <th className="px-6 py-3 text-left align-middle font-semibold whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                    <HiUser className="text-green-600" /> Customer
                                </div>
                            </th>

                            <th className="px-6 py-3 text-left align-middle font-semibold whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                    <BsCalendarDateFill className="text-green-600" /> Order Date
                                </div>
                            </th>

                            <th className="px-6 py-3 text-left align-middle font-semibold whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                    <FaShippingFast className="text-green-600" /> Product
                                </div>
                            </th>

                            <th className="px-6 py-3 text-left align-middle font-semibold whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                    <MdSecurity className="text-green-600" /> Package
                                </div>
                            </th>

                            <th className="px-6 py-3 text-left align-middle font-semibold whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                    <HiCheckCircle className="text-green-600" /> Payment
                                </div>
                            </th>

                            <th className="px-6 py-3 text-left align-middle font-semibold whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                    <MdBlockFlipped className="text-green-600" /> Status
                                </div>
                            </th>

                            <th className="px-6 py-3 text-left align-middle font-semibold whitespace-nowrap">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {orders.map((order, index) => (
                            <tr key={order.id} className={`transition-colors duration-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-green-50`}>
                                <td className="px-4 py-4"> <input type="checkbox" className="w-4 h-4 rounded border-gray-400 accent-green-500" /></td>
                                <td className="px-6 py-4">{order.orderDate}</td>
                                <td className="px-6 py-4">{order.orderDetails}</td>
                                <td className="px-6 py-4">{order.product}</td>
                                <td className="px-6 py-4">{order.package}</td>
                                <td className="px-6 py-4">{order.payment}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-md ${order.status === "Delivered"
                                        ? "bg-green-100 text-green-700 border border-green-200"
                                        : order.status === "Shipped"
                                            ? "bg-blue-100 text-blue-700 border border-blue-200"
                                            : "bg-yellow-100 text-yellow-700 border border-yellow-200"
                                        }`}>
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 flex gap-2">
                                    <button className="px-3 py-1.5 text-xs border border-green-300 rounded-md text-green-600 hover:bg-green-50 transition flex items-center gap-1">
                                        <FaEye size={14} /> View
                                    </button>

                                    <button className="px-3 py-1.5 text-xs border border-blue-300 rounded-md text-blue-600 hover:bg-blue-50 transition flex items-center gap-1">
                                        <FaEdit size={14} /> Edit
                                    </button>

                                    <button className="px-3 py-1.5 text-xs border border-red-300 rounded-md text-red-600 hover:bg-red-50 transition flex items-center gap-1">
                                        <MdBlockFlipped size={14} /> Cancel
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex items-center justify-between px-4 py-3 bg-white">
                    <p className="text-sm text-gray-600">Showing 1–3 of 24 orders</p>
                    <div className="flex items-center space-x-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">
                            <FaChevronLeft size={14} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-green-500 text-white font-medium">1</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">2</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">3</button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">
                            <FaChevronRight size={14} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}