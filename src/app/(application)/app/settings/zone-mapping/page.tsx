"use client";

import { useState } from "react";
import { HiSearch, HiDownload } from "react-icons/hi";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { BsSortUp } from "react-icons/bs";
import { SelectField, TextField } from "@/components/Forms/FormFields";

const initialMappings = [
    { id: 1, pincode: "641001", city: "Coimbatore", zone: "South" },
    { id: 2, pincode: "560001", city: "Bangalore", zone: "South" },
    { id: 3, pincode: "110001", city: "Delhi", zone: "North" },
];

export default function ZoneMapping() {
    const [mappings, setMappings] = useState(initialMappings);
    const [formData, setFormData] = useState({
        pincode: "",
        city: "",
        zone: "",
    });

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleAdd = () => {
        if (!formData.pincode || !formData.city || !formData.zone) return;
        setMappings((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                pincode: formData.pincode,
                city: formData.city,
                zone: formData.zone,
            },
        ]);
        setFormData({ pincode: "", city: "", zone: "" });
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Zone Mapping</h1>
                    <p className="mt-2 text-gray-600 text-sm">
                        Map pincodes to logistics zones for efficient routing.
                    </p>
                    <div className="w-20 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
                </div>
            </div>

            <div className="mb-6 bg-white p-4 rounded-lg border border-gray-200">
                <h2 className="text-lg font-semibold mb-3">Add New Mapping</h2>
                <div className="flex items-center gap-4">
                    {/* Multi-select for Pincode */}
                    <SelectField
                        label=""
                        isMulti
                        value={
                            Array.isArray(formData.pincode)
                                ? formData.pincode.map((p: string) => ({ label: p, value: p }))
                                : []
                        }
                        options={[
                            { label: "641001", value: "641001" },
                            { label: "560001", value: "560001" },
                            { label: "110001", value: "110001" },
                            { label: "400001", value: "400001" },
                            { label: "600001", value: "600001" },
                        ]}
                        onChange={(vals: any) =>
                            handleChange(
                                "pincode",
                                vals ? vals.map((v: any) => v.value) : []
                            )
                        }
                        placeholder="Select Pincodes"
                    />

                    {/* Dropdown for City */}
                    <SelectField
                        label=""
                        value={formData.city ? { label: formData.city, value: formData.city } : null}
                        options={[
                            { label: "Coimbatore", value: "Coimbatore" },
                            { label: "Bangalore", value: "Bangalore" },
                            { label: "Delhi", value: "Delhi" },
                            { label: "Mumbai", value: "Mumbai" },
                            { label: "Chennai", value: "Chennai" },
                        ]}
                        onChange={(val: any) => handleChange("city", val?.value || "")}
                        placeholder="Select City"
                    />

                    {/* Dropdown for Zone */}
                    <SelectField
                        label=""
                        value={formData.zone ? { label: formData.zone, value: formData.zone } : null}
                        options={[
                            { label: "North", value: "North" },
                            { label: "South", value: "South" },
                            { label: "East", value: "East" },
                            { label: "West", value: "West" },
                        ]}
                        onChange={(val: any) => handleChange("zone", val?.value || "")}
                        placeholder="Select Zone"
                    />

                    <button
                        onClick={handleAdd}
                        className="px-4 py-2 text-sm rounded-md bg-green-500 text-white hover:bg-green-600"
                    >
                        Add
                    </button>
                </div>
            </div>


            {/* Actions */}
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                    <button className="cursor-pointer flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-green-500 text-white hover:bg-green-600 shadow-sm transition">
                        <HiDownload size={16} /> Download
                    </button>
                    <button className="cursor-pointer flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-400 text-gray-700 hover:bg-gray-100 transition">
                        <MdOutlineFileUpload size={16} /> Import
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-8 pr-3 py-2 text-sm border border-gray-400 rounded-md outline-none text-gray-700"
                        />
                        <HiSearch className="absolute left-2 top-2.5 text-gray-400" size={16} />
                    </div>
                    <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 text-gray-600">
                        <BsSortUp size={16} />
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white">
                <table className="w-full text-sm text-left text-gray-700 bg-white">
                    <thead className="bg-gray-100 text-gray-700 text-xs uppercase tracking-wide border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3">Pincode</th>
                            <th className="px-6 py-3">City</th>
                            <th className="px-6 py-3">Zone</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {mappings.map((row, index) => (
                            <tr
                                key={row.id}
                                className={`transition-colors duration-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    } hover:bg-green-50`}
                            >
                                <td className="px-6 py-4">{row.pincode}</td>
                                <td className="px-6 py-4">{row.city}</td>
                                <td className="px-6 py-4">{row.zone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex items-center justify-between px-4 py-3 bg-white">
                    <p className="text-sm text-gray-600">Showing 1–10 of {mappings.length} mappings</p>
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
