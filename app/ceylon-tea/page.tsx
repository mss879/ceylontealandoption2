import { ArrowRight, Leaf, Globe, Map, Ship, Anchor } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "The Legacy of Ceylon Tea | Ceylon Tea Land",
    description: "Discover the history, the terroirs, and the dedication that created the world's most celebrated pure single-origin tea.",
    keywords: ["Ceylon Tea History", "Tea Elevations", "Sri Lanka Tea", "Ceylon Tea Land"],
    authors: [{ name: "Ceylon Tea Land" }],
    openGraph: {
        title: "The Legacy of Ceylon Tea | Ceylon Tea Land",
        description: "Discover the history, the terroirs, and the dedication that created the world's most celebrated pure single-origin tea.",
        url: "https://ceylontealand.com/ceylon-tea",
        siteName: "Ceylon Tea Land",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "The Legacy of Ceylon Tea | Ceylon Tea Land",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

const timelineEvents = [
    {
        year: "1867",
        title: "The Pioneer",
        description: "James Taylor planted the first commercial 19-acre tea crop at Loolecondera Estate.",
    },
    {
        year: "1873",
        title: "First Export",
        description: "The first documented shipment of Ceylon tea—23 lbs—arrived in London.",
    },
    {
        year: "1890",
        title: "Global Auction",
        description: "The Colombo Tea Auction was formed, becoming the world's largest single-origin tea auction.",
    },
    {
        year: "1932",
        title: "Tea Research",
        description: "Tea Research Institute founded to improve scientific cultivation methods.",
    },
];

const elevations = [
    {
        title: "High Grown (Up-Country)",
        subtitle: "Over 4,000 ft",
        desc: "Produces the most exquisitely flavored teas, celebrated for their golden liquor, intense aroma, and delicate, brisk taste. Nuwara Eliya and Uva regions are renowned.",
        img: "/elevation_high.png"
    },
    {
        title: "Mid Grown (Mid-Country)",
        subtitle: "2,000 to 4,000 ft",
        desc: "Yields teas with a robust character, rich flavor, and good color. These full-bodied, malty varieties often come from the Kandy region.",
        img: "/elevation_mid.png"
    },
    {
        title: "Low Grown (Low-Country)",
        subtitle: "Sea level to 2,000 ft",
        desc: "Subjected to high sunshine and warmth, producing a burgundy brown liquor and a heavy, robust taste, featuring visually impressive leaf appearances.",
        img: "/elevation_low.png"
    }
];

export default function CeylonTeaPage() {
    return (
        <main className="bg-white text-neutral-900">
            {/* 1. Hero Section */}
            <section className="relative min-h-screen overflow-hidden flex items-end rounded-b-[60px] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <Image
                    src="/about_hero_tea_estate.png"
                    alt="Lush green tea estates of Sri Lanka"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="relative z-10 px-4 md:px-6 pb-16 lg:pb-32 w-full max-w-[1400px] mx-auto">
                    <div className="max-w-4xl text-center mx-auto">
                        <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#d9b482] mb-8 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d9b482] animate-pulse"></span>
                            The Island of Tea
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-8xl font-light leading-[1.05] tracking-tight text-white mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
                            The Legacy of <br /><span className="font-serif italic text-[#d9b482]">Ceylon Tea</span>
                        </h1>
                        <p className="text-lg md:text-xl leading-relaxed text-neutral-300 max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                            Discover the history, the terroirs, and the dedication that created the world&apos;s most celebrated pure single-origin tea.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. History & Origins */}
            <section className="relative overflow-hidden bg-neutral-950 py-24 lg:py-40">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,180,130,0.1),transparent_70%)]" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#b58b54]">
                                <Leaf className="w-4 h-4" />
                                <span>Origins</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-white">
                                How Coffee Gave <br />
                                <span className="font-semibold text-[#b58b54]">Way to Tea.</span>
                            </h2>
                            <p className="text-lg leading-relaxed text-neutral-400">
                                In the 1860s, a devastating leaf blight wiped out Sri Lanka&apos;s thriving coffee industry. Out of ruin, a Scottish planter named James Taylor sparked a revolution by planting the first commercial tea estate in Loolecondera, forever changing the island&apos;s destiny.
                            </p>
                        </div>

                        {/* Right Content / Timeline Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {timelineEvents.map((item, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-[#d9b482]/30 hover:shadow-[0_20px_40px_-20px_rgba(217,180,130,0.15)]"
                                >
                                    <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="text-[#d9b482] font-serif text-5xl">{(index + 1).toString().padStart(2, '0')}</span>
                                    </div>
                                    <div className="relative z-10 flex flex-col h-full justify-between pt-12">
                                        <h3 className="text-4xl font-light text-white mb-2">{item.year}</h3>
                                        <div>
                                            <h4 className="text-lg font-semibold text-[#b58b54] mb-3 uppercase tracking-wider">{item.title}</h4>
                                            <p className="text-neutral-400 leading-relaxed text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. The Art of Cultivation / Elevations */}
            <section className="bg-white text-neutral-900 py-32 border-b border-[#ead9bc]">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                        <div className="flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#b58b54]">
                            <Map className="w-4 h-4" />
                            <span>Terroir</span>
                        </div>
                        <h2 className="text-5xl lg:text-6xl font-semibold text-neutral-900 tracking-tight">
                            Three Distinct Elevations
                        </h2>
                        <p className="text-xl text-neutral-500 leading-relaxed">
                            Sri Lanka&apos;s unique topography means tea is grown at three main elevations, each producing its own distinct flavor profile, color, and aroma.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {elevations.map((elevation, idx) => (
                            <div key={idx} className="group flex flex-col rounded-[2.5rem] bg-[#f4f1ea]/50 border border-[#ead9bc] overflow-hidden hover:shadow-[0_45px_120px_-20px_rgba(181,139,84,0.15)] transition-all duration-500">
                                <div className="relative h-72 w-full overflow-hidden">
                                    <Image
                                        src={elevation.img}
                                        alt={elevation.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-10 flex-1 flex flex-col">
                                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#b58b54] mb-4 shrink-0">
                                        {elevation.subtitle}
                                    </span>
                                    <h3 className="text-3xl font-light tracking-tight text-neutral-900 mb-6 shrink-0 md:min-h-[4.5rem] lg:min-h-[5.5rem] flex items-start">
                                        {elevation.title}
                                    </h3>
                                    <p className="text-neutral-600 leading-relaxed text-base opacity-90 mt-2">
                                        {elevation.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Global Trade & The Lion Logo */}
            <section className="relative overflow-hidden bg-neutral-950 py-32 text-center border-t border-white/5">
                {/* Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#cca572]/10 blur-[150px] pointer-events-none" />

                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    <div className="w-24 h-24 mx-auto mb-10 overflow-hidden relative opacity-90 rounded-full border-2 border-[#b58b54]/30 bg-white/5 flex items-center justify-center p-4">
                        {/* Note: since we don't have a Lion Logo image confirmed, use an Icon to represent Global Trade */}
                        <Globe className="w-full h-full text-[#d9b482]" strokeWidth={1} />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-light leading-[1.05] tracking-tight text-white mb-8">
                        The Gold Standard of <br /><span className="font-serif italic text-[#d9b482]">Global Export</span>
                    </h2>

                    <p className="text-lg md:text-xl leading-relaxed text-neutral-400 max-w-3xl mx-auto mb-16">
                        Ozone-friendly, hand-picked, and manufactured following orthodox methods. The reputation of Ceylon Tea was built on relentless quality controls and an authentic supply chain stretching from central highlands over the Indian Ocean to the world.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-white/10 pt-16">
                        <div className="flex flex-col items-center">
                            <Ship className="w-8 h-8 text-[#b58b54] mb-4" />
                            <h4 className="text-xl font-medium text-white mb-2">Maritime Legacy</h4>
                            <p className="text-neutral-500 text-sm">Exporting over oceans since 1873.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Globe className="w-8 h-8 text-[#b58b54] mb-4" />
                            <h4 className="text-xl font-medium text-white mb-2">150+ Countries</h4>
                            <p className="text-neutral-500 text-sm">A globally recognized mark of purity.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Leaf className="w-8 h-8 text-[#b58b54] mb-4" />
                            <h4 className="text-xl font-medium text-white mb-2">Ozone Friendly</h4>
                            <p className="text-neutral-500 text-sm">Recognized globally for sustainable agriculture.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
