import React from 'react';
import Image from 'next/image';

export default function GalleryGrid() {
    const images = [
        "images/gallery/our-gallery.jpg",
        "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group ${index === 0 ? 'lg:col-span-2 lg:row-span-2 h-[400px] lg:h-auto' : 'h-[300px]'
                                }`}
                        >
                            <Image
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
