"use client";

import {
    HiDownload,
    HiSearch,
} from "react-icons/hi";
import { BsCalendarDateFill, BsSortUp } from "react-icons/bs";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { MdLocalShipping } from "react-icons/md";

const sales = [
    {
        id: 101,
        orderId: "ORD-2451",
        customer: "Liam S",
        product: "Smartphone X",
        status: "Delivered",
        amount: "₹45,000",
        date: "24 Jul 2024, 3:45 pm",
    },
    {
        id: 102,
        orderId: "ORD-2452",
        customer: "Noah",
        product: "Laptop Pro",
        status: "Pending",
        amount: "₹89,999",
        date: "15 Aug 2024, 12:15 pm",
    },
    {
        id: 103,
        orderId: "ORD-2453",
        customer: "Isabella",
        product: "Headphones Z",
        status: "Cancelled",
        amount: "₹5,999",
        date: "10 Aug 2024, 5:30 pm",
    },
];

export default function SalesReport() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
         
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-gray-900">
                        <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                            <BsCalendarDateFill size={28} />
                        </span>
                        Sales Report
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                        Track, download, and analyze all your sales orders.
                    </p>
                    <div className="w-20 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
                </div>

                <button className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600 transition">
                    + New Order
                </button>
            </div>

            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                    <button className="cursor-pointer flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-green-500 text-white hover:bg-green-600 shadow-sm transition">
                        <HiDownload size={16} /> Download
                    </button>

                    <button className="cursor-pointer flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition">
                        <MdLocalShipping size={16} /> Track Shipments
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
                            <option value="orderId">Order ID</option>
                            <option value="customer">Customer</option>
                            <option value="amount">Amount</option>
                            <option value="date">Date</option>
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

            <div className="overflow-x-auto bg-white">
                <table className="w-full text-sm text-left text-gray-700 bg-white">
                    <thead className="bg-gray-100 text-gray-700 text-xs uppercase tracking-wide border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 font-semibold">Order ID</th>
                            <th className="px-6 py-3 font-semibold">Customer</th>
                            <th className="px-6 py-3 font-semibold">Product</th>
                            <th className="px-6 py-3 font-semibold">Status</th>
                            <th className="px-6 py-3 font-semibold">Amount</th>
                            <th className="px-6 py-3 font-semibold">Date</th>
                            <th className="px-6 py-3 font-semibold">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {sales.map((order, index) => (
                            <tr
                                key={order.id}
                                className={`transition-colors duration-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    } hover:bg-green-50`}
                            >
                                <td className="px-6 py-4 font-medium text-gray-900">{order.orderId}</td>
                                <td className="px-6 py-4">{order.customer}</td>
                                <td className="px-6 py-4">{order.product}</td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`px-2 py-1 text-xs font-medium rounded-md ${order.status === "Delivered"
                                            ? "bg-green-100 text-green-700 border border-green-200"
                                            : order.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
                                                : "bg-red-100 text-red-700 border border-red-200"
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">{order.amount}</td>
                                <td className="px-6 py-4">{order.date}</td>
                                <td className="px-6 py-4 flex space-x-2">
                                    <button className="cursor-pointer px-3 py-1.5 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
                                        View
                                    </button>
                                    <button className="cursor-pointer px-3 py-1.5 text-sm border border-red-300 rounded-md text-red-600 hover:bg-red-50 transition">
                                        Cancel
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex items-center justify-between px-4 py-3 bg-white">
                    <p className="text-sm text-gray-600">Showing 1–3 of 25 orders</p>
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
                            3
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100">
                            <FaChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}