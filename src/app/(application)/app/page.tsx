"use client";

import { useState } from "react";
import { FiCalendar } from "react-icons/fi";

import Analytics from '@/components/Application/Dashboard/Admin/Analytics';
import Transactions from '@/components/Application/Dashboard/Admin/Transaction';
import RecentOrders from '@/components/Application/Dashboard/Admin/RecentOrders';

const AdroShipDashboardPage = () => {
    const [activeTab, setActiveTab] = useState("analytics");

    return (
        <div className="p-6 bg-gray-50 min-h-screen">

            <div className="flex items-center justify-between mb-6">
                <div className="flex bg-gray-100 rounded-full p-1">
                    <button
                        onClick={() => setActiveTab("analytics")}
                        className={`cursor-pointer px-4 py-2 text-sm font-medium rounded-full transition ${activeTab === "analytics" ? "bg-black text-white shadow" : "text-gray-600 hover:text-gray-800"}`}>
                        Analytics
                    </button>
                    <button
                        onClick={() => setActiveTab("orders")}
                        className={`cursor-pointer px-4 py-2 text-sm font-medium rounded-full transition ${activeTab === "orders" ? "bg-black text-white shadow" : "text-gray-600 hover:text-gray-800"}`}>
                        Order Status
                    </button>
                </div>

                <div className="flex items-center border border-gray-300 rounded-md px-3 py-1.5 bg-white shadow-sm text-sm text-gray-700">
                    <FiCalendar className="mr-2 text-gray-500" size={16} />
                    <span>17-07-2025 to 17-08-2025</span>
                </div>
            </div>

            {activeTab === "analytics" && (
                <>
                    <Analytics />
                    <Transactions />
                    <RecentOrders />
                </>
            )}

            {activeTab === "orders" && (
                <div className="bg-white rounded-xl shadow p-6 text-center text-gray-700">
                    Order Status content here...
                </div>
            )}
        </div>
    );
};

export default AdroShipDashboardPage;
