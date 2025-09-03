"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";

import { MdOutlineDashboard, MdSettings, MdBuild } from "react-icons/md";
import { FaChevronDown, FaAngleUp } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import { LuUsers } from "react-icons/lu";


type NavItem = {
    name: string;
    role?: string[];
    icon: React.ReactNode;
    path?: string;
    subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
    {
        icon: <MdOutlineDashboard size={20} />,
        name: "Dashboard",
        path: "/app",
    },
    {
        icon: <LuUsers size={20} />,
        name: "Customers",
        subItems: [
            { name: "All Customers", path: "/app/customers" },
            { name: "Add Customers", path: "/app/customers/add" },
        ],
    },
    {
        icon: <MdSettings size={20} />,
        name: "Settings",
        subItems: [
            { name: "Pincode Mapping", path: "/app/settings/pincode-mapping" },
            { name: "Zone Mapping", path: "/app/settings/zone-mapping" },
            { name: "Courier Configuration", path: "/app/settings/courier-config" },
        ],
    },
    {
        icon: <MdBuild size={20} />,
        name: "Tools",
        subItems: [
            { name: "Rate Calculator", path: "/app/tools/rate-calculator" },
        ],
    },
];


const AppSidebar: React.FC = () => {
    const { isExpanded, isMobileOpen } = useSidebar();
    const pathname = usePathname();
    const isActive = (path: string) => path === pathname;
    const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);

    useEffect(() => {
        navItems.forEach((nav, index) => {
            if (nav.subItems?.some((subItem) => isActive(subItem.path))) {
                setOpenSubmenuIndex(index);
            }
        });
    }, [pathname]);

    return (
        <aside
            className={`fixed top-0 left-0 h-screen z-50 flex flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out
      ${isExpanded ? "w-[290px]" : "w-[80px]"}
      ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        >
            <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="bg-green-500 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold">
                    AD
                </div>
                {(isExpanded || isMobileOpen) && (
                    <div>
                        <span className="block font-bold text-lg">ADROSHIP</span>
                        <span className="block text-sm text-gray-500">Delivery & Transport</span>
                    </div>
                )}
            </div>

            <nav className="flex-1 overflow-y-auto no-scrollbar px-3 py-4 space-y-3">
                {navItems.map((nav: any, index: any) => {
                    const hasSubItems = !!nav.subItems?.length;
                    const isOpen = openSubmenuIndex === index;

                    return (
                        <div key={nav.name}>
                            {hasSubItems ? (
                                <>
                                    <button
                                        onClick={() => setOpenSubmenuIndex(isOpen ? null : index)}
                                        className={`flex items-center w-full px-3 py-2 rounded transition-all cursor-pointer duration-200
        ${isOpen ? "bg-green-50 text-green-600" : "text-gray-600 hover:bg-gray-100"}
        ${!isExpanded && !isMobileOpen ? "justify-center" : "justify-between gap-3"}`}
                                        data-tooltip-id={!isExpanded ? "sidebar-tooltip" : undefined}
                                        data-tooltip-content={!isExpanded ? nav.name : undefined}
                                    >
                                        <div className={`flex items-center ${!isExpanded && !isMobileOpen ? "justify-center" : "gap-3"}`}>
                                            <span className="flex-shrink-0">{nav.icon}</span>
                                            {(isExpanded || isMobileOpen) && <span className="font-medium">{nav.name}</span>}
                                        </div>
                                        {(isExpanded || isMobileOpen) && (
                                            <span className="ml-auto">{isOpen ? <FaAngleUp /> : <FaChevronDown />}</span>
                                        )}
                                    </button>

                                    {(isExpanded || isMobileOpen) && isOpen && (
                                        <div className="ml-8 mt-1 space-y-1">
                                            {nav?.subItems.map((sub: any) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.path}
                                                    className={`block px-3 py-2 rounded text-sm transition ${isActive(sub.path)
                                                        ? "bg-gradient-to-r from-green-500 to-green-400 text-white shadow-sm"
                                                        : "text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                nav.path && (
                                    <Link
                                        href={nav.path}
                                        className={`flex items-center gap-3 px-3 py-2 rounded transition-all duration-200 cursor-pointer ${isActive(nav.path)
                                            ? "bg-gradient-to-r from-green-500 to-green-400 text-white shadow-sm"
                                            : "text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
                                            }`}
                                        data-tooltip-id={!isExpanded ? "sidebar-tooltip" : undefined}
                                        data-tooltip-content={!isExpanded ? nav.name : undefined}
                                    >
                                        <span className="flex-shrink-0">{nav.icon}</span>
                                        {(isExpanded || isMobileOpen) && <span className="font-medium">{nav.name}</span>}
                                    </Link>
                                )
                            )}
                        </div>
                    );
                })}
            </nav>

            {!isExpanded && <Tooltip id="sidebar-tooltip" place="right" className="z-50" />}
        </aside>
    );
};

export default AppSidebar;
