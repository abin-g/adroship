import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Authentication Adroship - AI-Powered Shipping Solutions",
    description: "Adroship is an AI-powered platform that simplifies shipping logistics for e-commerce businesses. Our solutions help you streamline your shipping processes, reduce costs, and enhance customer satisfaction.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen w-full bg-gradient-to-br from-green-50 to-white px-8">
            <div className="container mx-auto flex px-8">

                <div className="hidden lg:flex flex-col justify-center items-start p-16 pr-20 w-1/2">
                    <div className="mb-8">
                        <Link href="/" className="flex items-center gap-2 cursor-pointer group">
                            <div className="bg-green-500 w-10 h-10 rounded-sm"></div>
                            <div className="flex flex-col leading-tight">
                                <span className="font-bold text-lg">ADROSHIP</span>
                                <span className="text-sm text-gray-500">
                                    Delivery & Transportation
                                </span>
                            </div>
                        </Link>
                    </div>

                    <h1 className="text-4xl font-bold leading-snug mb-4">
                        We are more than <br />
                        just a <span className="text-green-600">shipping partner</span>
                    </h1>


                    <div className="mt-8">
                        <Image
                            src="/images/qbanner.webp"
                            alt="Illustration"
                            width={400}
                            height={300}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-8 pl-20">
                    {children}
                </div>

            </div>
        </div>
    );
}
