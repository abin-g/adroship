"use client";

import { HiDownload, HiSearch, HiCheckCircle, HiXCircle } from "react-icons/hi";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { BsSortUp } from "react-icons/bs";
import { PiCreditCardBold } from "react-icons/pi";

const invoices = [
    {
        id: 1,
        customer: "Liam S",
        email: "smith@example.com",
        invoiceNo: "INV-2024-001",
        amount: "₹12,500",
        status: "Paid",
        date: "24 Jun 2024, 9:23 pm",
        method: "Credit Card",
    },
    {
        id: 2,
        customer: "Noah",
        email: "anderson@example.com",
        invoiceNo: "INV-2024-002",
        amount: "₹7,800",
        status: "Pending",
        date: "15 Mar 2023, 2:45 pm",
        method: "UPI",
    },
    {
        id: 3,
        customer: "Isabella",
        email: "garcia@example.com",
        invoiceNo: "INV-2024-003",
        amount: "₹9,200",
        status: "Overdue",
        date: "10 Apr 2022, 11:30 am",
        method: "Bank Transfer",
    },
];

export default function Billing() {
    return (
        <div className="p-6 min-h-screen">
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-gray-900">
                        <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                            <PiCreditCardBold size={28} />
                        </span>
                        Billing
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                        Track invoices, payment history, and outstanding balances of your customers.
                    </p>
                    <div className="w-20 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
                </div>
            </div>

            <div className="overflow-x-auto bg-white">
                <div className="flex items-center justify-between px-4 py-3 bg-white ">
                    <div className="flex items-center gap-3">
                        <button className="cursor-pointer flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-green-500 text-white hover:bg-green-600 shadow-sm transition">
                            <HiDownload size={16} /> Export Report
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search invoices..."
                                className="pl-8 pr-3 py-2 text-sm border border-gray-400 rounded-md outline-none text-gray-700"
                            />
                            <HiSearch className="absolute left-2 top-2.5 text-gray-400" size={16} />
                        </div>
                        <div className="relative">
                            <select className="appearance-none px-3 pr-8 py-2 text-sm border border-gray-400 rounded-md outline-none text-gray-700 bg-white cursor-pointer">
                                <option value="">Sort by</option>
                                <option value="date">Date</option>
                                <option value="amount">Amount</option>
                                <option value="status">Status</option>
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

                {/* Table */}
                <table className="w-full text-sm text-left text-gray-700 bg-white ">
                    <thead className="bg-gray-50 text-gray-700 text-xs uppercase tracking-wide border-b border-gray-200">
                        <tr>
                            <th className="px-4 py-3 whitespace-nowrap">#</th>
                            <th className="px-6 py-3 font-semibold whitespace-nowrap">Invoice No</th>
                            <th className="px-6 py-3 font-semibold whitespace-nowrap">Customer</th>
                            <th className="px-6 py-3 font-semibold whitespace-nowrap">Amount</th>
                            <th className="px-6 py-3 font-semibold whitespace-nowrap">Status</th>
                            <th className="px-6 py-3 font-semibold whitespace-nowrap">Payment Method</th>
                            <th className="px-6 py-3 font-semibold whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                    <BsCalendarDateFill className="text-green-600" /> Date
                                </div>
                            </th>
                            <th className="px-6 py-3 font-semibold whitespace-nowrap">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {invoices.map((invoice, index) => (
                            <tr
                                key={invoice.id}
                                className={`transition-colors duration-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    } hover:bg-green-50`}
                            >
                                <td className="px-4 py-4">{invoice.id}</td>

                                <td className="px-6 py-4 font-medium text-gray-900">{invoice.invoiceNo}</td>

                                <td className="px-6 py-4 flex flex-col">
                                    <span className="text-gray-900 font-medium">{invoice.customer}</span>
                                    <span className="text-xs text-green-700">{invoice.email}</span>
                                </td>

                                <td className="px-6 py-4 font-semibold text-gray-800">{invoice.amount}</td>

                                <td className="px-6 py-4">
                                    <span
                                        className={`flex items-center gap-2 px-2 py-1 text-xs font-medium rounded-md border
                                            ${invoice.status === "Paid"
                                                ? "bg-green-100 text-green-700 border-green-200"
                                                : invoice.status === "Pending"
                                                    ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                                                    : "bg-red-100 text-red-700 border-red-200"
                                            }`}
                                    >
                                        {invoice.status === "Paid" ? (
                                            <HiCheckCircle size={14} />
                                        ) : invoice.status === "Pending" ? (
                                            <BsCalendarDateFill size={14} />
                                        ) : (
                                            <HiXCircle size={14} />
                                        )}
                                        {invoice.status}
                                    </span>
                                </td>

                                <td className="px-6 py-4">{invoice.method}</td>

                                <td className="px-6 py-4">{invoice.date}</td>

                                <td className="px-6 py-4 flex justify-end">
                                    <button className="cursor-pointer flex items-center gap-1 px-3 py-1.5 text-sm border border-green-300 rounded-md text-green-600 hover:bg-green-50 transition">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex items-center justify-between px-4 py-3 bg-white ">
                    <p className="text-sm text-gray-600">Showing 1–10 of 24 invoices</p>
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
