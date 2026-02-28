import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, ArrowUpRight } from 'lucide-react';

export const metadata = {
    title: "Events | Ceylon Tea Land",
    description: "Explore our special events and upcoming exhibitions worldwide.",
    openGraph: {
        title: "Events | Ceylon Tea Land",
        description: "Explore our special events and upcoming exhibitions worldwide.",
        url: "https://ceylontealand.com/events",
        siteName: "Ceylon Tea Land",
        images: [
            {
                url: "/tea land favicon.png",
                width: 500,
                height: 500,
                alt: "Ceylon Tea Land Events",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

const events = [
    {
        title: "WORLD FOOD RUSSIA 2020",
        image: "/WORLD FOOD RUSSIA 2020.png"
    },
    {
        title: "WORLD FOOD RUSSIA 2021",
        image: "/WORLD FOOD RUSSIA 2021.png"
    },
    {
        title: "PRODEXPO MOSCOW RUSSIA 2022",
        image: "/PRODEXPO MOSCOW RUSSIA 2022.png"
    },
    {
        title: "GULFOOD DUBAI U.A.E 2022",
        image: "/GULFOOD DUBAI U.A.E 2022.png"
    },
    {
        title: "IFE EXCEL, LONDON MARCH 2022",
        image: "/IFE EXCEL, LONDON MARCH 2022.jpg"
    },
    {
        title: "HORECA LEBANON MARCH 2022",
        image: "/HORECA LEBANON MARCH 2022.jpg"
    },
    {
        title: "POLAND WARZSAW APRIL 2022",
        image: "/POLAND WARZSAW APRIL 2022.jpg"
    },
    {
        title: "CANADA MONTREAL APRIL 2022",
        image: "/CANADA MONTREAL APRIL 2022.jpg"
    },
    {
        title: "INTER FOOD AZERBAIJAN 2022",
        image: "/INTER FOOD AZERBAIJAN 2022.jpg"
    }
];

export default function EventsPage() {
    return (
        <main className="bg-neutral-50 text-neutral-900 min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[40vh] pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden flex flex-col items-center justify-center bg-[#f4f1ea] rounded-b-[40px] shadow-[0_10px_20px_rgba(0,0,0,0.03)] border-b border-black/5 mt-[-20px]">
                {/* Minimalist Background Accents */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d9b482]/20 rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-900/10 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full mt-10">
                    <div className="max-w-3xl text-center mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <div className="inline-flex items-center justify-center gap-2.5 rounded-full border border-black/10 bg-white/40 px-5 py-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-emerald-800 backdrop-blur-md shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse"></span>
                            Global Exhibitions
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-neutral-900">
                            Our Special <span className="font-serif italic text-[#c29c6b]">Events.</span>
                        </h1>

                        <p className="text-base md:text-lg lg:text-xl leading-relaxed text-neutral-600 font-light max-w-xl mx-auto">
                            Discover our international presence at the world&apos;s most prestigious food and beverage exhibitions.
                        </p>

                        <div className="pt-2">
                            <Link
                                href="#events-grid"
                                className="inline-flex justify-center items-center gap-3 rounded-full bg-neutral-900 px-6 py-3.5 text-white transition-all duration-300 hover:scale-105 hover:bg-neutral-800 hover:shadow-xl w-full sm:w-auto font-semibold uppercase tracking-wider text-[12px]"
                            >
                                View Past Events
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Grid Section */}
            <section id="events-grid" className="py-24 lg:py-32 bg-neutral-50 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                        <span className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-700 mb-4 block">
                            Global Reach
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Past & Upcoming Exhibitions</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4c3a3] to-transparent mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                            A showcase of our footprint across international markets, connecting with distributors and tea enthusiasts directly.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {events.map((event, index) => (
                            <div
                                key={event.title}
                                className="group flex flex-col items-center"
                            >
                                <div className="relative w-full aspect-[4/5] md:aspect-[3/4] mb-8 rounded-[2rem] bg-white overflow-hidden transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-neutral-100">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                    {/* Reveal Button on Hover */}
                                    <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="w-full text-center transform group-hover:-translate-y-2 transition-transform duration-500 px-4">
                                    <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                                        {event.title}
                                    </h3>
                                    <div className="w-8 h-[2px] bg-emerald-700/30 mx-auto group-hover:bg-emerald-700 group-hover:w-16 transition-all duration-500"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
