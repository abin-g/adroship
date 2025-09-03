"use client";

import { HiDownload, HiSearch } from "react-icons/hi";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { BsSortUp } from "react-icons/bs";
import { useState } from "react";
import { SelectField } from "@/components/Forms/FormFields";


const initialPincodes = [
    {
        id: 1,
        city: "Coimbatore",
        state: "Tamil Nadu",
        cod: true,
        prepaid: true,
        pickup: false,
    },
    {
        id: 2,
        city: "Bangalore",
        state: "Karnataka",
        cod: false,
        prepaid: true,
        pickup: true,
    },
    {
        id: 3,
        city: "Mumbai",
        state: "Maharashtra",
        cod: true,
        prepaid: true,
        pickup: true,
    },
];

export default function PincodeMapping() {
    const [pincodes, setPincodes] = useState(initialPincodes);

    const handleChange = (id: number, field: string, value: string) => {
        setPincodes((prev) =>
            prev.map((row) =>
                row.id === id ? { ...row, [field]: field === "cod" || field === "prepaid" || field === "pickup" ? value === "Yes" : value } : row
            )
        );
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Pincode Mapping
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                        Manage and configure COD, Prepaid, and Pickup availability by city.
                    </p>
                    <div className="w-20 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
                </div>
            </div>

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
                        <HiSearch
                            className="absolute left-2 top-2.5 text-gray-400"
                            size={16}
                        />
                    </div>
                    <div className="relative">
                        <select className="appearance-none px-3 pr-8 py-2 text-sm border border-gray-400 rounded-md outline-none text-gray-700 bg-white cursor-pointer">
                            <option value="">Sort by</option>
                            <option value="city">City</option>
                            <option value="state">State</option>
                            <option value="cod">COD</option>
                            <option value="prepaid">Prepaid</option>
                            <option value="pickup">Pickup</option>
                        </select>
                        <svg
                            className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>

                    <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 text-gray-600">
                        <BsSortUp size={16} />
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto bg-white">
                <table className="w-full text-sm text-left text-gray-700 bg-white">
                    <thead className="bg-gray-100 text-gray-700 text-xs uppercase tracking-wide border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3">City</th>
                            <th className="px-6 py-3">State</th>
                            <th className="px-6 py-3">COD</th>
                            <th className="px-6 py-3">Prepaid</th>
                            <th className="px-6 py-3">Pickup</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {pincodes.map((row, index) => (
                            <tr
                                key={row.id}
                                className={`transition-colors duration-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    } hover:bg-green-50`}
                            >
                                <td className="px-6 py-4">
                                    <SelectField
                                        label=""
                                        value={{ label: row.city, value: row.city }}
                                        options={[
                                            { label: "Coimbatore", value: "Coimbatore" },
                                            { label: "Bangalore", value: "Bangalore" },
                                            { label: "Mumbai", value: "Mumbai" },
                                            { label: "Chennai", value: "Chennai" },
                                            { label: "Delhi", value: "Delhi" },
                                        ]}
                                        onChange={(val) =>
                                            handleChange(row.id, "city", (val as any)?.value || "")
                                        }
                                    />
                                </td>

                                <td className="px-6 py-4">
                                    <SelectField
                                        label=""
                                        value={{ label: row.state, value: row.state }}
                                        options={[
                                            { label: "Tamil Nadu", value: "Tamil Nadu" },
                                            { label: "Karnataka", value: "Karnataka" },
                                            { label: "Maharashtra", value: "Maharashtra" },
                                            { label: "Kerala", value: "Kerala" },
                                            { label: "Delhi", value: "Delhi" },
                                        ]}
                                        onChange={(val) =>
                                            handleChange(row.id, "state", (val as any)?.value || "")
                                        }
                                    />
                                </td>

                                <td className="px-6 py-4">
                                    <SelectField
                                        label=""
                                        value={{ label: row.cod ? "Yes" : "No", value: row.cod ? "Yes" : "No" }}
                                        options={[
                                            { label: "Yes", value: "Yes" },
                                            { label: "No", value: "No" },
                                        ]}
                                        onChange={(val) =>
                                            handleChange(row.id, "cod", (val as any)?.value || "No")
                                        }
                                    />
                                </td>

                                <td className="px-6 py-4">
                                    <SelectField
                                        label=""
                                        value={{
                                            label: row.prepaid ? "Yes" : "No",
                                            value: row.prepaid ? "Yes" : "No",
                                        }}
                                        options={[
                                            { label: "Yes", value: "Yes" },
                                            { label: "No", value: "No" },
                                        ]}
                                        onChange={(val) =>
                                            handleChange(row.id, "prepaid", (val as any)?.value || "No")
                                        }
                                    />
                                </td>

                                <td className="px-6 py-4">
                                    <SelectField
                                        label=""
                                        value={{
                                            label: row.pickup ? "Yes" : "No",
                                            value: row.pickup ? "Yes" : "No",
                                        }}
                                        options={[
                                            { label: "Yes", value: "Yes" },
                                            { label: "No", value: "No" },
                                        ]}
                                        onChange={(val) =>
                                            handleChange(row.id, "pickup", (val as any)?.value || "No")
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex items-center justify-between px-4 py-3 bg-white">
                    <p className="text-sm text-gray-600">Showing 1–10 of 24 pincodes</p>
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
