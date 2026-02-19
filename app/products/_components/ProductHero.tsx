import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ProductHero() {
    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm mb-8 text-gray-500">
                    <Link href="/" className="hover:text-[#D32F2F]">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-[#D32F2F]">Products</span>
                </nav>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl! md:text-4xl! font-bold text-[#002B49]! mb-6!">
                            Our Products
                        </h1>
                        <div className="space-y-6 text-[#374151] text-base leading-relaxed">
                            <p>
                                KAP Medical products are engineered to deliver advanced therapeutic support and reliable medical electronic performance across diverse healthcare settings. Designed and manufactured in the USA, our solutions prioritize patient safety, comfort, and long-term durability.
                            </p>
                        </div>
                        <button className="mt-8 bg-[#BF0D3E] hover:bg-[#a00b34] text-white font-bold py-3 px-8 rounded transition-all">
                            Get in touch
                        </button>
                    </div>
                    <div className="lg:w-1/2 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="images/our-prducts.jpg"
                            alt="Our Products"
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
