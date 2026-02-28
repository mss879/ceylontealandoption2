import { ArrowRight, Box, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: "Private Label Branding | Ceylon Tea Land",
    description: "Launch your premium tea brand with our world-class estate network. Export-grade Ceylon tea, elegantly packaged.",
    keywords: ["Private Label Tea", "Tea Branding", "White Label Tea", "Ceylon Tea Land"],
    authors: [{ name: "Ceylon Tea Land" }],
    openGraph: {
        title: "Private Label Branding | Ceylon Tea Land",
        description: "Launch your premium tea brand with our world-class estate network.",
        url: "https://ceylontealand.com/branding",
        siteName: "Ceylon Tea Land",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Private Label Branding | Ceylon Tea Land",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

const processSteps = [
    {
        title: 'Select Your Blend',
        description: 'Work with our master blenders to choose from our export-grade single-origin teas, or craft a signature profile unique to your brand.',
        image: '/tea_blending_process.png',
    },
    {
        title: 'Design & Packaging',
        description: 'We offer an array of premium, unbranded packaging from minimalist tins to elegant pouches. Bring your design to life to match your brand&apos;s ethos.',
        image: '/custom_packaging_showcase.png',
    },
    {
        title: 'Quality Production',
        description: 'Manufactured and packed at the source in Sri Lanka under strict ISO & export compliances, ensuring uncompromising freshness and safety.',
        icon: CheckCircle2,
    },
    {
        title: 'Global Delivery',
        description: 'Seamless international logistics drop-shipped or freight-forwarded directly to your distribution centers anywhere in the world.',
        icon: Globe,
    },
];

export default function BrandingPage() {
    return (
        <main className="bg-neutral-50 text-neutral-900 min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen overflow-hidden flex items-end pt-32 rounded-b-[60px] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <Image
                    src="/branding-hero.webp"
                    alt="Premium White Label Tea"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="relative z-10 px-4 md:px-6 pb-16 lg:pb-24 md:ml-8 w-full">
                    <div className="max-w-3xl mx-auto md:mx-0">
                        <div className="space-y-6 rounded-3xl bg-neutral-950/60 p-6 md:p-8 lg:p-10 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/20 px-5 py-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-[#d9b482] backdrop-blur-md">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#d9b482] animate-pulse"></span>
                                White Label & Private Branding
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight tracking-tight text-white drop-shadow-lg">
                                Your Brand. <br />
                                <span className="font-serif italic text-[#d9b482]">Our Legacy.</span>
                            </h1>
                            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-neutral-300 max-w-xl font-light">
                                Launch your premium tea brand with our world-class estate network. Export-grade Ceylon tea, elegantly packaged and ready for the global stage.
                            </p>

                            <div className="pt-2 flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="#process"
                                    className="inline-flex justify-center items-center gap-3 rounded-full bg-[#d9b482] px-6 py-3.5 text-neutral-950 transition-all duration-300 hover:scale-105 hover:bg-[#c29c6b] hover:shadow-[0_0_30px_rgba(217,180,130,0.4)] w-full sm:w-auto font-semibold uppercase tracking-wider text-[13px]"
                                >
                                    Explore the Process
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex justify-center items-center gap-3 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-6 py-3.5 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50 w-full sm:w-auto font-semibold uppercase tracking-wider text-[13px]"
                                >
                                    Start Your Journey
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About the Service Section */}
            <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d9b482]/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-900/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div className="space-y-10">
                            <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-[#b58b54]">
                                <Sparkles className="h-4 w-4" />
                                <span>The Partnership</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-neutral-900 leading-[1.1] tracking-tight">
                                Turnkey Solutions for Visionary Brands.
                            </h2>
                            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                                <p>
                                    Building a tea brand from scratch requires navigating complex supply chains, quality control, and international logistics. We remove these barriers.
                                </p>
                                <p>
                                    As an established Sri Lankan exporter, we grant you direct access to highland estates and our state-of-the-art manufacturing facilities. Whether you need bulk wholesale or fully packaged retail-ready products, our wholesale branding service operates as a seamless extension of your business.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 pt-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-neutral-950 flex items-center justify-center flex-shrink-0 text-[#d9b482]">
                                        <Box className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-1">Bespoke Packaging</h4>
                                        <p className="text-sm text-neutral-500">From pyramid bags to luxury tins, fully customized to your identity.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-neutral-950 flex items-center justify-center flex-shrink-0 text-[#d9b482]">
                                        <Globe className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-1">Global Scale</h4>
                                        <p className="text-sm text-neutral-500">We ship internationally, handling the complexity of export compliance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.1)] group">
                            <Image
                                src="/tea_blending_process.png"
                                alt="Master tea blender"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <div className="inline-block bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                    <p className="font-serif italic text-2xl mb-2 text-[#d9b482]">&quot;Quality is not an act, it is a habit.&quot;</p>
                                    <p className="text-sm uppercase tracking-widest opacity-80">— Our Master Blenders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process Section */}
            <section id="process" className="py-24 lg:py-40 bg-neutral-950 text-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
                            How It <span className="font-serif italic text-[#d9b482]">Works</span>
                        </h2>
                        <p className="text-lg text-neutral-400">
                            A streamlined, transparent framework to take your concept from idea to the final pour.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {processSteps.map((step, index) => (
                            <div
                                key={step.title}
                                className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 hover:bg-white/10 transition-all duration-500"
                            >
                                <div className="absolute top-8 right-8 text-6xl font-light text-white/5 pointer-events-none group-hover:text-white/10 transition-colors">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {step.image ? (
                                    <div className="relative w-full h-48 md:h-64 mb-8 rounded-xl overflow-hidden">
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                        />
                                    </div>
                                ) : step.icon ? (
                                    <div className="w-16 h-16 rounded-full bg-[#d9b482]/20 text-[#d9b482] flex items-center justify-center mb-8 border border-[#d9b482]/30">
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                ) : null}

                                <h3 className="text-2xl md:text-3xl font-medium mb-4">{step.title}</h3>
                                <p className="text-neutral-400 text-lg leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 lg:py-32 bg-[#d9b482] text-neutral-950 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-transparent"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">
                        Ready to Build Your Brand?
                    </h2>
                    <p className="text-xl text-neutral-800 mb-12 max-w-2xl mx-auto">
                        Connect with our white-label specialists to request samples and discuss your brand&apos;s unique requirements.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-4 bg-neutral-950 text-white rounded-full px-10 py-5 text-lg font-semibold uppercase tracking-wider hover:bg-neutral-800 hover:scale-105 transition-all duration-300 shadow-xl shadow-neutral-900/20 group"
                    >
                        <span>Contact Sales</span>
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}
