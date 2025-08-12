import Image from "next/image";
import { FC } from "react";


const ExcellenceSection: FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="relative">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/logistics-customer-service.webp"
                            width={600}
                            height={400}
                            alt="Team working together"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>


                <div>
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        Driving Excellence in Logistics
                    </h2>
                    <p className="mt-4 text-gray-600">
                        With years of experience in the transportation industry, Adroship
                        has established itself as a trusted partner for businesses across
                        India.
                    </p>
                    <p className="mt-4 text-gray-600">
                        Our commitment to innovation and customer satisfaction drives us to
                        continuously improve our services. We leverage cutting-edge
                        technology to provide seamless logistics solutions that help
                        businesses grow.
                    </p>
                    <p className="mt-4 text-gray-600">
                        From small packages to large shipments, our comprehensive network
                        ensures your goods reach their destination safely and on time.
                    </p>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center">
                            <p className="text-4xl font-extrabold text-green-600">5+</p>
                            <p className="mt-1 text-gray-600 text-sm">Years Experience</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="text-4xl font-extrabold text-green-600">1000+</p>
                            <p className="mt-1 text-gray-600 text-sm">Happy Clients</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="text-4xl font-extrabold text-green-600">24/7</p>
                            <p className="mt-1 text-gray-600 text-sm">Customer Support</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default ExcellenceSection;
