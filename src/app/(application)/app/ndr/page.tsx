"use client";

import { HiUser, HiSearch, HiDownload } from "react-icons/hi";
import { BsSortUp, BsCalendarDateFill } from "react-icons/bs";
import { FaChevronRight, FaChevronLeft, FaEye, FaEdit, FaTruckLoading } from "react-icons/fa";
import { MdBlockFlipped, MdOutlinePendingActions } from "react-icons/md";

const ndrList = [
    {
        id: 1,
        orderId: "ORD-1001",
        customer: "Arun Kumar",
        date: "20 Aug 2024",
        reason: "Address not found",
        attempts: 2,
        status: "Pending",
    },
    {
        id: 2,
        orderId: "ORD-1002",
        customer: "Sita Devi",
        date: "22 Aug 2024",
        reason: "Customer not available",
        attempts: 3,
        status: "Resolved",
    },
    {
        id: 3,
        orderId: "ORD-1003",
        customer: "Ramesh Singh",
        date: "25 Aug 2024",
        reason: "Wrong phone number",
        attempts: 1,
        status: "Processing",
    },
];

export default function NDR() {
    return (
        <div className="p-6 min-h-screen bg-gray-50">

            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-gray-900">
                    <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                        <FaTruckLoading size={28} />
                    </span>
                    NDR List (Non-Delivery Reports)
                </h1>
                <p className="mt-2 text-gray-600 text-sm">
                    View, track, and resolve failed delivery attempts in one place.
                </p>
                <div className="w-28 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
            </div>

            <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="flex items-center gap-3">
                    <button className="cursor-pointer flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-green-500 text-white hover:bg-green-600 shadow-sm transition">
                        <HiDownload size={16} /> Export NDR
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search NDR..."
                            className="pl-8 pr-3 py-2 text-sm border border-gray-300 rounded-md outline-none text-gray-700 focus:ring-2 focus:ring-green-400"
                        />
                        <HiSearch className="absolute left-2 top-2.5 text-gray-400" size={16} />
                    </div>
                    <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 text-gray-600">
                        <BsSortUp size={16} />
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto bg-white">
                <table className="w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 text-gray-700 text-xs uppercase tracking-wide border-b border-gray-200">
                        <tr>
                            <th className="px-4 py-3 w-10">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-400 accent-green-500" />
                            </th>
                            <th className="px-6 py-3 font-semibold">Order ID</th>
                            <th className="px-6 py-3 font-semibold">
                                <div className="flex items-center gap-2">
                                    <HiUser className="text-green-600" /> Customer
                                </div>
                            </th>
                            <th className="px-6 py-3 font-semibold">
                                <div className="flex items-center gap-2">
                                    <BsCalendarDateFill className="text-green-600" /> Date
                                </div>
                            </th>
                            <th className="px-6 py-3 font-semibold">Reason</th>
                            <th className="px-6 py-3 font-semibold">Attempts</th>
                            <th className="px-6 py-3 font-semibold">
                                <div className="flex items-center gap-2">
                                    <MdOutlinePendingActions className="text-green-600" /> Status
                                </div>
                            </th>
                            <th className="px-6 py-3 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {ndrList.map((ndr, index) => (
                            <tr
                                key={ndr.id}
                                className={`transition-colors duration-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    } hover:bg-green-50`}
                            >
                                <td className="px-4 py-4">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-400 accent-green-500" />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">{ndr.orderId}</td>
                                <td className="px-6 py-4">{ndr.customer}</td>
                                <td className="px-6 py-4">{ndr.date}</td>
                                <td className="px-6 py-4 text-gray-600">{ndr.reason}</td>
                                <td className="px-6 py-4">{ndr.attempts}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-md border ${ndr.status === "Resolved"
                                        ? "bg-green-100 text-green-700 border-green-200"
                                        : ndr.status === "Processing"
                                            ? "bg-blue-100 text-blue-700 border-blue-200"
                                            : "bg-yellow-100 text-yellow-700 border-yellow-200"
                                        }`}
                                    >
                                        {ndr.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 flex justify-end gap-2">
                                    <button className="px-3 py-1.5 text-xs border border-green-300 rounded-md text-green-600 hover:bg-green-50 transition flex items-center gap-1">
                                        <FaEye size={14} /> View
                                    </button>
                                    <button className="px-3 py-1.5 text-xs border border-blue-300 rounded-md text-blue-600 hover:bg-blue-50 transition flex items-center gap-1">
                                        <FaEdit size={14} /> Update
                                    </button>
                                    <button className="px-3 py-1.5 text-xs border border-red-300 rounded-md text-red-600 hover:bg-red-50 transition flex items-center gap-1">
                                        <MdBlockFlipped size={14} /> Close
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 rounded-b-lg">
                    <p className="text-sm text-gray-600">Showing 1–3 of 10 NDRs</p>
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