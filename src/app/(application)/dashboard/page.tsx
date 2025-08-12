import { FiPackage, FiTrendingUp, FiBarChart2, FiCpu, FiShoppingBag, FiDroplet, FiTruck, FiSettings } from "react-icons/fi";
import { MdOutlineZoomOutMap } from "react-icons/md";

const activities = [
    {
        icon: <FiTruck className="text-green-500" />,
        text: "Shipment #123 delivered to Los Angeles",
        time: "2h ago",
    },
    {
        icon: <FiPackage className="text-blue-500" />,
        text: "New order placed by Darrell Steward",
        time: "4h ago",
    },
    {
        icon: <FiSettings className="text-yellow-500" />,
        text: "Capacity increased to 40 kg",
        time: "Yesterday",
    },
];

const AdroShipDashboardPage = () => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
                    <div className="p-3 bg-blue-50 rounded-full">
                        <FiPackage size={20} className="text-blue-500" />
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-gray-500 mb-1">This Month Orders</h2>
                        <p className="text-2xl font-bold text-gray-800">155</p>
                        <span className="text-green-500 text-sm">+9% from last month</span>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
                    <div className="p-3 bg-green-50 rounded-full">
                        <FiTrendingUp size={20} className="text-green-500" />
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-gray-500 mb-1">Shipment Success</h2>
                        <p className="text-2xl font-bold text-gray-800">65%</p>
                        <span className="text-green-500 text-sm">+8% improvement</span>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4">
                    <div className="p-3 bg-purple-50 rounded-full">
                        <FiBarChart2 size={20} className="text-purple-500" />
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-gray-500 mb-1">Capacity</h2>
                        <p className="text-2xl font-bold text-gray-800">30 kg / 40 kg</p>
                    </div>
                </div>


                <div className="bg-white rounded-xl shadow p-4 col-span-1 lg:col-span-2">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-sm font-semibold text-black">Live Tracking</h2>
                        <button
                            className="p-1 rounded-full hover:bg-gray-100 transition cursor-pointer"
                            aria-label="Zoom In"
                        >
                            <MdOutlineZoomOutMap size={18} className="text-gray-600" />
                        </button>
                    </div>

                    <hr className="border-t border-gray-200 my-4" />

                    <div className="bg-gray-100 h-48 rounded flex items-center justify-center text-gray-400">
                        [Map Placeholder]
                    </div>
                </div>


                <div className="bg-white rounded-xl shadow p-4">
                    <h2 className="text-sm font-semibold text-black mb-4">Package Details</h2>
                    <hr className="border-t border-gray-200 my-4" />
                    <div className="space-y-4">

                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-2">
                                    <FiCpu className="text-blue-500" />
                                    <span className="text-sm font-medium text-gray-700">Electronics</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-800">67%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "67%" }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-2">
                                    <FiShoppingBag className="text-pink-500" />
                                    <span className="text-sm font-medium text-gray-700">Fashion</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-800">43%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-pink-500 h-2 rounded-full" style={{ width: "43%" }}></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-2">
                                    <FiDroplet className="text-green-500" />
                                    <span className="text-sm font-medium text-gray-700">Detergent</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-800">24%</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: "24%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-white rounded-xl shadow p-4 col-span-1 lg:col-span-3">
                    <h2 className="text-sm font-semibold text-black mb-4">Recent Activity</h2>
                    <hr className="border-t border-gray-200 my-4" />

                    <ul className="space-y-3">
                        {activities.map((activity, idx) => (
                            <li
                                key={idx}
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                                    {activity.icon}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-800">{activity.text}</span>
                                    <span className="text-xs text-gray-400">{activity.time}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default AdroShipDashboardPage;
