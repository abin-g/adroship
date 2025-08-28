"use client";

import { useState } from "react";
import { FaCog, FaGlobe, FaPalette, FaBell, FaLink } from "react-icons/fa";
import {
    TextField,
    SelectField,
    CheckboxField,
} from "@/components/Forms/FormFields";

export default function AppSettings() {

    const [formData, setFormData] = useState({
        appName: "Adro Ship",
        language: "en",
        timezone: "Asia/Kolkata",
        theme: "light",
        primaryColor: "green",
        notifications: {
            email: true,
            sms: false,
            push: true,
        },
        apiKey: "sk_live_12345",
        webhookUrl: "https://example.com/webhook",
    });

    const handleChange = (name: string, value: any) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleNestedChange = (
        section: "notifications",
        field: string,
        value: any
    ) => {
        setFormData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Updated App Settings:", formData);
        alert("✅ App settings updated successfully!");
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">

            <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-gray-900">
                    <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                        <FaCog size={28} />
                    </span>
                    Application Settings
                </h1>
                <p className="mt-2 text-gray-600 text-sm">
                    Configure general preferences, appearance, and integrations for your
                    application.
                </p>
                <div className="w-32 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
            </div>


            <form
                onSubmit={handleSubmit}
                className="bg-white shadow rounded-lg p-6 space-y-8"
            >
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <FaGlobe className="text-green-600" /> General
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <TextField
                            label="App Name"
                            name="appName"
                            value={formData.appName}
                            onChange={(val) => handleChange("appName", val)}
                            placeholder="Enter app name"
                        />
                        <SelectField
                            label="Language"
                            name="language"
                            value={formData.language}
                            onChange={(val) => handleChange("language", val)}
                            options={[
                                { value: "en", label: "English" },
                                { value: "hi", label: "Hindi" },
                                { value: "es", label: "Spanish" },
                            ]}
                        />
                        <SelectField
                            label="Timezone"
                            name="timezone"
                            value={formData.timezone}
                            onChange={(val) => handleChange("timezone", val)}
                            options={[
                                { value: "Asia/Kolkata", label: "Asia/Kolkata" },
                                { value: "UTC", label: "UTC" },
                                { value: "America/New_York", label: "America/New_York" },
                            ]}
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <FaPalette className="text-green-600" /> Appearance
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <SelectField
                            label="Theme"
                            name="theme"
                            value={formData.theme}
                            onChange={(val) => handleChange("theme", val)}
                            options={[
                                { value: "light", label: "Light" },
                                { value: "dark", label: "Dark" },
                                { value: "system", label: "System Default" },
                            ]}
                        />
                        <SelectField
                            label="Primary Color"
                            name="primaryColor"
                            value={formData.primaryColor}
                            onChange={(val) => handleChange("primaryColor", val)}
                            options={[
                                { value: "green", label: "Green" },
                                { value: "blue", label: "Blue" },
                                { value: "purple", label: "Purple" },
                            ]}
                        />
                    </div>
                </div>


                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <FaBell className="text-green-600" /> Notifications
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <CheckboxField
                            label="Enable Email Notifications"
                            name="emailNotifications"
                            checked={formData.notifications.email}
                            onChange={(val) => handleNestedChange("notifications", "email", val)}
                        />
                        <CheckboxField
                            label="Enable SMS Notifications"
                            name="smsNotifications"
                            checked={formData.notifications.sms}
                            onChange={(val) => handleNestedChange("notifications", "sms", val)}
                        />
                        <CheckboxField
                            label="Enable Push Notifications"
                            name="pushNotifications"
                            checked={formData.notifications.push}
                            onChange={(val) => handleNestedChange("notifications", "push", val)}
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <FaLink className="text-green-600" /> Integrations
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <TextField
                            label="API Key"
                            name="apiKey"
                            value={formData.apiKey}
                            onChange={(val) => handleChange("apiKey", val)}
                            placeholder="Enter API Key"
                        />
                        <TextField
                            label="Webhook URL"
                            name="webhookUrl"
                            value={formData.webhookUrl}
                            onChange={(val) => handleChange("webhookUrl", val)}
                            placeholder="https://yourapp.com/webhook"
                        />
                    </div>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-green-600 text-white text-sm font-medium rounded-md shadow hover:bg-green-700 transition"
                    >
                        Save App Settings
                    </button>
                </div>
            </form>
        </div>
    );
}
