"use client";

import Link from "next/link";

const caseStudies = [
    {
        id: 1,
        title: "Optimizing Supply Chain: A Case Study",
        date: "August 5, 2025",
        excerpt:
            "Discover how we helped a major retailer streamline their supply chain to cut costs and improve delivery times.",
        slug: "optimizing-supply-chain-case-study",
        imageSrc: "/images/logistics-customer-service.webp",
    },
    {
        id: 2,
        title: "Sustainable Logistics in Action",
        date: "July 28, 2025",
        excerpt:
            "A detailed look at implementing eco-friendly logistics solutions for a global shipping company.",
        slug: "sustainable-logistics-case-study",
        imageSrc: "/images/logistics-customer-service.webp",
    },
    {
        id: 3,
        title: "International Freight Compliance Success",
        date: "July 15, 2025",
        excerpt:
            "How we ensured regulatory compliance and improved operational efficiency for an international freight provider.",
        slug: "international-freight-compliance-case-study",
        imageSrc: "/images/logistics-customer-service.webp",
    },
];

const CaseStudyListing = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-6">
                Case <span className="text-green-600">Studies & Insights</span>
            </h1>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                Explore how our solutions have transformed logistics and shipping operations across industries.
            </p>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {caseStudies.map(({ id, title, date, excerpt, slug, imageSrc }) => (
                    <article
                        key={id}
                        className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col"
                    >
                        <Link href={`/case-studies/${slug}`} className="block rounded-t-lg overflow-hidden">
                            <img
                                src={imageSrc}
                                alt={title}
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </Link>

                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl font-semibold text-green-600 hover:underline mb-2">
                                <Link href={`/case-studies/${slug}`}>{title}</Link>
                            </h2>
                            <p className="text-sm text-gray-500 mb-4">{date}</p>
                            <p className="text-gray-700 flex-grow">{excerpt}</p>
                            <Link
                                href={`/case-studies/${slug}`}
                                className="mt-6 inline-block text-green-600 font-medium hover:underline"
                            >
                                Read More &rarr;
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default CaseStudyListing;
