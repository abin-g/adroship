import Image from "next/image";
import { FC } from "react";
import { FiFileText, FiSearch } from "react-icons/fi";
import { SlBadge } from "react-icons/sl";

const Hero: FC = () => {
    return (
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center gap-12">

            <div className="flex-1 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 border border-green-500 px-3 py-1 text-xs sm:text-sm rounded-full mb-4">
                    <SlBadge className="text-green-500" />
                    #1 Trusted Logistics Partner in India
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    Deliver &nbsp;
                    <span className="text-green-500">Beyond</span> <br />
                    Expectations
                </h1>

                <p className="mt-4 text-gray-300 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">
                    Transform your business with{" "}
                    <span className="text-green-400">cutting-edge logistics solutions</span>.
                    Real-time tracking, competitive pricing, and guaranteed on-time delivery across India.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <button className="flex cursor-pointer items-center justify-center gap-2 bg-green-500 text-white px-5 py-3 rounded hover:bg-green-600 transition-colors duration-200 w-full sm:w-auto">
                        <FiFileText size={18} /> Get Free Quote
                    </button>
                    <button className="flex cursor-pointer items-center justify-center gap-2 bg-gray-800 border border-gray-600 px-5 py-3 rounded hover:bg-gray-700 transition-colors duration-200 w-full sm:w-auto">
                        <FiSearch size={18} /> Track Shipment
                    </button>
                </div>
            </div>

            <div className="flex-1 relative w-full max-w-md sm:max-w-lg lg:max-w-none h-[400px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src="/images/warehouse.png"
                        alt="Warehouse"
                        width={600}
                        height={350}
                        className="object-contain w-[600px] h-[350px]"
                    />
                </div>
            </div>


        </div>
    );
};

export default Hero;
