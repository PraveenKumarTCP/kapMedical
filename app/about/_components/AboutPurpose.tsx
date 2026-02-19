import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

export default function AboutPurpose() {
    return (
        <section className="py-30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#002B49]! mb-4">Our Purpose & Principles</h2>
                    <p className="max-w-3xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
                        Driven by innovation and guided by integrity, our mission, vision, and values define who we are, how we operate, and the standards we uphold in advancing healthcare technology.
                    </p>
                </div>

                <div className="bg-[#002B49] rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {/* Mission */}
                        <div className="text-center md:text-left">
                            <div className="w-14 h-14 bg-[#BF0D3E] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                                <Target className="text-white" size={28} />
                            </div>
                            <h3 className="text-white! text-2xl! font-bold mb-4">Our Mission</h3>
                            <p className="text-white! text-sm leading-relaxed text-justify">
                                To design and manufacture innovative therapeutic support surfaces and medical electronic solutions that enhance patient outcomes, support caregivers, and uphold the highest standards of quality and safety.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="text-center md:text-left">
                            <div className="w-14 h-14 bg-[#BF0D3E] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                                <Eye className="text-white" size={28} />
                            </div>
                            <h3 className="text-white! text-2xl! font-bold mb-4">Our Vision</h3>
                            <p className="text-white! text-sm leading-relaxed text-justify">
                                To be a trusted U.S. leader in advanced medical support technologies, recognized for engineering excellence, regulatory integrity, and unwavering commitment to healthcare innovation.
                            </p>
                        </div>

                        {/* Values */}
                        <div className="text-center md:text-left">
                            <div className="w-14 h-14 bg-[#BF0D3E] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                                <Heart className="text-white" size={28} />
                            </div>
                            <h3 className="text-white! text-2xl! font-bold mb-4">Our Values</h3>
                            <p className="text-white! text-sm leading-relaxed text-justify">
                                We are committed to advancing healthcare technology through continuous research, thoughtful design, and engineering excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
