import {
    FiArrowDownCircle,
    FiArrowUpCircle,
    FiShoppingCart,
    FiRotateCcw,
} from "react-icons/fi";
import {
    ComposedChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
    CartesianGrid,
} from "recharts";

const Transactions = () => {
    const transactions = [
        { id: 1, title: "Order #1234", amount: "-₹250", type: "order" },
        { id: 2, title: "Refund #4321", amount: "+₹120", type: "refund" },
        { id: 3, title: "Order #5678", amount: "-₹450", type: "order" },
        { id: 4, title: "Refund #8765", amount: "+₹300", type: "refund" },
        { id: 5, title: "Order #9012", amount: "-₹199", type: "order" },
        { id: 6, title: "Payout", amount: "-₹320", type: "payout" },
        { id: 7, title: "Cashback", amount: "+₹150", type: "cashback" },
    ];

    // Shipment chart data (for mix chart)
    const shipmentData = [
        { name: "Mon", Delivered: 120, RTO: 30, NDR: 15 },
        { name: "Tue", Delivered: 200, RTO: 40, NDR: 20 },
        { name: "Wed", Delivered: 150, RTO: 20, NDR: 10 },
        { name: "Thu", Delivered: 170, RTO: 50, NDR: 30 },
        { name: "Fri", Delivered: 220, RTO: 60, NDR: 25 },
        { name: "Sat", Delivered: 180, RTO: 35, NDR: 20 },
        { name: "Sun", Delivered: 140, RTO: 25, NDR: 15 },
    ];

    const COLORS = {
        Delivered: "#22c55e",
        RTO: "#ef4444",
        NDR: "#f59e0b",
    };

    const iconMap = {
        order: {
            icon: <FiShoppingCart className="text-blue-500" size={18} />,
            bg: "bg-blue-50",
        },
        refund: {
            icon: <FiRotateCcw className="text-green-500" size={18} />,
            bg: "bg-green-50",
        },
        payout: {
            icon: <FiArrowDownCircle className="text-red-500" size={18} />,
            bg: "bg-red-50",
        },
        cashback: {
            icon: <FiArrowUpCircle className="text-purple-500" size={18} />,
            bg: "bg-purple-50",
        },
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Wallet Transactions */}
            <div className="bg-white rounded-sm shadow-md border border-gray-100 p-5">
                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-lg font-semibold text-gray-800">
                        Wallet Transactions
                    </h2>
                    <button className="cursor-pointer text-sm text-blue-600 font-medium hover:underline">
                        View All
                    </button>
                </div>
                <hr className="border-gray-300 mb-4" />
                <div className="h-64 overflow-y-auto pr-2 custom-scrollbar">
                    <ul className="space-y-3">
                        {transactions.map((txn) => {
                            const { icon, bg } =
                                iconMap[txn.type as keyof typeof iconMap] ||
                                iconMap.order;
                            return (
                                <li
                                    key={txn.id}
                                    className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 p-3 rounded-xl transition"
                                >
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${bg}`}
                                        >
                                            {icon}
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">
                                            {txn.title}
                                        </span>
                                    </div>
                                    <span
                                        className={`text-sm font-semibold ${
                                            txn.amount.startsWith("-")
                                                ? "text-red-500"
                                                : "text-green-600"
                                        }`}
                                    >
                                        {txn.amount}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* Shipment Mix Chart */}
            <div className="bg-white rounded-sm shadow-md border border-gray-100 p-5 flex flex-col">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                    Shipment
                </h2>
                <hr className="border-gray-300 mb-4" />
                <div className="flex-1 w-full h-64">
                    <ResponsiveContainer>
                        <ComposedChart data={shipmentData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {/* Bars */}
                            <Bar
                                dataKey="Delivered"
                                fill={COLORS.Delivered}
                                barSize={20}
                                radius={[5, 5, 0, 0]}
                            />
                            <Bar
                                dataKey="RTO"
                                fill={COLORS.RTO}
                                barSize={20}
                                radius={[5, 5, 0, 0]}
                            />
                            <Bar
                                dataKey="NDR"
                                fill={COLORS.NDR}
                                barSize={20}
                                radius={[5, 5, 0, 0]}
                            />
                            
                            <Line
                                type="monotone"
                                dataKey={(d: { Delivered: any; RTO: any; NDR: any; }) =>
                                    d.Delivered + d.RTO + d.NDR
                                }
                                stroke="#3b82f6"
                                strokeWidth={2}
                                dot={false}
                                name="Total"
                            />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Transactions;
