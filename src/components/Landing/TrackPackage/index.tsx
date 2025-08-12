"use client"
import Image from "next/image";
import { FC, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SlBadge } from "react-icons/sl";

const TrackPackage: FC = () => {
    const [trackBy, setTrackBy] = useState("mobile");
    const [query, setQuery] = useState("");

    return (
        <div className="bg-gradient-to-br from-green-50 to-white text-black px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center gap-12">

            <div className="flex-1 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 border border-green-500 px-3 py-1 text-xs sm:text-sm rounded-full mb-4">
                    <SlBadge className="text-green-500" />
                    #1 Trusted Logistics Partner in India
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    Track Your <br />
                    <span className="text-green-500">Package</span> <br />
                    Effortlessly
                </h1>

                <p className="mt-4 text-gray-500 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">
                    Enter your details on the right to get real-time updates on your shipment status.
                    Fast, accurate, and reliable tracking across India.
                </p>
            </div>

            <div className="flex-1 max-w-md w-full bg-white rounded p-8 shadow-md">
                <h2 className="text-lg font-semibold mb-6 text-black">Track By:</h2>

                <div className="flex gap-6 mb-6">

                    <div className="flex items-center space-x-2">
                        <input
                            id="radio-mobile"
                            type="radio"
                            name="search-type"
                            className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                        />
                        <label
                            htmlFor="radio-mobile"
                            className="text-sm font-medium text-gray-800 cursor-pointer"
                        >
                            Mobile Number
                        </label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            id="radio-order"
                            type="radio"
                            name="search-type"
                            className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                        />
                        <label
                            htmlFor="radio-order"
                            className="text-sm font-medium text-gray-800 cursor-pointer"
                        >
                            Order ID
                        </label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            id="radio-awb"
                            type="radio"
                            name="search-type"
                            className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                        />
                        <label
                            htmlFor="radio-awb"
                            className="text-sm font-medium text-gray-800 cursor-pointer"
                        >
                            AWB Number
                        </label>
                    </div>
                </div>


                <div className="flex items-center border border-gray-300 rounded overflow-hidden focus:none transition-all duration-200 mb-4 bg-white">
                    <span className="px-4 text-gray-600 text-sm font-medium border-r border-gray-200 bg-gray-50">
                        +91
                    </span>
                    <input
                        type="tel"
                        placeholder="Enter phone number"
                        className="flex-1 p-3 text-gray-800 placeholder-gray-400 outline-none text-sm"
                    />
                </div>

                <button
                    type="button"
                    className="mt-6 text-white w-full bg-green-500 hover:bg-green-600 transition-colors duration-200 rounded py-3 font-semibold flex items-center justify-center gap-2"
                    onClick={() => {
                        alert(`Tracking by ${trackBy} with query: ${query}`);
                    }}
                >
                    <FiSearch size={18} /> Track Now
                </button>

                <hr className="my-6 border-gray-600" />

                <div className="text-left">
                    <h3 className="text-black font-semibold mb-1 text-base">
                        Can’t Find Your Order Details?
                    </h3>
                    <p className="text-gray-400 text-sm">
                        We sent your AWB tracking number to you via Email &amp; SMS upon order confirmation.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default TrackPackage;
