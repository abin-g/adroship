import React from "react";

const reviews = [
    {
        id: 1,
        name: "Rajesh Kumar",
        role: "CEO, TechCorp",
        image: "/images/rajesh.jpg",
        review:
            "Adroship has transformed our delivery process. Their platform is intuitive and the tracking system gives us complete visibility over our shipments.",
        rating: 5,
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "Operations Manager",
        image: "/images/priya.jpg",
        review:
            "Excellent service quality and competitive pricing. Their customer support team is always helpful and responsive to our needs.",
        rating: 5,
    },
    {
        id: 3,
        name: "Amit Patel",
        role: "E-commerce Owner",
        image: "/images/amit.jpg",
        review:
            "We've been using Adroship for our e-commerce deliveries and couldn't be happier. Reliable, fast, and cost-effective solution.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 text-center">

                <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
                <p className="mt-2 text-gray-600">Trusted by businesses across industries</p>

                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex text-yellow-500 mb-4">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                    <span key={i} className="text-xl">★</span>
                                ))}
                            </div>
                            <p className="text-gray-700 text-sm mb-6">"{review.review}"</p>

                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 font-bold">
                                    AS
                                </div>

                                <div className="text-left">
                                    <p className="font-semibold text-gray-900">{review.name}</p>
                                    <p className="text-gray-500 text-xs">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
