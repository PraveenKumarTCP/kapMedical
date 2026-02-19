
import React from 'react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative bg-black text-white h-[100vh] items-center justify-center flex overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-2xl" data-aos="fade-right">
                    <div className="bg-[#002B4966] backdrop-blur-sm p-8 rounded-lg border-l-4 border-[#D32F2F] max-w-xl">
                        <h1 className="text-3xl! md:text-4xl! font-bold mb-4 leading-tight text-white!">
                            Precision In Every Procedure
                        </h1>
                        <p className="text-gray-300 mb-6 text-sm leading-relaxed text-white!">
                            At KAP Medical we deliver high-performance surgical instruments
                            engineered for accuracy, durability, and uncompromising quality.
                            Trusted by healthcare professionals nationwide, our solutions are
                            designed to enhance clinical outcomes, streamline surgical
                            workflows, and support excellence in every operating room.
                        </p>
                        <button className="bg-[#D32F2F] hover:bg-[#b01e1e] text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                            Explore Our Products
                        </button>
                    </div>
                </div>
            </div>
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover opacity-60"
                    src="https://cdn.clinicalvisuals.com/siteImages/generic/landing_page_generic_1.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                {/* Gradient Overlay for Text Readability */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-[#002B49] via-[#002B49]/70 to-transparent"></div> */}
            </div>
        </section>

    );
}
