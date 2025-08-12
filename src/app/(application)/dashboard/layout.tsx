"use client"

import { useSidebar } from "@/context/SidebarContext";
import AppSidebar from "@/components/Application/Sidebar";
import AppHeader from "@/components/Application/Topbar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { isExpanded, isHovered, isMobileOpen } = useSidebar();
    const mainContentMargin = isMobileOpen ? "ml-0" : isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]";

    return (
        <div className="min-h-screen xl:flex">
            <AppSidebar />
            <div className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}>
                <AppHeader />
                <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
            </div>
        </div>
    );
}
