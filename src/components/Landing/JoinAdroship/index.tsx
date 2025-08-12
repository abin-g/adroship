import { FaCheckCircle, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function JoinAdroship() {
    return (
        <section className="bg-gradient-to-b from-[#0b1424] to-[#0c2430] text-white py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">

                <div className="inline-flex items-center bg-[#0f1d2d] border border-gray-700 rounded-full px-4 py-1 text-sm mb-6">
                    <IoMdCheckmarkCircleOutline className="text-green-400 mr-2" />
                    <span className="text-white">Trusted by 1000+ Businesses</span>
                </div>


                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                    Ready to Transform <span className="text-green-500">Your Logistics?</span>
                </h1>

                <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                    Join thousands of businesses that trust Adroship for their logistics needs.
                    Get started today with our cutting-edge platform and experience the difference.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition">
                        Start Free Trial
                    </button>
                    <button className="px-6 py-3 bg-[#1a2a3c] border border-gray-600 font-medium rounded-lg hover:bg-gray-800 transition flex items-center gap-2">
                        <FaPhoneAlt size={16} /> Schedule Demo
                    </button>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">

                    <div className="bg-[#121f2e] border border-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition">
                        <FaCheckCircle className="text-green-400 w-8 h-8 mx-auto mb-3" />
                        <h3 className="font-semibold">No Setup Fees</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Get started immediately with zero upfront costs
                        </p>
                    </div>

                    <div className="bg-[#121f2e] border border-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition">
                        <FaPhoneAlt className="text-blue-400 w-8 h-8 mx-auto mb-3" />
                        <h3 className="font-semibold">24/7 Support</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Round-the-clock assistance from our experts
                        </p>
                    </div>

                    <div className="bg-[#121f2e] border border-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition">
                        <FaArrowRight className="text-purple-400 w-8 h-8 mx-auto mb-3" />
                        <h3 className="font-semibold">Quick Setup</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Launch your logistics operations in minutes
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
