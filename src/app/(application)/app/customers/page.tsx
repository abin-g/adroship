"use client";

import { HiUser, HiCheckCircle, HiDownload, HiSearch } from "react-icons/hi";
import { MdSecurity, MdBlockFlipped } from "react-icons/md";
import { BsCalendarDateFill } from "react-icons/bs";
import { RiUserSharedFill } from "react-icons/ri";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { BsSortUp } from "react-icons/bs";
import { PiUsersThreeBold } from "react-icons/pi";

const users = [
    {
        id: 1,
        name: "Liam S",
        email: "smith@example.com",
        role: "Project Manager",
        status: "Active",
        joined: "24 Jun 2024, 9:23 pm",
        kyc: true,
        avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
        id: 2,
        name: "Noah",
        email: "anderson@example.com",
        role: "UX Designer",
        status: "Active",
        joined: "15 Mar 2023, 2:45 pm",
        kyc: true,
        avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
        id: 3,
        name: "Isabella",
        email: "garcia@example.com",
        role: "Front-End Developer",
        status: "Inactive",
        joined: "10 Apr 2022, 11:30 am",
        kyc: false,
        avatar: "https://i.pravatar.cc/40?img=3",
    },
];

export default function Customers() {
    return (
        <div className="p-6 min-h-screen">
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-gray-900">
                        <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                            <PiUsersThreeBold size={28} />
                        </span>
                        Customers
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                        Manage and monitor all customer accounts, their roles, and KYC verification status.
                    </p>
                    <div className="w-20 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
                </div>
            </div>

            <div className="overflow-x-auto bg-white">
                <div className="flex items-center justify-between px-4 py-3 bg-white ">
                    <div className="flex items-center gap-3">
                        <button className="cursor-pointer flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-green-500 text-white hover:bg-green-600 shadow-sm transition">
                            <HiDownload size={16} /> Download
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
                        <div className="relative">
                            <select className="appearance-none px-3 pr-8 py-2 text-sm border border-gray-400 rounded-md outline-none text-gray-700 bg-white cursor-pointer">
                                <option value="">Sort by</option>
                                <option value="name">Name</option>
                                <option value="email">Email</option>
                                <option value="role">Role</option>
                                <option value="date">Joined Date</option>
                            </select>
                            <svg
                                className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>

                        <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 text-gray-600">
                            <BsSortUp size={16} />
                        </button>
                    </div>
                </div>

                {/* Table */}
                <table className="w-full text-sm text-left text-gray-700 bg-white ">
                    <thead className="bg-gray-50 text-gray-700 text-xs uppercase tracking-wide border-b border-gray-200">
                        <tr>
                            <th className="px-4 py-3 whitespace-nowrap">
                                <input type="checkbox" className="w-4 h-4 rounded border-gray-400 accent-green-500" />
                            </th>

                            <th className="px-6 py-3 font-semibold whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                    <HiUser className="text-green-600" /> Full Name
                                </div>
                            </th>

                            <th className="px-6 py-3 font-semibold whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                    <RiUserSharedFill className="text-green-600" /> Role
                                </div>
                            </th>

                            <th className="px-6 py-3 font-semibold whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                    <HiCheckCircle className="text-green-600" /> Status
                                </div>
                            </th>

                            <th className="px-6 py-3 font-semibold whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                    <BsCalendarDateFill className="text-green-600" /> Joined Date
                                </div>
                            </th>

                            <th className="px-6 py-3 font-semibold whitespace-nowrap">
                                <div className="flex items-center gap-2">
                                    <MdSecurity className="text-green-600" /> KYC Verified
                                </div>
                            </th>

                            <th className="px-6 py-3 font-semibold text-left whitespace-nowrap">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                        {users.map((user, index) => (
                            <tr
                                key={user.id}
                                className={`transition-colors duration-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                    } hover:bg-green-50`}
                            >
                                <td className="px-4 py-4">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-400 accent-green-500" />
                                </td>

                                <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center font-semibold shadow-sm">
                                        {(() => {
                                            const parts = user.name.trim().split(" ");
                                            if (parts.length === 1) {
                                                return parts[0][0].toUpperCase();
                                            } else {
                                                return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
                                            }
                                        })()}
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="text-gray-900 font-medium">{user.name}</span>
                                        <span className="text-sm text-green-700 underline cursor-pointer">
                                            {user.email}
                                        </span>
                                    </div>
                                </td>

                                <td className="px-6 py-4">{user.role}</td>

                                <td className="px-6 py-4">
                                    <span className="flex items-center gap-2">
                                        <span
                                            className={`w-2.5 h-2.5 rounded-full ${user.status === "Active" ? "bg-green-500" : "bg-red-500"
                                                }`}
                                        ></span>
                                        {user.status}
                                    </span>
                                </td>

                                <td className="px-6 py-4">{user.joined}</td>

                                <td className="px-6 py-4">
                                    <span
                                        className={`px-2 py-1 text-xs font-medium rounded-md ${user.kyc
                                            ? "bg-green-100 text-green-700 border border-green-200"
                                            : "bg-gray-200 text-gray-500 border border-gray-300"
                                            }`}
                                    >
                                        {user.kyc ? "Verified" : "Pending"}
                                    </span>
                                </td>

                                <td className="px-6 py-4 flex justify-end">
                                    <button className="cursor-pointer flex items-center gap-1 px-3 py-1.5 text-sm border border-red-300 rounded-md text-red-600 hover:bg-red-50 transition">
                                        <MdBlockFlipped size={16} /> Disable User
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex items-center justify-between px-4 py-3 bg-white ">
                    <p className="text-sm text-gray-600">Showing 1–10 of 24 users</p>
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
