
import React from 'react';
import Image from 'next/image';

export default function Products() {
    const products = [
        {
            name: "ISENSE CLRT System",
            image: "images/product-1.png",
        },
        {
            name: "ITURN CLRT System",
            image: "images/product-1.png",
        },
        {
            name: "SMARTMATT & SMARTTURN",
            image: "images/product-1.png",
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-[#002B49] text-3xl font-bold mb-4">Our Products</h2>
                <p className="max-w-3xl mx-auto text-gray-600 text-sm mb-12">
                    We offer a range of medical services to support patients as well as families in Corona, including general and chronic
                    disease care, diagnostic testing, immunizations, and more. We treat both young and elderly patients with acute or
                    chronic medical conditions. Walk-in or make an appointment today.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="flex flex-col items-center bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-6 transition-all">
                            <div className="relative w-full aspect-square mb-6 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={200}
                                    height={200}
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                            <h3 className="text-[#002B49] font-bold text-lg! md:text-xl! tracking-wide uppercase">{product.name}</h3>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <button className="bg-[#D32F2F] hover:bg-[#b01e1e] text-white px-8 py-2.5 rounded text-sm font-medium transition-colors">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );
}
