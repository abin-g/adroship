"use client";

import Image from "next/image";
import Link from "next/link";

const partners = [
    {
        id: 1,
        logoSrc: "/partners/crl-5.png",
        name: "Partner One",
        shortDescription:
            "Partner One offers seamless logistics with extensive domestic coverage and quick delivery options.",
        details: {
            "Serviceability": "20000 pin codes",
            "Cash on Delivery": "Yes",
            "Tracking": "Yes",
            "International Courier Facility": "No",
            "Domestic Courier Facility": "Yes",
        },
    },
    {
        id: 2,
        logoSrc: "/partners/crl-2.png",
        name: "Partner Two",
        shortDescription:
            "Partner Two specializes in express shipping and bulk cargo handling with modern fleet management.",
        details: {
            "Serviceability": "18000 pin codes",
            "Cash on Delivery": "No",
            "Tracking": "Yes",
            "International Courier Facility": "Yes",
            "Domestic Courier Facility": "Yes",
        },
    },
];

const PartnerList = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">

            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-6">
                Our Trusted <span className="text-green-600">Logistics Partners</span>
            </h1>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                Using multiple courier services, delivering to more than 24000+ pin codes in India seems like a walk in the park.
            </p>

            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {partners.map((partner) => (
                    <div
                        key={partner.id}
                        className="bg-white border border-gray-200 rounded-xl p-6"
                    >
                        <div className="mb-4">
                            <Image
                                src={partner.logoSrc}
                                alt={`${partner.name} Logo`}
                                width={200}
                                height={100}
                                className="object-contain"
                            />
                        </div>

                        <p className="text-gray-700 mb-6">{partner.shortDescription}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                            {Object.entries(partner.details).map(([key, value]) => (
                                <div key={key}>
                                    <dt className="font-medium text-gray-600">{key}:</dt>
                                    <dd className="text-gray-900">{value}</dd>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>


            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center mt-5">
                <h4 className="text-lg font-semibold mb-2">
                    Ready to grow your business with us?
                </h4>
                <p className="text-gray-600 mb-4">
                    Become a trusted logistics partner and unlock new opportunities today.
                </p>
                <Link
                    href="/partner-with-us"
                    className="inline-block bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-all duration-200"
                >
                    Partner With Us
                </Link>
            </div>


        </div>
    );
};

export default PartnerList;