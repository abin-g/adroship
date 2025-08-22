import { FiPackage, FiTruck } from "react-icons/fi";

export default function LoginPage() {
    return (
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Welcome to Business Login</h1>
                <p className="text-sm text-gray-600 mt-1">
                    Sign in with your phone number to manage your orders, payouts, and updates all in one place.
                </p>
            </div>

            <h2 className="text-sm font-semibold mb-2 text-gray-700">FOR BUSINESS</h2>

            <div className="flex items-center border border-gray-300 rounded overflow-hidden mb-4 bg-white">
                <span className="px-4 text-gray-600 text-sm font-medium border-r border-gray-200 bg-gray-50">
                    +91
                </span>
                <input
                    type="tel"
                    min={0}
                    max={10}
                    placeholder="Enter phone number"
                    className="flex-1 p-3 text-gray-800 placeholder-gray-400 outline-none text-sm"
                />
            </div>

            <button
                className="w-full bg-green-500 text-white font-medium py-2 rounded mb-4 disabled:bg-green-200 transition-colors duration-200 hover:bg-green-600"
            >
                Continue
            </button>

            <div className="flex items-start gap-2 text-sm text-gray-600 mb-3">
                <input
                    type="checkbox"
                    id="whatsappConsent"
                    className="mt-1 w-4 h-4 border-gray-300 rounded text-green-500 focus:ring-green-400"
                />
                <label htmlFor="whatsappConsent" className="leading-snug cursor-pointer">
                    I agree to receive messages on WhatsApp regarding my orders and updates.
                </label>
            </div>

            <p className="text-xs text-gray-500">
                By clicking on Continue, I accept the{" "}
                <a href="#" className="text-green-600 underline">
                    Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-600 underline">
                    Privacy Policy
                </a>.
            </p>

            <div className="flex gap-4 mt-5">
                <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-2.5 rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5">
                    <FiPackage size={18} />
                    Track Orders
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-800 font-semibold py-2.5 rounded-lg shadow-sm hover:shadow-md hover:border-gray-400 transition-transform hover:-translate-y-0.5">
                    <FiTruck size={18} />
                    Calc. Shipping
                </button>
            </div>

        </div>
    );
}
