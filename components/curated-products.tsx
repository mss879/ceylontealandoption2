'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function CuratedProducts() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section className="relative bg-neutral-950 border-t border-white/5 border-b border-[#ead9bc] z-20">
            {/* Desktop Horizontal Scroll View */}
            <div ref={targetRef} className="hidden lg:block h-[300vh]">
                <div className="sticky top-0 flex h-screen items-end pb-20 overflow-hidden">

                    {/* Fixed Header */}
                    <div className="absolute top-12 md:top-24 left-12 lg:left-24 z-20 pointer-events-none w-full pr-12">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-light text-white">
                            Our <span className="font-serif italic text-[#b58b54]">Curated</span> Products
                        </h2>
                    </div>

                    {/* Translating Track */}
                    <motion.div style={{ x }} className="flex gap-12 pl-[40vw] pr-[10vw] items-center pt-32 lg:pt-48">

                        {/* Product 1 */}
                        <div className="relative flex flex-col justify-between shrink-0 w-[50vw] h-[65vh] rounded-[2rem] p-8 md:p-12 border border-white/5 bg-neutral-900/50 group overflow-hidden hover:bg-neutral-900/80 transition-all duration-700">
                            <div className="absolute inset-0 bg-[url('/tea_bags.jpg')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
                            <span className="absolute top-4 right-8 text-[8rem] md:text-[10rem] font-bold text-white/5 select-none pointer-events-none tracking-tighter leading-none z-0">01</span>

                            <div className="relative z-10 flex flex-col h-full justify-end">
                                <div className="mt-auto space-y-4">
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-none">Premium <span className="font-serif italic text-[#f1d2a4]">Tea Bags</span></h3>
                                    <p className="text-neutral-300 text-lg leading-relaxed max-w-lg">
                                        Single chamber, double chamber, pyramid, envelope and tagless variants. Uncompromising quality optimized for convenience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="relative flex flex-col justify-between shrink-0 w-[50vw] h-[65vh] rounded-[2rem] p-8 md:p-12 border border-white/5 bg-neutral-900/50 group overflow-hidden hover:bg-neutral-900/80 transition-all duration-700">
                            <div className="absolute inset-0 bg-[url('/bulk_tea.jpg')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
                            <span className="absolute top-4 right-8 text-[8rem] md:text-[10rem] font-bold text-white/5 select-none pointer-events-none tracking-tighter leading-none z-0">02</span>

                            <div className="relative z-10 flex flex-col h-full justify-end">
                                <div className="mt-auto space-y-4">
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-none">Bulk & <span className="font-serif italic text-[#f1d2a4]">Loose Leaf</span></h3>
                                    <p className="text-neutral-300 text-lg leading-relaxed max-w-lg">
                                        50 kilo inner-foil sacks spanning Pekoe, OPA, OP, OP1, FBOP, and Dust. The pure foundation of our export prowess.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="relative flex flex-col justify-between shrink-0 w-[50vw] h-[65vh] rounded-[2rem] p-8 md:p-12 border border-white/5 bg-neutral-900/50 group overflow-hidden hover:bg-neutral-900/80 transition-all duration-700">
                            <div className="absolute inset-0 bg-[url('/green1.webp')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
                            <span className="absolute top-4 right-8 text-[8rem] md:text-[10rem] font-bold text-white/5 select-none pointer-events-none tracking-tighter leading-none z-0">03</span>

                            <div className="relative z-10 flex flex-col h-full justify-end">
                                <div className="mt-auto space-y-4">
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-none">Artisan <span className="font-serif italic text-[#f1d2a4]">Green Tea</span></h3>
                                    <p className="text-neutral-300 text-lg leading-relaxed max-w-lg">
                                        Young Hyson, Chun Mee, gunpowder, and Sencha sourced exclusively from pristine mid and high-grown estates.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>

            {/* Mobile Vertical View */}
            <div className="lg:hidden flex flex-col gap-12 py-24 px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="text-5xl md:text-6xl leading-[1.05] tracking-tight font-light text-white">
                        Our <span className="font-serif italic text-[#b58b54]">Curated</span> Products
                    </h2>
                </div>

                {/* Mobile Product 1 */}
                <div className="relative flex flex-col justify-between w-full h-[500px] rounded-[2rem] p-6 border border-white/5 bg-neutral-900/50 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/tea_bags.jpg')] bg-cover bg-center opacity-40 hover:scale-105 transition-transform duration-1000"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
                    <span className="absolute top-4 right-6 text-[6rem] font-bold text-white/5 select-none pointer-events-none tracking-tighter leading-none z-0">01</span>
                    <div className="relative z-10 flex flex-col h-full justify-end">
                        <div className="mt-auto space-y-3">
                            <h3 className="text-3xl font-light text-white leading-none">Premium <span className="font-serif italic text-[#f1d2a4]">Tea Bags</span></h3>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Single chamber, double chamber, pyramid, envelope and tagless variants. Uncompromising quality optimized for convenience.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mobile Product 2 */}
                <div className="relative flex flex-col justify-between w-full h-[500px] rounded-[2rem] p-6 border border-white/5 bg-neutral-900/50 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/bulk_tea.jpg')] bg-cover bg-center opacity-40 hover:scale-105 transition-transform duration-1000"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
                    <span className="absolute top-4 right-6 text-[6rem] font-bold text-white/5 select-none pointer-events-none tracking-tighter leading-none z-0">02</span>
                    <div className="relative z-10 flex flex-col h-full justify-end">
                        <div className="mt-auto space-y-3">
                            <h3 className="text-3xl font-light text-white leading-none">Bulk & <span className="font-serif italic text-[#f1d2a4]">Loose Leaf</span></h3>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                50 kilo inner-foil sacks spanning Pekoe, OPA, OP, OP1, FBOP, and Dust. The pure foundation of our export prowess.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mobile Product 3 */}
                <div className="relative flex flex-col justify-between w-full h-[500px] rounded-[2rem] p-6 border border-white/5 bg-neutral-900/50 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/green1.webp')] bg-cover bg-center opacity-40 hover:scale-105 transition-transform duration-1000"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
                    <span className="absolute top-4 right-6 text-[6rem] font-bold text-white/5 select-none pointer-events-none tracking-tighter leading-none z-0">03</span>
                    <div className="relative z-10 flex flex-col h-full justify-end">
                        <div className="mt-auto space-y-3">
                            <h3 className="text-3xl font-light text-white leading-none">Artisan <span className="font-serif italic text-[#f1d2a4]">Green Tea</span></h3>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Young Hyson, Chun Mee, gunpowder, and Sencha sourced exclusively from pristine mid and high-grown estates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
