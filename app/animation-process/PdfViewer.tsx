'use client';

import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the correct worker using unpkg explicitly for the exact version
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
    fileUrl: string;
}

export default function PdfViewer({ fileUrl }: PdfViewerProps) {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    // Keep track of the window size dynamically for responsiveness without SSR rendering errors
    useEffect(() => {
        // document.documentElement.clientWidth gets the width EXCLUDING the vertical scrollbar
        const getWidth = () => document.documentElement.clientWidth;
        setWindowWidth(getWidth());
        const handleResize = () => setWindowWidth(getWidth());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    // Fit exactly to the window for full bleed, seamless look
    const pdfWidth = windowWidth > 0 ? windowWidth : 1200;

    return (
        <div className="w-full flex-grow flex flex-col items-center bg-white overflow-hidden m-0 p-0">
            <Document
                file={fileUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={
                    <div className="flex flex-col gap-4 justify-center items-center h-64 bg-white text-gray-400 w-full">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D32F2F]"></div>
                        <p>Loading document...</p>
                    </div>
                }
                className="flex flex-col items-center bg-white w-full m-0 p-0"
            >
                {Array.from(new Array(numPages || 0), (el, index) => (
                    // Seamlessly stack each page like sections of a normal webpage
                    <div 
                        key={`page_${index + 1}`} 
                        className="w-full flex justify-center bg-white m-0 p-0"
                    >
                        {windowWidth > 0 && (
                            <Page
                                pageNumber={index + 1}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                                width={pdfWidth}
                                className="bg-white m-0 p-0"
                            />
                        )}
                    </div>
                ))}
            </Document>
        </div>
    );
}
