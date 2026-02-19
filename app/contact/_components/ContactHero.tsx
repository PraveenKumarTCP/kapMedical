import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ContactHero() {
    return (
        <section className="py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm mb-8 text-gray-500">
                    <Link href="/" className="hover:text-[#D32F2F]">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-[#D32F2F]">Contact Us</span>
                </nav>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <h1 className="text-3xl! md:text-4xl! font-bold text-[#002B49]! mb-6!">
                            Contact Us
                        </h1>
                        <div className="space-y-6 text-[#374151] text-base leading-relaxed">
                            <p>
                                We’re here to support your engineering, manufacturing, and product development needs. Contact KAP Medical to connect with our team and discover how we can bring your solution to life.
                            </p>
                        </div>
                        <div>
                            <Link href="/about" className="inline-block bg-[#D32F2F] hover:bg-[#b01e1e] text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                                About Us
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="images/contact/contact-main.jpg"
                            alt="Contact KAP Medical"
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
