'use client';
import React from 'react';
import { motion } from 'framer-motion';

const slides = [
    { number: 'Logo'},
    { number: 'logo'},
    { number: 'Logo'},
    { number: 'logo'},
    { number: 'logo'},
];

const CompanyIcons = () => {
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative w-full overflow-hidden h-24 bg-gradient-to-r from-gray-900 to bg-slate-800 lg:mb-16 mb-4">
            <motion.div
                className="flex h-full"
                animate={{
                    x: ['-100%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration: 20,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex flex-col items-center justify-center h-full lg:text-4xl sm:text-3xl text-xl text-gray-400">
                            {slide.number}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default CompanyIcons;