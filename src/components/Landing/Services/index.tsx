"use client";

import Link from "next/link";
import { FiTruck, FiZap, FiPackage, FiArrowRight } from "react-icons/fi";

const services = [
    {
        name: "Domestic Shipping",
        href: "/services/domestic-shipping",
        description: "Reliable and cost-effective delivery within the country.",
        icon: <FiTruck className="text-green-500 text-3xl" />,
    },
    {
        name: "Express Shipping",
        href: "#",
        description: "Fast-track deliveries for urgent shipments.",
        icon: <FiZap className="text-green-500 text-3xl" />,
    },
    {
        name: "Cargo Shipping",
        href: "#",
        description: "Efficient handling for large and bulk shipments.",
        icon: <FiPackage className="text-green-500 text-3xl" />,
    },
];

const Services = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12 text-center">

            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-6">
                Esteemed <span className="text-green-600">Service</span>
            </h1>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                Explore our range of shipping services designed to meet your needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                    <div
                        key={service.name}
                        className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 bg-white"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            {service.icon}
                            <h2 className="text-xl font-semibold">{service.name}</h2>
                        </div>
                        <p className="text-gray-500 text-sm mb-6 text-left">{service.description}</p>

                        <Link
                            href={service.href}
                            className={`flex items-center gap-1 text-green-600 text-sm font-medium hover:underline ${service.href === "#" ? "pointer-events-none text-gray-400 hover:no-underline" : ""
                                }`}
                        >
                            Learn More <FiArrowRight />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
