export default function AuthenticationPage() {
    return (
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
            <h2 className="text-sm font-semibold mb-2">FOR BUSINESS</h2>

            <div className="flex items-center border border-gray-300 rounded overflow-hidden mb-4 bg-white focus-within:border-green-400 transition-all duration-200">
                <span className="px-4 text-gray-600 text-sm font-medium border-r border-gray-200 bg-gray-50">
                    +91
                </span>
                <input
                    type="tel"
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

            <p className="text-xs text-gray-500 text-center">
                By clicking on Continue, I accept the{" "}
                <a href="#" className="text-green-600 underline">
                    Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-green-600 underline">
                    Privacy Policy
                </a>.
            </p>



            <h2 className="text-sm font-semibold mb-2 mt-2">FOR ORDER TRACKING</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm mb-3 font-medium">
                    Know when your order will arrive
                </p>
                <div className="flex gap-3 mb-3">
                    <label className="flex items-center gap-1">
                        <input type="radio" name="tracking" defaultChecked />
                        Mobile Number
                    </label>
                    <label className="flex items-center gap-1">
                        <input type="radio" name="tracking" /> Order Id
                    </label>
                    <label className="flex items-center gap-1">
                        <input type="radio" name="tracking" /> AWB
                    </label>
                </div>
                <input
                    type="text"
                    placeholder="Enter details to track your order"
                    className="w-full outline-none rounded mb-3 border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:none"
                />

                <button className="w-full bg-green-500 text-white py-2 rounded">
                    Track Now
                </button>
            </div>
        </div>
    );
}
