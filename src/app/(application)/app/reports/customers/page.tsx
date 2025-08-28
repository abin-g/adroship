"use client";

import { HiUserGroup } from "react-icons/hi";
import { FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";

const customers = [
    {
        id: 1,
        name: "Arjun Kumar",
        email: "arjun.k@example.com",
        totalSpent: "₹1,20,000",
        orders: 42,
        lastPurchase: "10 Aug 2025",
    },
    {
        id: 2,
        name: "Priya Sharma",
        email: "priya.s@example.com",
        totalSpent: "₹98,500",
        orders: 30,
        lastPurchase: "05 Aug 2025",
    },
    {
        id: 3,
        name: "Rahul Verma",
        email: "rahul.v@example.com",
        totalSpent: "₹75,200",
        orders: 25,
        lastPurchase: "01 Aug 2025",
    },
];

export default function CustomerInsights() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">

            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-gray-900">
                        <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                            <HiUserGroup size={28} />
                        </span>
                        Customer Insights
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                        Analyze customer behavior, purchases, and loyalty patterns.
                    </p>
                    <div className="w-24 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 flex items-center gap-4">
                    <FaShoppingCart className="text-green-600 text-2xl" />
                    <div>
                        <p className="text-sm text-gray-500">Total Customers</p>
                        <h2 className="text-xl font-bold text-gray-900">1,250</h2>
                    </div>
                </div>

                <div className="bg-white p-6 flex items-center gap-4">
                    <FaMoneyBillWave className="text-green-600 text-2xl" />
                    <div>
                        <p className="text-sm text-gray-500">Revenue (This Month)</p>
                        <h2 className="text-xl font-bold text-gray-900">₹12.5L</h2>
                    </div>
                </div>

                <div className="bg-white p-6 flex items-center gap-4">
                    <MdTrendingUp className="text-green-600 text-2xl" />
                    <div>
                        <p className="text-sm text-gray-500">Avg. Order Value</p>
                        <h2 className="text-xl font-bold text-gray-900">₹4,250</h2>
                    </div>
                </div>

                <div className="bg-white p-6 flex items-center gap-4">
                    <HiUserGroup className="text-green-600 text-2xl" />
                    <div>
                        <p className="text-sm text-gray-500">Returning Customers</p>
                        <h2 className="text-xl font-bold text-gray-900">68%</h2>
                    </div>
                </div>
            </div>

            <div className="bg-white overflow-hidden">
                <table className="w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 text-gray-700 text-xs uppercase tracking-wide border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3">Name</th>
                            <th className="px-6 py-3">Email</th>
                            <th className="px-6 py-3">Total Spent</th>
                            <th className="px-6 py-3">Orders</th>
                            <th className="px-6 py-3">Last Purchase</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {customers.map((c) => (
                            <tr key={c.id} className="hover:bg-green-50 transition">
                                <td className="px-6 py-4 font-medium text-gray-900">{c.name}</td>
                                <td className="px-6 py-4 text-green-700 underline cursor-pointer">
                                    {c.email}
                                </td>
                                <td className="px-6 py-4">{c.totalSpent}</td>
                                <td className="px-6 py-4">{c.orders}</td>
                                <td className="px-6 py-4">{c.lastPurchase}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
