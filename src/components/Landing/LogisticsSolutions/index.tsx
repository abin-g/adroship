import { FC } from "react";
import { FaTruck, FaWarehouse, FaRoute, FaShoppingCart, FaGlobe, FaSnowflake } from "react-icons/fa";
import { LiaAngellist } from "react-icons/lia";

const services = [
    {
        title: "Express Delivery",
        description:
            "Fast and reliable same-day and next-day delivery services with real-time tracking across major cities.",
        icon: <FaTruck className="text-green-500 text-2xl" />,
        features: ["Same-day delivery", "Real-time tracking", "Secure packaging"],
    },
    {
        title: "Bulk Transportation",
        description:
            "Heavy-duty transportation for large shipments with specialized handling and route optimization.",
        icon: <FaRoute className="text-blue-500 text-2xl" />,
        features: ["Large capacity vehicles", "Route optimization", "Specialized handling"],
    },
    {
        title: "Warehousing",
        description:
            "Secure storage solutions with inventory management and distribution services.",
        icon: <FaWarehouse className="text-purple-500 text-2xl" />,
        features: ["Climate controlled", "Inventory management", "24/7 security"],
    },
    {
        title: "E-commerce Fulfillment",
        description:
            "Comprehensive fulfillment solutions to streamline your online business operations.",
        icon: <FaShoppingCart className="text-orange-500 text-2xl" />,
        features: ["Order processing", "Packaging", "Shipping"],
    },
    {
        title: "International Shipping",
        description:
            "Global logistics solutions ensuring smooth cross-border deliveries.",
        icon: <FaGlobe className="text-red-500 text-2xl" />,
        features: ["Customs clearance", "Worldwide coverage", "Trackable shipments"],
    },
    {
        title: "Cold Chain Logistics",
        description:
            "Temperature-controlled transport for perishable and sensitive goods.",
        icon: <FaSnowflake className="text-cyan-500 text-2xl" />,
        features: ["Refrigerated trucks", "Real-time temperature monitoring", "Secure handling"],
    },
];

const LogisticsSolutions: FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                    Comprehensive <span className="text-green-600">Logistics Solutions</span>
                </h2>
                <p className="mt-4 text-gray-500 text-base sm:text-lg">
                    From express delivery to bulk transportation, we provide end-to-end logistics services
                    tailored to your business needs with cutting-edge technology and unmatched reliability.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-green-50 mb-4 shadow-sm">
                            {service.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                        <p className="mt-2 text-gray-500 text-sm leading-relaxed">{service.description}</p>

                        <ul className="mt-4 space-y-2">
                            {service.features.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-start group"
                                >
                                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 mr-3 group-hover:bg-green-200 transition-colors">
                                        <LiaAngellist className="w-4 h-4" />
                                    </span>
                                    <span className="text-sm text-gray-700 leading-snug">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                    </div>
                ))}
            </div>

        </section>
    );
};

export default LogisticsSolutions;
