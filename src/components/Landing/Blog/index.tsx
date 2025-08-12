"use client";

import Link from "next/link";

const blogPosts = [
    {
        id: 1,
        title: "How to Optimize Your Logistics Workflow",
        date: "August 5, 2025",
        excerpt:
            "Learn key strategies to streamline your logistics operations and reduce costs effectively.",
        slug: "optimize-logistics-workflow",
        imageSrc: "/images/logistics-customer-service.webp",
    },
    {
        id: 2,
        title: "The Future of Sustainable Shipping",
        date: "July 28, 2025",
        excerpt:
            "Explore innovations in eco-friendly shipping and how businesses can adapt to greener practices.",
        slug: "future-of-sustainable-shipping",
        imageSrc: "/images/logistics-customer-service.webp",
    },
    {
        id: 3,
        title: "Understanding International Freight Regulations",
        date: "July 15, 2025",
        excerpt:
            "A comprehensive guide to navigating the complex world of international freight compliance.",
        slug: "international-freight-regulations",
        imageSrc: "/images/logistics-customer-service.webp",
    },
];

const BlogListing = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-6">
                Our <span className="text-green-600">Blog's & Insights</span>
            </h1>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                Stay updated with the latest trends, tips, and insights in logistics and shipping.
            </p>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map(({ id, title, date, excerpt, slug, imageSrc }) => (
                    <article
                        key={id}
                        className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col"
                    >
                        <Link href={`/blog/${slug}`} className="block rounded-t-lg overflow-hidden">
                            <img
                                src={imageSrc}
                                alt={title}
                                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </Link>

                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl font-semibold text-green-600 hover:underline mb-2">
                                <Link href={`/blog/${slug}`}>{title}</Link>
                            </h2>
                            <p className="text-sm text-gray-500 mb-4">{date}</p>
                            <p className="text-gray-700 flex-grow">{excerpt}</p>
                            <Link
                                href={`/blog/${slug}`}
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

export default BlogListing;