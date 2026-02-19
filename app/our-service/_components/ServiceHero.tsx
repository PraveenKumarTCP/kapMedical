import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ServiceHero() {
    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm mb-8 text-gray-500">
                    <Link href="/" className="hover:text-[#D32F2F]">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-[#D32F2F]">Services</span>
                </nav>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl! md:text-4xl! font-bold text-[#002B49]! mb-6!">
                            Our Services
                        </h1>
                        <div className="space-y-6 text-[#374151] text-base leading-relaxed">
                            <p>
                                KAP Medical delivers comprehensive engineering and manufacturing services focused on therapeutic support surfaces and advanced medical electronics. From concept development to U.S.-based production, we provide integrated solutions built on precision, compliance, and uncompromising quality.
                            </p>
                        </div>
                        <button className="mt-8 bg-[#BF0D3E] hover:bg-[#a00b34] text-white font-bold py-3 px-8 rounded transition-all">
                            Get in touch
                        </button>
                    </div>
                    <div className="lg:w-1/2 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                        {/* Using a subtle medical abstract image for service hero */}
                        <Image
                            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80"
                            alt="Our Services"
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
