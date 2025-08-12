"use client";

import Link from "next/link";

const blogPost = {
    title: "How to Optimize Your Logistics Workflow",
    date: "August 5, 2025",
    author: "John Doe",
    imageSrc: "/images/logistics-customer-service.webp",
    content: [
        "Optimizing your logistics workflow is key to reducing costs and improving efficiency. This blog post outlines essential strategies to streamline your operations.",
        "First, analyze your current shipping routes and identify bottlenecks. Use data analytics to make informed decisions.",
        "Second, invest in automation technologies to reduce manual errors and improve tracking.",
        "Finally, maintain strong communication channels with your logistics partners to quickly address issues.",
    ],
};

const relevantBlogs = [
    {
        id: 1,
        title: "The Future of Sustainable Shipping",
        slug: "future-of-sustainable-shipping",
        excerpt:
            "Explore innovations in eco-friendly shipping and how businesses can adapt to greener practices.",
        author: "Jane Smith",
        imageSrc: "/images/logistics-customer-service.webp",
    },
    {
        id: 2,
        title: "Understanding International Freight Regulations",
        slug: "international-freight-regulations",
        excerpt:
            "A comprehensive guide to navigating the complex world of international freight compliance.",
        author: "Alex Johnson",
        imageSrc: "/images/logistics-customer-service.webp",
    },
    {
        id: 3,
        title: "Top 10 Logistics Technologies to Watch",
        slug: "top-logistics-technologies",
        excerpt:
            "Stay ahead with the latest tech transforming the logistics industry worldwide.",
        author: "Emily Davis",
        imageSrc: "/images/logistics-customer-service.webp",
    },
];

const BlogDetail = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <main className="md:col-span-2">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{blogPost.title}</h1>
                    <p className="text-sm text-gray-500 mb-6">
                        By <span className="font-semibold">{blogPost.author}</span> | {blogPost.date}
                    </p>

                    <img
                        src={blogPost.imageSrc}
                        alt={blogPost.title}
                        className="w-full h-64 object-cover rounded-lg mb-8"
                    />

                    <article className="prose prose-green max-w-none">
                        {blogPost.content.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </article>

                    <Link
                        href="/blog"
                        className="inline-block mt-10 text-green-600 font-semibold hover:underline"
                    >
                        &larr; Back to Blog Listing
                    </Link>
                </main>

                <aside className="md:col-span-1 border-l border-gray-200 pl-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-6">Relevant Blogs</h2>
                    <div className="space-y-6">
                        {relevantBlogs.map(({ id, title, slug, excerpt, author, imageSrc }) => (
                            <Link
                                key={id}
                                href={`/blog/${slug}`}
                                className="flex gap-4 items-start hover:bg-green-50 rounded p-2 transition"
                            >
                                <img
                                    src={imageSrc}
                                    alt={title}
                                    className="w-20 h-16 object-cover rounded"
                                    loading="lazy"
                                />
                                <div className="flex flex-col">
                                    <h3 className="text-black font-semibold hover:underline">{title}</h3>
                                    <span className="text-xs text-gray-400 mt-auto">By {author}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default BlogDetail;