"use client";

import { useState } from "react";
import { HiUser } from "react-icons/hi";

const AddUser = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        role: "",
        department: "",
        location: "",
        password: "",
        confirmPassword: "",
        twoFA: false,
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("User Data:", formData);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="mb-6 flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-gray-900">
                        <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                            <HiUser size={28} />
                        </span>
                        <span className="bg-gradient-to-r from-green-600 to-gray-800 bg-clip-text text-transparent">
                            Add Users
                        </span>
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                        Manage and monitor all user accounts, their roles, and authentication status.
                    </p>
                    <div className="w-20 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
                </div>

                <button className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600 transition">
                    Manage User
                </button>
            </div>


            <form
                onSubmit={handleSubmit}
                className="bg-white p-6"
            >

            </form>
        </div>
    );
};

export default AddUser;
