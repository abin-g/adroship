import { FC } from "react";
import { FaBolt, FaShieldAlt, FaGlobe, FaChartBar, FaClock, FaRoute, FaMobileAlt, FaHeadset } from "react-icons/fa";

const features = [
  {
    title: "Lightning Fast Delivery",
    description: "Fastest delivery times in the industry with our optimized route algorithms",
    icon: <FaBolt className="text-green-400 text-2xl" />,
  },
  {
    title: "100% Secure & Insured",
    description: "Complete protection for your valuable shipments with full insurance coverage",
    icon: <FaShieldAlt className="text-green-400 text-2xl" />,
  },
  {
    title: "Global Network",
    description: "Extensive network covering 500+ cities across India and international routes",
    icon: <FaGlobe className="text-green-400 text-2xl" />,
  },
  {
    title: "Real-time Analytics",
    description: "Comprehensive dashboards with detailed insights and performance metrics",
    icon: <FaChartBar className="text-green-400 text-2xl" />,
  },
  {
    title: "24/7 Operations",
    description: "Round-the-clock service with dedicated customer support and monitoring",
    icon: <FaClock className="text-green-400 text-2xl" />,
  },
  {
    title: "Smart Routing",
    description: "AI-powered route optimization for fastest and most cost-effective delivery",
    icon: <FaRoute className="text-green-400 text-2xl" />,
  },
  {
    title: "Mobile App",
    description: "Complete mobile experience with tracking, booking, and management features",
    icon: <FaMobileAlt className="text-green-400 text-2xl" />,
  },
  {
    title: "Dedicated Support",
    description: "Personal account managers and priority support for all our clients",
    icon: <FaHeadset className="text-green-400 text-2xl" />,
  },
];

const InnovationExcellence: FC = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Powered by{" "}
          <span className="text-green-400">Innovation & Excellence</span>
        </h2>
        <p className="mt-4 text-gray-400 text-base sm:text-lg">
          Experience the future of logistics with our cutting-edge technology,
          unmatched reliability, and commitment to your success.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-700 mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="mt-2 text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InnovationExcellence;
