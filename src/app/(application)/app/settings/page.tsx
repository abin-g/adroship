"use client";

import { useState } from "react";
import { FaUser, FaCog } from "react-icons/fa";
import UserSettings from "./app/page";
import AppSettings from "./users/page";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<"user" | "app">("user");

    const tabs = [
        { key: "user", label: "User Settings", icon: <FaUser size={18} /> },
        { key: "app", label: "Application Settings", icon: <FaCog size={18} /> },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">

            <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    Settings
                </h1>
                <p className="mt-1 text-gray-600 text-sm">
                    Manage your account and application preferences.
                </p>
            </div>


            <div className="flex border-b border-gray-200 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key as "user" | "app")}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition ${activeTab === tab.key
                                ? "text-green-600 border-green-600"
                                : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                            }`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>

            <div>
                {activeTab === "user" && <UserSettings />}
                {activeTab === "app" && <AppSettings />}
            </div>
        </div>
    );
}
