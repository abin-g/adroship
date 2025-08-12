import { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";

import { SidebarProvider } from '@/context/SidebarContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

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
    <html lang="en">
      <body className={`bg-white ${poppins.className}`} suppressHydrationWarning>
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
