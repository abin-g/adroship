import Image from "next/image";
import { FiFileText } from "react-icons/fi";
import { SlBadge } from "react-icons/sl";

const ExpressDelivery = () => {
    return (
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 lg:px-20 py-16 flex flex-col lg:flex-row items-center gap-12">

            <div className="flex-1 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 border border-green-500 px-3 py-1 text-xs sm:text-sm rounded-full mb-4">
                    <SlBadge className="text-green-500" />
                    #1 Quick Logistics Provider in India
                </span>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    Fast local deliveries <br />
                    <span className="text-green-500">Reliable & Cost-effective</span> <br />
                    for your business
                </h1>

                <p className="mt-4 text-gray-300 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base">
                    Elevate your logistics with our <span className="text-green-400">rapid and secure delivery services</span>.
                    Enjoy real-time updates, affordable pricing, and unmatched coverage across India.
                </p>

                <div className="mt-6 flex justify-center lg:justify-start">
                    <button className="flex cursor-pointer items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-colors duration-200 w-full sm:w-auto">
                        <FiFileText size={18} /> Get Free Quote
                    </button>
                </div>
            </div>

            <div className="flex-1 relative w-full max-w-md sm:max-w-lg lg:max-w-none h-[400px]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src="/images/qbanner.webp"
                        alt="Quick Logistics Warehouse"
                        width={600}
                        height={350}
                        className="object-contain w-[600px] h-[350px]"
                    />
                </div>
            </div>

        </div>
    );
}

export default ExpressDelivery;