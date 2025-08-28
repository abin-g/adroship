"use client";

import { FaWarehouse, FaPlus, FaEye, FaEdit, FaTrash, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Dummy inventory list
const inventoryList = [
    {
        id: 1,
        itemName: "Product A",
        sku: "SKU001",
        quantity: 120,
        location: "Coimbatore WH1",
        status: "In Stock",
    },
    {
        id: 2,
        itemName: "Product B",
        sku: "SKU002",
        quantity: 0,
        location: "Chennai WH2",
        status: "Out of Stock",
    },
    {
        id: 3,
        itemName: "Product C",
        sku: "SKU003",
        quantity: 45,
        location: "Bangalore WH3",
        status: "Low Stock",
    },
];

const WareHouse = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">

            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-gray-900">
                        <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                            <FaWarehouse size={28} />
                        </span>
                        Inventory Management
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                        Manage stock levels, product details, and warehouse distribution.
                    </p>
                    <div className="w-20 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
                </div>

                <button className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg shadow hover:bg-green-700 transition flex items-center gap-2">
                    <FaPlus size={16} /> Add Item
                </button>
            </div>

            <div className="overflow-x-auto bg-white">
                <table className="w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 text-gray-700 text-xs uppercase tracking-wide border-b border-gray-200">
                        <tr>
                            <th className="px-4 py-3 w-10">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-400 accent-green-500" />
                            </th>
                            <th className="px-6 py-3 font-semibold">Item Name</th>
                            <th className="px-6 py-3 font-semibold">SKU</th>
                            <th className="px-6 py-3 font-semibold">Quantity</th>
                            <th className="px-6 py-3 font-semibold">Location</th>
                            <th className="px-6 py-3 font-semibold">Status</th>
                            <th className="px-6 py-3 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {inventoryList.map((item, index) => (
                            <tr
                                key={item.id}
                                className={`transition-colors duration-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    } hover:bg-green-50`}
                            >
                                <td className="px-4 py-4">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-400 accent-green-500" />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900">{item.itemName}</td>
                                <td className="px-6 py-4">{item.sku}</td>
                                <td className="px-6 py-4">{item.quantity}</td>
                                <td className="px-6 py-4">{item.location}</td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`px-2 py-1 text-xs font-medium rounded-md border ${item.status === "In Stock"
                                                ? "bg-green-100 text-green-700 border-green-200"
                                                : item.status === "Low Stock"
                                                    ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                                                    : "bg-red-100 text-red-700 border-red-200"
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 flex justify-end gap-2">
                                    <button className="px-3 py-1.5 text-xs border border-green-300 rounded-md text-green-600 hover:bg-green-50 transition flex items-center gap-1">
                                        <FaEye size={14} /> View
                                    </button>
                                    <button className="px-3 py-1.5 text-xs border border-blue-300 rounded-md text-blue-600 hover:bg-blue-50 transition flex items-center gap-1">
                                        <FaEdit size={14} /> Update
                                    </button>
                                    <button className="px-3 py-1.5 text-xs border border-red-300 rounded-md text-red-600 hover:bg-red-50 transition flex items-center gap-1">
                                        <FaTrash size={14} /> Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 rounded-b-lg">
                    <p className="text-sm text-gray-600">Showing 1–3 of {inventoryList.length} items</p>
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
};

export default WareHouse;
