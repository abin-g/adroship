import { FC } from "react";
import Image from "next/image";

const TrustedCompanies: FC = () => {
    const companies = [
        { name: "Company A", logo: "/brands/dechatholon.png" },
        { name: "Company B", logo: "/brands/mamaearcth.png" },
        { name: "Company C", logo: "/brands/samsung.svg" },
        { name: "Company D", logo: "/brands/crocs.webp" },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Trusted by Industry Leaders
                </h2>
                <p className="mt-2 text-gray-500 text-sm sm:text-base">
                    Proud partners of the world’s most respected brands
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {companies.map((company) => (
                    <div
                        key={company.name}
                        className="flex items-center justify-center bg-gray-50 rounded-lg h-20 shadow-sm hover:shadow-md transition-shadow p-4"
                    >
                        <Image
                            src={company.logo}
                            alt={company.name}
                            width={120}
                            height={60}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrustedCompanies;