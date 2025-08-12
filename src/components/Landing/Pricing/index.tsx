const PricingPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">

            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-6">
                Pricing <span className="text-green-600">Plans</span>
            </h1>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                Choose a plan that works best for you
            </p>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="bg-white rounded-lg p-8 shadow-md">
                    <h2 className="text-xl font-semibold text-blue-900 mb-2">Lite</h2>
                    <hr className="border-gray-300 mb-4" />
                    <p className="text-sm text-gray-700 mb-6">Rates start at</p>
                    <p className="text-2xl font-bold mb-4">Rs. 26/500gms</p>
                    <p className="text-gray-600 mb-6">
                        A free and simplified plan best for social, small and medium e-commerce sellers
                    </p>
                    <button className="bg-green-500 text-white px-6 py-2 rounded-md mb-6 hover:bg-green-700 transition">
                        Create an account
                    </button>
                    <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> 1 Ecommerce Channel Integration
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Chat, Call & Email Support
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Automated Channel Order Sync
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Domestic and International Shipping
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md">
                    <h2 className="text-xl font-semibold text-blue-900 mb-2">Professional</h2>
                    <hr className="border-gray-300 mb-4" />
                    <p className="text-sm text-gray-700 mb-6">Rates Start at</p>
                    <p className="text-2xl font-bold mb-4">Rs. 20/500gms</p>
                    <p className="text-gray-600 mb-6">
                        Dynamic plans for sellers who sell on multiple marketplaces and websites
                    </p>
                    <button className="bg-green-500 text-white px-6 py-2 rounded-md mb-6 hover:bg-green-700 transition">
                        Know more
                    </button>
                    <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Multiple Ecommerce Channel Integrations
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Priority Support
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Automated Channel Order Sync
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Domestic & International Shipping
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Multi Channel Price & Inventory Sync
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Free NDR Call Center Setup
                        </li>
                    </ul>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-md">
                    <h2 className="text-xl font-semibold text-blue-900 mb-2">Enterprise</h2>
                    <hr className="border-gray-300 mb-4" />
                    <p className="text-sm text-gray-700 mb-6">Customized</p>
                    <p className="text-2xl font-bold mb-4">Shipping Solution</p>
                    <p className="text-gray-600 mb-6">
                        Get an exclusive plan tailored to meet your business needs
                    </p>
                    <button className="bg-green-500 text-white px-6 py-2 rounded-md mb-6 hover:bg-green-700 transition">
                        Contact sales
                    </button>
                    <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Customized Integrations
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Dedicated Account Manager
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Automated Channel Order Sync
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Domestic & International Shipping
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Multi Channel Price & Inventory Sync
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">✓</span> Free NDR Call Center Setup
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
