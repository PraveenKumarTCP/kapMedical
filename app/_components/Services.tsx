'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Services() {
    const services = [
        {
            title: "Research & Development",
            description: "Cutting-edge innovation to transform ideas into reality.",
            image: "images/service-1.png",
        },
        {
            title: "Therapeutic Support Surface",
            description: "Custom solutions for patient comfort and care.",
            image: "images/service-2.png",
        },
        {
            title: "Custom Engineering Solutions",
            description: "Tailored engineering for unique medical challenges.",
            image: "images/service-3.png",
        },
        // Adding a few more to make sliding more obvious
        {
            title: "Medical Electronics",
            description: "Advanced electronic systems designed for healthcare precision.",
            image: "images/service-1.png",
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-[#002B49] text-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl! font-bold mb-4 text-white!">Services we Provided</h2>
                    <p className="max-w-2xl mx-auto text-gray-300 text-white!">
                        We offer a range of medical services to support patients as well as families in Corona, including general and chronic
                        disease care, diagnostic testing, immunizations, and more. We treat both young and elderly patients with acute or
                        chronic medical conditions. Walk-in or make an appointment today.
                    </p>
                </div>

                <div className="services-swiper-container pb-12">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination',
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1100: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="rounded-xl overflow-hidden"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className="group relative overflow-hidden rounded-xl h-[450px] md:h-[550px] border border-white/10 hover:border-white/30 transition-all bg-black/20">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-10">
                                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-white!">{service.title}</h3>
                                        <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3 text-white!">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Pagination Container */}
                    <div className="custom-pagination flex justify-center gap-3 mt-12"></div>
                </div>
            </div>

            <style jsx global>{`
                .custom-pagination .swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                    background: rgba(255, 255, 255, 0.3);
                    opacity: 1;
                    margin: 0 !important;
                    transition: all 0.3s ease;
                }
                .custom-pagination .swiper-pagination-bullet-active {
                    background: #D32F2F !important;
                    width: 12px;
                    height: 12px;
                }
            `}</style>
        </section>
    );
}
