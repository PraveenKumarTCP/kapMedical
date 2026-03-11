'use client';

import React from 'react';
import Navbar from '../_components/Navbar';
import Footer from '../_components/Footer';

import dynamic from 'next/dynamic';

const PdfViewer = dynamic(() => import('./PdfViewer'), { ssr: false });

export default function AnimationProcessPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />
            <main className="w-full bg-white border-t border-gray-100">
                <PdfViewer fileUrl="/pdf/animation-production-process.pdf" />
            </main>
            <Footer />
        </div>
    );
}
