"use client";

import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { TextField, SelectField } from "@/components/Forms/FormFields";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const CourierConfiguration = () => {
    const [formData, setFormData] = useState({
        name: "",
        baseUrl: "",
        apiKey: "",
        apiSecret: "",
        authType: "",
        cod: false,
        prepaid: true,
        pickup: true,
        priority: "",
    });

    const [couriers, setCouriers] = useState<any[]>([]);

    const handleChange = (field: string, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleAdd = () => {
        if (!formData.name || !formData.baseUrl || !formData.apiKey) return;
        setCouriers((prev) => [...prev, { ...formData, id: prev.length + 1 }]);
        setFormData({
            name: "",
            baseUrl: "",
            apiKey: "",
            apiSecret: "",
            authType: "",
            cod: false,
            prepaid: true,
            pickup: true,
            priority: "",
        });
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                    Courier Configuration
                </h1>
                <p className="mt-2 text-gray-600 text-sm">
                    Manage courier providers, API details, and logistics preferences.
                </p>
                <div className="w-24 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
            </div>

            {/* Add Courier Config Form */}
            <div className="mb-6 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <h2 className="text-lg font-semibold mb-3">Add Courier Provider</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField
                        label="Courier Name"
                        placeholder="e.g. Delhivery"
                        value={formData.name}
                        onChange={(e: any) => handleChange("name", e.target.value)}
                    />
                    <TextField
                        label="Base URL"
                        placeholder="https://api.courier.com"
                        value={formData.baseUrl}
                        onChange={(e: any) => handleChange("baseUrl", e.target.value)}
                    />
                    <TextField
                        label="API Key"
                        placeholder="Enter API Key"
                        value={formData.apiKey}
                        onChange={(e: any) => handleChange("apiKey", e.target.value)}
                    />
                    <TextField
                        label="API Secret"
                        placeholder="Enter API Secret"
                        value={formData.apiSecret}
                        onChange={(e: any) => handleChange("apiSecret", e.target.value)}
                    />
                    <SelectField
                        label="Authentication Type"
                        value={
                            formData.authType
                                ? { label: formData.authType, value: formData.authType }
                                : null
                        }
                        options={[
                            { label: "API Key", value: "API Key" },
                            { label: "OAuth2", value: "OAuth2" },
                            { label: "Basic Auth", value: "Basic Auth" },
                        ]}
                        onChange={(val: any) => handleChange("authType", val?.value || "")}
                    />
                    <SelectField
                        label="Priority"
                        value={
                            formData.priority
                                ? { label: formData.priority, value: formData.priority }
                                : null
                        }
                        options={[
                            { label: "High", value: "High" },
                            { label: "Medium", value: "Medium" },
                            { label: "Low", value: "Low" },
                        ]}
                        onChange={(val: any) => handleChange("priority", val?.value || "")}
                    />
                </div>

                {/* Service Support */}
                <div className="flex items-center gap-6 mt-4">
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                        <input
                            type="checkbox"
                            checked={formData.cod}
                            onChange={(e) => handleChange("cod", e.target.checked)}
                        />
                        COD Supported
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                        <input
                            type="checkbox"
                            checked={formData.prepaid}
                            onChange={(e) => handleChange("prepaid", e.target.checked)}
                        />
                        Prepaid Supported
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-700">
                        <input
                            type="checkbox"
                            checked={formData.pickup}
                            onChange={(e) => handleChange("pickup", e.target.checked)}
                        />
                        Pickup Supported
                    </label>
                </div>

                <div className="mt-4">
                    <button
                        onClick={handleAdd}
                        className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-green-500 text-white hover:bg-green-600"
                    >
                        <HiPlus size={16} /> Add Provider
                    </button>
                </div>
            </div>


            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="overflow-x-auto">
                    <div className="max-h-[500px] overflow-y-auto">
                        <table className="w-full text-sm text-left text-gray-700">
                            <thead className="bg-gray-100 text-gray-700 text-xs uppercase tracking-wide border-b border-gray-200 sticky top-0 z-10">
                                <tr>
                                    <th className="px-6 py-3">Courier</th>
                                    <th className="px-6 py-3">Base URL</th>
                                    <th className="px-6 py-3">Auth Type</th>
                                    <th className="px-6 py-3">COD</th>
                                    <th className="px-6 py-3">Prepaid</th>
                                    <th className="px-6 py-3">Pickup</th>
                                    <th className="px-6 py-3">Priority</th>
                                    <th className="px-6 py-3 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {couriers.map((row) => (
                                    <tr
                                        key={row.id}
                                        className="hover:bg-green-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 font-medium">{row.name}</td>
                                        <td className="px-6 py-4">{row.baseUrl}</td>
                                        <td className="px-6 py-4">{row.authType}</td>
                                        <td className="px-6 py-4">
                                            {row.cod ? (
                                                <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                                                    Yes
                                                </span>
                                            ) : (
                                                <span className="px-2 py-1 text-xs rounded bg-red-100 text-red-600">
                                                    No
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            {row.prepaid ? (
                                                <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                                                    Yes
                                                </span>
                                            ) : (
                                                <span className="px-2 py-1 text-xs rounded bg-red-100 text-red-600">
                                                    No
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            {row.pickup ? (
                                                <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                                                    Yes
                                                </span>
                                            ) : (
                                                <span className="px-2 py-1 text-xs rounded bg-red-100 text-red-600">
                                                    No
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">{row.priority}</td>
                                        <td className="px-6 py-4 text-center flex gap-3 justify-center">
                                            <button className="p-2 rounded-full hover:bg-green-100 text-green-600 transition">
                                                <FiEdit size={16} />
                                            </button>
                                            <button className="p-2 rounded-full hover:bg-red-100 text-red-600 transition">
                                                <FiTrash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default CourierConfiguration;