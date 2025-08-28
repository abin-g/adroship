"use client";

import { useState } from "react";
import { FaUser, FaLock, FaBell, FaCog } from "react-icons/fa";
import {
    TextField,
    SelectField,
    CheckboxField,
    PhoneField,
} from "@/components/Forms/FormFields";

export default function UserSettings() {
    const [formData, setFormData] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+91 9876543210",
        role: "Manager",
        password: "",
        notifications: true,
        theme: "light",
    });

    const handleChange = (name: string, value: any) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Updated Settings:", formData);
        alert("✅ Settings updated successfully!");
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">

            <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-gray-900">
                    <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                        <FaCog size={28} />
                    </span>
                    User Settings
                </h1>
                <p className="mt-2 text-gray-600 text-sm">
                    Manage your profile, security, and preferences below.
                </p>
                <div className="w-28 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
            </div>


            <form
                onSubmit={handleSubmit}
                className="bg-white shadow rounded-lg p-6 space-y-8"
            >
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <FaUser className="text-green-600" /> Profile Information
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <TextField
                            label="Full Name"
                            name="name"
                            value={formData.name}
                            onChange={(val) => handleChange("name", val)}
                            placeholder="Enter your name"
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={(val) => handleChange("email", val)}
                            placeholder="Enter your email"
                        />
                        <PhoneField
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={(val) => handleChange("phone", val)}
                        />
                        <SelectField
                            label="Role"
                            name="role"
                            value={formData.role}
                            onChange={(val) => handleChange("role", val)}
                            options={[
                                { value: "Admin", label: "Admin" },
                                { value: "Manager", label: "Manager" },
                                { value: "Staff", label: "Staff" },
                            ]}
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <FaLock className="text-green-600" /> Security
                    </h2>
                    <TextField
                        label="New Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={(val) => handleChange("password", val)}
                        placeholder="Enter new password"
                    />
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <FaBell className="text-green-600" /> Preferences
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <CheckboxField
                            label="Enable Email Notifications"
                            name="notifications"
                            checked={formData.notifications}
                            onChange={(val) => handleChange("notifications", val)}
                        />
                        <SelectField
                            label="Theme"
                            name="theme"
                            value={formData.theme}
                            onChange={(val) => handleChange("theme", val)}
                            options={[
                                { value: "light", label: "Light Mode" },
                                { value: "dark", label: "Dark Mode" },
                            ]}
                        />
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-green-600 text-white text-sm font-medium rounded-md shadow hover:bg-green-700 transition"
                    >
                        Save Changes
                    </button>
                </div>
            </form>

        </div>
    );
}