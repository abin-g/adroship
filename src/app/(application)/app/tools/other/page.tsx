"use client";

import { FaExternalLinkAlt, FaTools } from "react-icons/fa";

const OtherTools = () => {
    
    const tools = [
        {
            name: "GST Calculator",
            description: "Quickly calculate GST for invoices and bills.",
            url: "https://www.gst.gov.in/",
        },
        {
            name: "Currency Converter",
            description: "Check live exchange rates for international shipments.",
            url: "https://www.xe.com/currencyconverter/",
        },
        {
            name: "Distance Calculator",
            description: "Calculate distance between two cities for logistics planning.",
            url: "https://www.distancecalculator.net/",
        },
        {
            name: "Indian Railways Tracking",
            description: "Track consignments shipped through Indian Railways.",
            url: "https://enquiry.indianrail.gov.in/",
        },
    ];

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="mb-6">
                <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3 text-gray-900">
                    <span className="p-2 rounded-full bg-green-500/10 text-green-600">
                        <FaTools size={28} />
                    </span>
                    Other Tools & Resources
                </h1>
                <p className="mt-2 text-gray-600 text-sm">
                    Access useful external tools to assist in logistics and business operations.
                </p>
                <div className="w-20 h-1 mt-3 rounded-full bg-gradient-to-r from-green-500 to-gray-700"></div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {tools.map((tool, index) => (
                    <div
                        key={index}
                        className="bg-white p-5 flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">
                                {tool.name}
                            </h2>
                            <p className="text-gray-600 text-sm mt-1">{tool.description}</p>
                        </div>
                        <div className="mt-4">
                            <a
                                href={tool.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg shadow hover:bg-green-700 transition"
                            >
                                Visit Tool <FaExternalLinkAlt className="ml-2 h-4 w-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtherTools;
