"use client";

import { useSidebar } from "@/context/SidebarContext";
import React, { useState, useEffect, useRef } from "react";
import { CiSearch, CiMenuBurger, CiMenuFries, CiWallet } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";

const AppHeader: React.FC = () => {
    const [isApplicationMenuOpen, setApplicationMenuOpen] = useState(false);
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);

    const { isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar();
    const inputRef = useRef<HTMLInputElement>(null);
    const userMenuRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        if (window.innerWidth >= 1024) {
            toggleSidebar();
        } else {
            toggleMobileSidebar();
        }
    };

    const toggleApplicationMenu = () => {
        setApplicationMenuOpen(!isApplicationMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                userMenuRef.current &&
                !userMenuRef.current.contains(event.target as Node)
            ) {
                setUserMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if ((event.metaKey || event.ctrlKey) && event.key === "k") {
                event.preventDefault();
                inputRef.current?.focus();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <header className="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
            <div className="flex flex-col items-center justify-between grow lg:flex-row lg:px-6">
                <div className="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4">
                    <button
                        className="cursor-pointer items-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-gray-800 lg:flex dark:text-gray-400 lg:h-11 lg:w-11 lg:border"
                        onClick={handleToggle}
                        aria-label="Toggle Sidebar"
                    >
                        {isMobileOpen ? <CiMenuFries size={20} /> : <CiMenuBurger size={20} />}
                    </button>

                    <div className="lg:hidden">A</div>

                    <button
                        onClick={toggleApplicationMenu}
                        className="flex cursor-pointer items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                    <div className="hidden lg:block">
                        <form>
                            <div className="relative">
                                <span className="absolute -translate-y-1/2 left-4 top-1/2 pointer-events-none">
                                    <CiSearch size={20} />
                                </span>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="Search or type command..."
                                    className="h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 outline:none focus:none xl:w-[430px]"
                                />
                                <button className="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 px-[7px] py-[4.5px] text-xs -tracking-[0.2px] text-gray-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400">
                                    <span> ⌘ </span>
                                    <span> K </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div
                    className={`${isApplicationMenuOpen ? "flex" : "hidden"
                        } items-center justify-between w-full gap-4 px-5 py-4 lg:flex shadow-theme-md lg:justify-end lg:px-0 lg:shadow-none`}
                >
                    <div className="flex items-center w-40 h-12 bg-white px-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
                            <CiWallet size={20} className="text-gray-600" />
                        </div>
                        <div className="ml-3">
                            <span className="block text-xs text-gray-500">Balance</span>
                            <span className="block text-sm font-semibold text-gray-900">
                                ₹1,250.00
                            </span>
                        </div>
                    </div>

                    <div className="relative" ref={userMenuRef}>
                        <button
                            onClick={() => setUserMenuOpen(!isUserMenuOpen)}
                            className="flex items-center gap-2 cursor-pointer"
                            aria-label="User menu"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 font-semibold text-sm">
                                AB
                            </div>
                            <div className="hidden lg:flex flex-col items-start">
                                <span className="text-sm font-medium text-gray-900">Abin T</span>
                                <span className="text-xs text-gray-500">Trainer</span>
                            </div>
                            <FaAngleDown
                                className={`transition-transform ${isUserMenuOpen ? "rotate-180" : ""}`}
                            />
                        </button>

                        {isUserMenuOpen && (
                            <div className="absolute right-0 mt-4 w-48 bg-white rounded-lg shadow-lg border border-gray-100 z-50">
                                <ul className="py-1 text-sm text-gray-700">
                                    <li>
                                        <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
                                            My Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">
                                            Settings
                                        </a>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => alert("Logging out...")}
                                            className="w-full text-left block px-4 py-2 hover:bg-gray-100"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppHeader;