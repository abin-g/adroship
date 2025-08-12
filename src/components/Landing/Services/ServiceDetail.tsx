"use client";

import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

const ServiceDetails = () => {
    return (
        <div className="w-full">

            <div className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-gray-600 mb-8">
                    Our Esteemed Service is designed to handle every step of your
                    logistics process with unmatched precision and care. From order
                    fulfillment to final delivery, we ensure a seamless experience for
                    your business and customers.
                </p>

                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3 mb-12">
                    {[
                        "Fast and reliable delivery across all regions",
                        "Real-time tracking and notifications",
                        "Dedicated account manager for every client",
                        "Customizable shipping solutions",
                    ].map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <FiCheckCircle className="text-green-500 mt-1" />
                            <span className="text-gray-700">{feature}</span>
                        </li>
                    ))}
                </ul>

                <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                <ol className="list-decimal pl-6 space-y-3 mb-12 text-gray-700">
                    <li>Submit your logistics request through our platform.</li>
                    <li>
                        Our team processes the request and assigns the best-suited delivery
                        partner.
                    </li>
                    <li>Track your shipment in real-time using our dashboard.</li>
                    <li>Receive your goods with proof of delivery.</li>
                </ol>

                <h3 className="text-xl font-semibold mb-4">Benefits for Your Business</h3>
                <p className="text-gray-600 mb-12">
                    Choosing our Esteemed Service ensures faster turnaround times,
                    increased customer satisfaction, and streamlined supply chain
                    management.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <h4 className="text-lg font-semibold mb-2">
                        Ready to get started with Esteemed Service?
                    </h4>
                    <p className="text-gray-600 mb-4">
                        Contact us today and let us optimize your logistics process.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-all duration-200"
                    >
                        Get a Free Quote
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
