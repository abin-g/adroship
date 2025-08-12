import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0b1424] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">

                <div className="col-span-2">
                    <div className="mb-4">
                        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
                            <div className="bg-white w-10 h-10 rounded-sm"></div>
                            <div className="flex flex-col leading-tight">
                                <span className="font-bold text-lg">
                                    ADROSHIP
                                </span>
                                <span className="text-sm text-gray-500">
                                    Delivery & Transportation
                                </span>
                            </div>
                        </Link>
                    </div>
                    <div className="flex space-x-4 mb-6">
                        <a href="#"><FaFacebookF className="hover:text-gray-400" /></a>
                        <a href="#"><FaTwitter className="hover:text-gray-400" /></a>
                        <a href="#"><FaInstagram className="hover:text-gray-400" /></a>
                        <a href="#"><FaYoutube className="hover:text-gray-400" /></a>
                        <a href="#"><FaLinkedinIn className="hover:text-gray-400" /></a>
                    </div>

                    <h4 className="font-semibold mb-2">Reach Us At</h4>

                    <p className="flex items-center gap-2 text-gray-400 text-sm">
                        sales@adroship.com
                    </p>
                    <p className="flex items-start gap-2 text-gray-400 text-sm mt-2">
                        Registered Office Address: Plot
                        No. B, Khasra No. 360, M.C. Road, Sultanpur, Qadiapur, Mehrauli,
                        South Delhi 110030
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Products</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#">Adroship Shipping</a></li>
                        <li><a href="#">Adroship X</a></li>
                        <li><a href="#">Adroship Fulfillment</a></li>
                        <li><a href="#">Adroship Engage 360</a></li>
                        <li><a href="#">Adroship Packaging</a></li>
                    </ul>
                </div>


                <div>
                    <h4 className="font-semibold mb-4">Features</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#">Cash on Delivery</a></li>
                        <li><a href="#">Serviceable Pin Codes</a></li>
                        <li><a href="#">All Features</a></li>
                    </ul>
                    <h4 className="font-semibold mt-6 mb-4">Partner</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Become a Partner</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Resources</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#">Shipping Rate Calculator</a></li>
                        <li><a href="#">Volumetric Weight Calculator</a></li>
                        <li><a href="#">Free eCommerce Tools</a></li>
                        <li><a href="#">Knowledge Base</a></li>
                        <li><a href="#">Coupons</a></li>
                        <li><a href="#">FAQ's</a></li>
                    </ul>
                </div>


                <div>
                    <h4 className="font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Company Updates</a></li>
                    </ul>
                    <h4 className="font-semibold mt-6 mb-4">Support</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#">Help Center</a></li>
                    </ul>
                </div>

            </div>


            <div className="border-t border-gray-800 mt-8 pt-6 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>© 2025 Adroship. All rights reserved.</p>
                    <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-300">Terms & Conditions</a>
                        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300">Compliance</a>
                        <a href="#" className="hover:text-gray-300">Refund & Cancellation Policy</a>
                    </div>
                </div>
            </div>


        </footer>
    );
}
