'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/our-service' },
        { name: 'Products', href: '/products' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <img src="/images/logo.png" alt="logo" className=" h-12" />
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`text-md font-semibold transition-colors hover:text-[#D32F2F] ${isActive ? 'text-[#D32F2F]' : 'text-gray-700'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center">
                        <a href="tel:+19513404503" className="hidden md:flex items-center gap-5 text-[#002B49] font-semibold">
                            <div className="p-2 bg-[#D32F2F] rounded-full text-white">
                                <Phone size={22} />
                            </div>
                            <div className="flex flex-col text-md! leading-tight">
                                <span className="text-gray-500">Call us on</span>
                                <span>+1 951 340 4503</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
