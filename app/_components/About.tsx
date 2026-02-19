
import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-[#002B49]! text-3xl font-bold mb-6">About KAP medical</h2>
                        <div className="space-y-4 text-gray-600 text-sm leading-relaxed text-justify">
                            <p>
                                Founded in 1999, <span className="text-[#BF0D3E]! font-semibold">KAP Medical</span> is a California-based designer and manufacturer of
                                state-of-the-art Therapeutic Support Surfaces and advanced medical electronic
                                products. For over two decades, we have combined innovation, precision
                                engineering, and clinical insight to deliver solutions that enhance patient care and
                                caregiver efficiency.
                            </p>
                            <p>
                                Our multidisciplinary team brings deep expertise across Research & Development,
                                Engineering, Regulatory Affairs & Quality Assurance (RA/QA), and Manufacturing.
                                This integrated approach allows us to solve complex engineering challenges while
                                maintaining the highest standards of safety, compliance, and performance.
                            </p>
                            <p className="italic font-medium text-[#BF0D3E]! ">
                                “At KAP Medical, innovation is not just a goal—it is our standard.”
                            </p>
                        </div>
                        <button className="mt-8 bg-[#D32F2F] hover:bg-[#b01e1e] text-white px-6 py-2.5 rounded text-sm font-medium transition-colors">
                            Learn More about KAP
                        </button>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 bg-white shadow-xl rounded-lg">
                            <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-md bg-gray-200">
                                {/* Dummy Image */}
                                <Image
                                    src="images/abt-1.png"
                                    alt="Medical Professionals"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                        </div>
                        {/* Decorative Background Element */}
                        <div className="absolute top-12 -right-6 w-full h-full bg-[#002B49] rounded-lg -z-0 hidden md:block" style={{ transform: 'translate(10%, 10%)' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
