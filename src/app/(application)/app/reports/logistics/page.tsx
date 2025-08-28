"use client";

import { FaTruck, FaBox, FaClock, FaTimesCircle } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";

const shipments = [
    {
        id: "SHP001",
        origin: "Coimbatore",
        destination: "Bangalore",
        status: "Delivered",
        deliveryTime: "2 days",
        date: "12 Aug 2025",
    },
    {
        id: "SHP002",
        origin: "Chennai",
        destination: "Hyderabad",
        status: "In Transit",
        deliveryTime: "-",
        date: "11 Aug 2025",
    },
    {
        id: "SHP003",
        origin: "Mumbai",
        destination: "Delhi",
        status: "Delayed",
        deliveryTime: "5 days",
        date: "09 Aug 2025",
    },
];

export default function LogisticsPerformance() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">

            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-gray-900">
                        <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                            <FaTruck size={28} />
                        </span>
                        Logistics Performance
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                        Track delivery performance, efficiency, and shipment reliability.
                    </p>
                    <div className="w-28 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 flex items-center gap-4">
                    <FaBox className="text-green-600 text-2xl" />
                    <div>
                        <p className="text-sm text-gray-500">Total Shipments</p>
                        <h2 className="text-xl font-bold text-gray-900">8,450</h2>
                    </div>
                </div>

                <div className="bg-white p-6 flex items-center gap-4">
                    <FaClock className="text-green-600 text-2xl" />
                    <div>
                        <p className="text-sm text-gray-500">On-Time Delivery</p>
                        <h2 className="text-xl font-bold text-gray-900">92%</h2>
                    </div>
                </div>

                <div className="bg-white p-6 flex items-center gap-4">
                    <FaTimesCircle className="text-green-600 text-2xl" />
                    <div>
                        <p className="text-sm text-gray-500">Delayed Shipments</p>
                        <h2 className="text-xl font-bold text-gray-900">5%</h2>
                    </div>
                </div>

                <div className="bg-white p-6 flex items-center gap-4">
                    <MdTrendingUp className="text-green-600 text-2xl" />
                    <div>
                        <p className="text-sm text-gray-500">Avg. Delivery Time</p>
                        <h2 className="text-xl font-bold text-gray-900">2.4 days</h2>
                    </div>
                </div>
            </div>


            <div className="bg-white overflow-hidden">
                <table className="w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 text-gray-700 text-xs uppercase tracking-wide border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3">Shipment ID</th>
                            <th className="px-6 py-3">Origin</th>
                            <th className="px-6 py-3">Destination</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Delivery Time</th>
                            <th className="px-6 py-3">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {shipments.map((s) => (
                            <tr key={s.id} className="hover:bg-green-50 transition">
                                <td className="px-6 py-4 font-medium text-gray-900">{s.id}</td>
                                <td className="px-6 py-4">{s.origin}</td>
                                <td className="px-6 py-4">{s.destination}</td>
                                <td
                                    className={`px-6 py-4 font-medium ${s.status === "Delivered"
                                        ? "text-green-600"
                                        : s.status === "Delayed"
                                            ? "text-red-600"
                                            : "text-yellow-600"
                                        }`}
                                >
                                    {s.status}
                                </td>
                                <td className="px-6 py-4">{s.deliveryTime}</td>
                                <td className="px-6 py-4">{s.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
