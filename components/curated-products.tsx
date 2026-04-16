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
                            <Image src="/premium_black_tea.webp" alt="Black Tea" fill className="object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 1024px) 100vw, 50vw" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>

                            <div className="relative z-10 flex flex-col h-full justify-end">
                                <div className="mt-auto space-y-4">
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-none"><span className="font-serif italic text-[#f1d2a4]">Black Tea</span></h3>
                                    <p className="text-neutral-300 text-lg leading-relaxed max-w-lg">
                                        Experience our rich and robust black teas. Available with natural add-on flavours including ginger, cardamom, and cinnamon for a bespoke blend.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="relative flex flex-col justify-between shrink-0 w-[50vw] h-[65vh] rounded-[2rem] p-8 md:p-12 border border-white/5 bg-neutral-900/50 group overflow-hidden hover:bg-neutral-900/80 transition-all duration-700">
                            <Image src="/artisan_green_tea.webp" alt="Green Tea" fill className="object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 1024px) 100vw, 50vw" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>

                            <div className="relative z-10 flex flex-col h-full justify-end">
                                <div className="mt-auto space-y-4">
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-none"><span className="font-serif italic text-[#f1d2a4]">Green Tea</span></h3>
                                    <p className="text-neutral-300 text-lg leading-relaxed max-w-lg">
                                        Pristine green teas from mid and high-grown estates. Elevate your brew with refreshing add-on flavours like jasmine, mint, and ginger.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="relative flex flex-col justify-between shrink-0 w-[50vw] h-[65vh] rounded-[2rem] p-8 md:p-12 border border-white/5 bg-neutral-900/50 group overflow-hidden hover:bg-neutral-900/80 transition-all duration-700">
                            <Image src="/exquisite_flavoured_tea.webp" alt="Flavoured Tea" fill className="object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-1000" sizes="(max-width: 1024px) 100vw, 50vw" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>

                            <div className="relative z-10 flex flex-col h-full justify-end">
                                <div className="mt-auto space-y-4">
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-none"><span className="font-serif italic text-[#f1d2a4]">Flavoured Tea</span></h3>
                                    <p className="text-neutral-300 text-lg leading-relaxed max-w-lg">
                                        A symphony of tastes crafted from premium tea leaves infused with natural fruit, floral, and spice extracts for a delightful experience.
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
                    <Image src="/premium_black_tea.webp" alt="Black Tea" fill className="object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-1000" sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
                    <div className="relative z-10 flex flex-col h-full justify-end">
                        <div className="mt-auto space-y-3">
                            <h3 className="text-3xl font-light text-white leading-none"><span className="font-serif italic text-[#f1d2a4]">Black Tea</span></h3>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Experience our rich and robust black teas. Available with natural add-on flavours including ginger, cardamom, and cinnamon for a bespoke blend.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mobile Product 2 */}
                <div className="relative flex flex-col justify-between w-full h-[500px] rounded-[2rem] p-6 border border-white/5 bg-neutral-900/50 overflow-hidden">
                    <Image src="/artisan_green_tea.webp" alt="Green Tea" fill className="object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-1000" sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
                    <div className="relative z-10 flex flex-col h-full justify-end">
                        <div className="mt-auto space-y-3">
                            <h3 className="text-3xl font-light text-white leading-none"><span className="font-serif italic text-[#f1d2a4]">Green Tea</span></h3>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Pristine green teas from mid and high-grown estates. Elevate your brew with refreshing add-on flavours like jasmine, mint, and ginger.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mobile Product 3 */}
                <div className="relative flex flex-col justify-between w-full h-[500px] rounded-[2rem] p-6 border border-white/5 bg-neutral-900/50 overflow-hidden">
                    <Image src="/exquisite_flavoured_tea.webp" alt="Flavoured Tea" fill className="object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-1000" sizes="100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
                    <div className="relative z-10 flex flex-col h-full justify-end">
                        <div className="mt-auto space-y-3">
                            <h3 className="text-3xl font-light text-white leading-none"><span className="font-serif italic text-[#f1d2a4]">Flavoured Tea</span></h3>
                            <p className="text-neutral-300 text-sm leading-relaxed">
                                A symphony of tastes crafted from premium tea leaves infused with natural fruit, floral, and spice extracts for a delightful experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
