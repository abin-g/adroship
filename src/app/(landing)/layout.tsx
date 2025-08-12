import { Metadata } from "next";

import Header from "@/components/Landing/Header";
import Footer from "@/components/Landing/Footer";

export const metadata: Metadata = {
    title: "Adroship - AI-Powered Shipping Solutions",
    description: "Adroship is an AI-powered platform that simplifies shipping logistics for e-commerce businesses. Our solutions help you streamline your shipping processes, reduce costs, and enhance customer satisfaction.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
