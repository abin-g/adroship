"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiTruck,
    FiPackage,
    FiChevronDown,
    FiMenu,
    FiX,
} from "react-icons/fi";

const navItems = [
    {
        name: "Services",
        href: "/logistics-request",
        childMenu: [
            { name: "Domestic Shipping", href: "/services/domestic-shipping" },
            { name: "Express Shipping", href: "/services/express-shipping" },
            { name: "Cargo Shipping", href: "/services/cargo-shipping" }
        ],
    },
    { name: "Partners", href: "/partners" },
    {
        name: "Resources",
        href: "/about",
        childMenu: [
            { name: "Blog", href: "/blog" },
            { name: "Case Studies", href: "/case-studies" }
        ],
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Adroship Express", href: "/express", tag: "Quick Service" },
];

const Header: FC = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="shadow-sm border-b border-gray-200">

            <div className="bg-green-500 text-white text-sm flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-2">
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
                    <span className="flex items-center gap-1">
                        <FiPhone /> +91 98765 43210
                    </span>
                    <span className="flex items-center gap-1">
                        <FiMail /> info@adroship.com
                    </span>
                    <span className="flex items-center gap-1">
                        <FiMapPin /> 24/7 Customer Support
                    </span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-end gap-6 mt-2 md:mt-0">
                    <Link
                        href="/quote"
                        className="flex items-center gap-1 cursor-pointer hover:underline"
                    >
                        <FiTruck /> Free Quote Available
                    </Link>
                    <Link
                        href="/track"
                        className="flex items-center gap-1 cursor-pointer hover:underline"
                    >
                        <FiPackage /> Track Your Shipment
                    </Link>
                </div>
            </div>

            <div className="flex justify-between items-center px-4 md:px-6 py-4 relative">
                <Link href="/" className="flex items-center gap-2 cursor-pointer group">
                    <div className="bg-green-500 w-10 h-10 rounded-sm"></div>
                    <div className="flex flex-col leading-tight">
                        <span className="font-bold text-lg">ADROSHIP</span>
                        <span className="text-sm text-gray-500">
                            Delivery & Transportation
                        </span>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-8 ml-auto">
                    <nav className="flex gap-8 text-gray-700 font-medium relative">
                        {navItems.map((item) => (
                            <div
                                key={item.name}
                                className="relative group"
                                onMouseEnter={() => setOpenMenu(item.name)}
                                onMouseLeave={() => setOpenMenu(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={`relative cursor-pointer transition-colors duration-200 flex items-center gap-2 group
        ${pathname.startsWith(item.href) ? "text-green-600 after:w-full" : "text-gray-700 hover:text-green-500 after:w-0"}
        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-green-500 after:transition-all after:duration-300
    `}
                                >
                                    {item.name}
                                    {item.childMenu && (
                                        <FiChevronDown className="transition-transform duration-200 group-hover:rotate-180" />
                                    )}
                                    {item.tag && (
                                        <span className="absolute -top-5 -right-5 text-[10px] bg-green-100 text-green-600 px-1.5 py-0.5 rounded-full">
                                            {item.tag}
                                        </span>
                                    )}
                                </Link>


                                {item.childMenu && openMenu === item.name && (
                                    <div
                                        className="absolute left-0 mt-1 w-56 bg-white rounded shadow-lg z-50"
                                        onMouseEnter={() => setOpenMenu(item.name)}
                                        onMouseLeave={() => setOpenMenu(null)}
                                    >
                                        {item.childMenu.map((child: any) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="px-4 py-2 hover:bg-green-50 flex items-center justify-between"
                                            >
                                                <span>{child.name}</span>
                                                {child?.tag && (
                                                    <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded-full">
                                                        {child?.tag}
                                                    </span>
                                                )}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="flex gap-4">
                        <Link
                            href="/track"
                            className="border border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-50 hover:shadow-md transition-all duration-200 cursor-pointer"
                        >
                            Track Package
                        </Link>
                        <Link
                            href="/auth"
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 hover:shadow-md transition-all duration-200 cursor-pointer"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {mobileOpen && (
                <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
                    <nav className="flex flex-col px-4 py-4 space-y-3">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`flex justify-between items-center py-2 font-medium
        ${pathname.startsWith(item.href) ? "text-green-600" : "text-gray-700"}
        hover:text-green-500
    `}
                                    onClick={() =>
                                        item.childMenu
                                            ? setOpenMenu(openMenu === item.name ? null : item.name)
                                            : setMobileOpen(false)
                                    }
                                >
                                    {item.name}
                                    {item.childMenu && (
                                        <FiChevronDown
                                            className={`transition-transform ${openMenu === item.name ? "rotate-180" : ""}`}
                                        />
                                    )}
                                </Link>

                                {item.childMenu && openMenu === item.name && (
                                    <div className="ml-4 border-l pl-4 space-y-2">
                                        {item.childMenu.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className={`block px-2 py-1 rounded
                                                ${pathname === child.href ? "bg-green-100 text-green-700" : "text-gray-600"}
                                                hover:text-green-500
                                            `}
                                                onClick={() => setMobileOpen(false)}
                                            >
                                                {child.name}
                                            </Link>

                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                            <Link
                                href="/track"
                                className="border border-green-500 text-green-500 px-4 py-2 rounded text-center hover:bg-green-50"
                                onClick={() => setMobileOpen(false)}
                            >
                                Track Package
                            </Link>
                            <Link
                                href="/auth"
                                className="bg-green-500 text-white px-4 py-2 rounded text-center hover:bg-green-600"
                                onClick={() => setMobileOpen(false)}
                            >
                                Get Started
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;