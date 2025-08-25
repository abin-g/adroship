"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/context/SidebarContext";

import { MdOutlineDashboard, MdOutlinePayment } from "react-icons/md";
import { FaClipboardList, FaChartBar } from "react-icons/fa";
import { RiCustomerService2Line, RiSettings5Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { FaChevronDown, FaAngleUp } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
import { LuWarehouse, LuUsers } from "react-icons/lu";
import { SlCalculator } from "react-icons/sl";


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
        path: "/app"
    },
    {
        icon: <LuUsers size={20} />,
        name: "Users",
        subItems: [
            { name: "All Users", path: "/app/users" },
            { name: "Add New", path: "/app/users/add" },
            { name: "Customers", path: "/app/customers" },
        ]
    },
    {
        icon: <FaClipboardList size={20} />,
        name: "Orders",
        subItems: [
            { name: "All Orders", path: "/app/orders" },
            { name: "Create Order", path: "/app/orders/new" }
        ]
    },
    {
        icon: <TbTruckDelivery size={20} />,
        name: "NDR",
        subItems: [
            { name: "NDR List", path: "/app/ndr" },
            { name: "Manage NDR", path: "/app/ndr/manage" }
        ]
    },
    {
        icon: <MdOutlinePayment size={20} />,
        name: "Billing",
        subItems: [
            { name: "All Transactions", path: "/app/billing" },
            { name: "Invoices", path: "/app/billing/invoices" }
        ]
    },
    {
        icon: <SlCalculator size={20} />,
        name: "Tools",
        subItems: [
            { name: "Rate Calculator", path: "/app/tools/rate-calculator" },
            { name: "Other Tools", path: "/app/tools/other" }
        ]
    },
   
    {
        icon: <LuWarehouse size={20} />,
        name: "Warehouse",
        subItems: [
            { name: "Inventory", path: "/app/warehouse/inventory" },
            { name: "Stock Management", path: "/app/warehouse/stock" }
        ]
    },
    {
        icon: <RiCustomerService2Line size={20} />,
        name: "Integrations",
        subItems: [
            { name: "API Keys", path: "/app/integrations/api" },
            { name: "Third-party Apps", path: "/app/integrations/apps" }
        ]
    },
    {
        icon: <FaChartBar size={20} />,
        name: "Reports",
        subItems: [
            { name: "Sales Reports", path: "/app/reports/sales" },
            { name: "Customer Insights", path: "/app/reports/customers" },
            { name: "Logistics Performance", path: "/app/reports/logistics" }
        ]
    },
    {
        icon: <RiSettings5Line size={20} />,
        name: "Settings",
        subItems: [
            { name: "User Settings", path: "/app/settings/users" },
            { name: "App Settings", path: "/app/settings/app" }
        ]
    }
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
