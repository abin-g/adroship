import { FiPackage, FiTrendingUp, FiBarChart2, FiCpu, FiShoppingBag, FiDroplet, FiTruck } from "react-icons/fi";

const Analytics = () => {
    const metrics = [
        { title: "New Orders", value: "155", icon: <FiPackage size={20} className="text-blue-500" />, iconBg: "bg-blue-50" },
        { title: "Courier Assigned", value: "120", icon: <FiTruck size={20} className="text-green-500" />, iconBg: "bg-green-50" },
        { title: "Scheduled", value: "95", icon: <FiBarChart2 size={20} className="text-purple-500" />, iconBg: "bg-purple-50" },
        { title: "All Orders", value: "620", icon: <FiShoppingBag size={20} className="text-pink-500" />, iconBg: "bg-pink-50" }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((item, index) => (
                <div key={index} className="bg-white rounded-md shadow p-4 flex items-center gap-4">
                    <div className={`p-3 rounded ${item.iconBg}`}>{item.icon}</div>
                    <div>
                        <h2 className="text-sm font-semibold text-gray-500 mb-1">{item.title}</h2>
                        <p className="text-2xl font-bold text-gray-800">{item.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Analytics;