"use client";

import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { BreadcrumbProps } from './BreadcrumbProps';


const Breadcrumb = ({ title, description, items }: BreadcrumbProps) => {
    return (
        <div className="bg-gradient-to-b from-[#0b1424] to-[#0c2430] text-white py-8 px-6 ">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-white/80 text-sm mt-1">{description}</p>
                </div>
                <nav className="flex items-center text-sm font-medium">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex items-center">
                            {item.href ? (
                                <Link href={item.href} className="hover:underline">
                                    {item.name}
                                </Link>
                            ) : (
                                <span className="text-white/70">{item.name}</span>
                            )}
                            {idx < items.length - 1 && (
                                <FiChevronRight className="mx-2 text-white/50" />
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Breadcrumb;
