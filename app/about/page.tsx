import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react'

export const metadata = {
  title: "About Us | Ceylon Tea Land",
  description: "Learn about the legacy of Ceylon Tea Land. Pure Ceylon tea from Sri Lanka's finest highland estates.",
  keywords: ["About Us", "Ceylon Tea Land", "Tea Exporter", "Sri Lanka"],
  authors: [{ name: "Ceylon Tea Land" }],
  openGraph: {
    title: "About Us | Ceylon Tea Land",
    description: "Learn about the legacy of Ceylon Tea Land. Pure Ceylon tea from Sri Lanka's finest highland estates.",
    url: "https://ceylontealand.com/about",
    siteName: "Ceylon Tea Land",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Ceylon Tea Land",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* Hero Section - Matching Homepage Style */}
      <section className="relative min-h-screen overflow-hidden flex items-end rounded-b-[60px] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <Image
          src="/about-hero.webp"
          alt="Ceylon Tea Garden"
          fill
          className="object-cover"
        />

        <div className="relative z-10 px-6 pb-16 lg:pb-24 ml-8">
          <div className="max-w-3xl">
            <div className="space-y-8 rounded-3xl bg-white/85 p-8 text-neutral-900 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="space-y-4">
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-700">
                  → About Us
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-neutral-900">
                  About Ceylon Tea Land
                </h1>
                <p className="text-base md:text-lg leading-relaxed text-neutral-700">
                  Ceylon Tea from Sri Lanka, acclaimed as the best tea in the world, has its inherent unique characteristics and a reputation that spans generations.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-neutral-900 px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-neutral-800 hover:shadow-xl hover:shadow-neutral-500/20"
                >
                  <span className="font-semibold text-lg">Contact Us</span>
                  <div className="relative w-6 h-6 overflow-hidden">
                    <ArrowRight className="absolute w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-8 group-hover:-translate-y-8" />
                    <ArrowRight className="absolute w-6 h-6 -translate-x-8 translate-y-8 text-white transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Clean Neutral Style */}
      <section className="py-16 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50', suffix: '+', label: 'Years of Excellence' },
              { number: '50', suffix: '+', label: 'Tea Varieties' },
              { number: '40', suffix: '+', label: 'Countries Served' },
              { number: '100', suffix: '%', label: 'Pure Ceylon Tea' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <span className="inline-block tabular-nums">{stat.number}</span>
                  <span className="text-emerald-700">{stat.suffix}</span>
                </div>
                <div className="text-neutral-600 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section - Heritage Beige Theme */}
      <section className="py-24 lg:py-32 bg-[#f4f1ea]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 hidden lg:block">
              <div className="relative max-w-2xl mx-auto group">
                <div className="absolute -inset-4 border-2 border-neutral-900/10 rounded-3xl -z-10 rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <Image
                  src="/premium_our_journey.png"
                  alt="Ceylon Tea Journey and Heritage"
                  width={800}
                  height={500}
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-700">
                  Our Journey
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">Crafting Excellence Since Day One</h2>
              </div>
              <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                <p>
                  Ceylon Tea Land Factory operates with a team that is 100% dedicated to providing quality products and efficient service. Our company attributes its success to our dynamic workforce and dependable customers worldwide.
                </p>
                <div className="block lg:hidden">
                  <div className="relative max-w-xl mx-auto my-8">
                    <Image
                      src="/premium_our_journey.png"
                      alt="Ceylon Tea Journey and Heritage"
                      width={800}
                      height={450}
                      className="w-full aspect-[16/9] object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
                <p>
                  We have the capability to cater to varying tastes and requirements of customers across different parts of the world. Our team of dynamic Tea Tasters and Master Blenders are capable of supplying exactly what our customers require.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section - High-End Premium Theme */}
      <section className="bg-neutral-950 text-white relative flex items-center py-24 lg:py-32 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-full bg-[#f4f1ea]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#d4c3a3] mb-3 block">
              Our Foundation
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">What Drives Us Forward</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#d4c3a3] to-transparent mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              The principles that shape our decisions and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 pl-4 pr-4 h-full">
            {[
              {
                title: 'Vision',
                heading: 'Premier Global Organizer',
                description: 'To be the premier organizer operating in international markets that provides the complete range of 100% pure Ceylon tea and best service to all segments.'
              },
              {
                title: 'Mission',
                heading: 'Outstanding Products & Service',
                description: 'We provide outstanding products and unsurpassed service that together deliver premium value to our customers while managing exceptional customer experiences.'
              },
              {
                title: 'Values',
                heading: 'Respect & Responsibility',
                description: 'We strive to minimize our environmental impact while showing deep respect for human beings and the communities in which they live.'
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="group flex flex-col relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,195,163,0.05)] overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4c3a3] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="text-[#d4c3a3] font-light text-6xl opacity-20 absolute top-6 right-6 group-hover:scale-110 group-hover:opacity-30 transition-all duration-500 pointer-events-none">
                  0{index + 1}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex-1 mb-10">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4c3a3] block mb-4 mt-2">
                      {item.title}
                    </span>
                    <h3 className="text-2xl font-bold text-white pr-16 group-hover:text-[#f4f1ea] transition-colors duration-300">
                      {item.heading}
                    </h3>
                  </div>
                  <div className="flex-none">
                    <div className="h-[1px] w-12 bg-white/20 mb-6 group-hover:w-full group-hover:bg-[#d4c3a3]/50 transition-all duration-700"></div>
                    <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300 text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach - Neutral-50 Background */}
      <section className="py-24 lg:py-32 bg-neutral-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-700 mb-4 block">
              Global Reach
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Export Destinations</h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              Our premium Ceylon tea reaches tea lovers across the globe, bringing the authentic taste of Sri Lankan highlands to international markets.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl w-full mx-auto md:max-w-5xl bg-white border border-neutral-100 p-4">
            <Image
              src="/about/export image.png"
              alt="Ceylon Tea Export Destinations - Global Map"
              width={1200}
              height={675}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Quality Guarantee - White Background */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-700 mb-4 block">
              Our Promise
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Quality Guarantee</h2>
            <p className="text-xl text-neutral-600 max-w-4xl mx-auto">
              We offer you teas fresh from the plantations of Sri Lanka. Ceylon Tea Land guarantees consistent quality, purity, reliable packaging, and excellent customer service.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Freshest Ingredients', desc: 'Hand-plucked Ceylon Tea from the finest estates', img: '/premium_freshest_ingredients.png' },
              { title: 'Master Blending', desc: 'Expert tea tasters creating perfect flavor profiles', img: '/premium_master_blending.png' },
              { title: 'Authentic Experience', desc: 'Traditional Ceylon tea heritage in every cup', img: '/premium_authentic_experience.png' },
            ].map((item) => (
              <div key={item.title} className="text-center group">
                <div className="w-40 h-40 bg-neutral-50 rounded-3xl flex items-center justify-center mx-auto mb-8 overflow-hidden transition-all duration-500 group-hover:-translate-y-6 group-hover:scale-110 relative shadow-lg border border-neutral-100">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover rounded-3xl group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Beige Heritage Theme */}
      <section className="py-24 lg:py-32 bg-[#f4f1ea] relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-700 mb-4 block">
              Leadership
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our dynamic workforce and dependable team are the backbone behind the successful growth of Ceylon Tea Land.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-center">
            {[
              {
                name: 'Dr. RUMIE',
                role: 'Director',
                speaks: 'Russian / English',
                mobile: '+94 77 773 4180',
                email: 'rumie@sltnet.lk',
                img: '/about/Dr. RUMIE.png'
              },
              {
                name: 'Mr. IRSHAD',
                role: 'Manager / Tea Expert',
                speaks: 'English',
                mobile: '+94 77 411 9838',
                email: 'ctl.irshad@gmail.com',
                img: '/about/Mr. IRSHAD.png'
              },
              {
                name: 'Mr. NAZLIN',
                role: 'Production Manager',
                speaks: 'Russian / English',
                mobile: '+94 77 888 5800',
                email: 'rivonceylon@yahoo.com',
                img: '/about/Mr. NAZLIN.png'
              },
            ].map((member) => (
              <div key={member.name} className="group flex flex-col items-center">
                <div className="relative w-56 h-56 mb-6 rounded-full bg-white overflow-visible transition-all duration-500 group-hover:-translate-y-6 group-hover:scale-110 shadow-xl border-4 border-white">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover object-center rounded-full transition-all duration-500"
                  />
                </div>
                <div className="w-full text-center transform group-hover:-translate-y-1 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-emerald-700 transition-colors duration-300">{member.name}</h3>
                  <p className="text-emerald-700 font-medium mb-3">{member.role}</p>
                  <div className="text-sm text-neutral-600 space-y-1 leading-relaxed px-2">
                    <p><span className="font-semibold text-neutral-800">Speaks:</span> {member.speaks}</p>
                    <p><span className="font-semibold text-neutral-800">Mobile:</span> <a href={`tel:${member.mobile.replace(/\s/g, '')}`} className="hover:text-emerald-700">{member.mobile}</a></p>
                    <p><span className="font-semibold text-neutral-800">Email:</span> <a href={`mailto:${member.email}`} className="hover:text-emerald-700 break-all">{member.email}</a></p>
                    <a href={`https://wa.me/${member.mobile.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-900 font-medium mt-2">
                      <MessageCircle className="w-4 h-4" /> WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications - White Background */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Awards */}
            <div>
              <div className="text-center mb-10">
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-700 mb-4 block">
                  Excellence
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">Awards & Recognition</h2>
                <p className="text-lg text-neutral-600">
                  Celebrating our dedication to quality and innovation.
                </p>
              </div>
              <div className="bg-neutral-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex items-center justify-center h-64 border border-neutral-100">
                <Image
                  src="/about/awards.jpg"
                  alt="Awards"
                  width={400}
                  height={300}
                  className="max-h-full object-contain w-auto h-auto relative"
                />
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="text-center mb-10">
                <span className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-700 mb-4 block">
                  Certified Quality
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-6">Quality Certifications</h2>
                <p className="text-lg text-neutral-600">
                  Rigorous standards validated by international certifications.
                </p>
              </div>
              <div className="bg-neutral-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 p-4 flex items-center justify-center h-64 border border-neutral-100">
                <Image
                  src="/about/certificates.jpg"
                  alt="Certificates"
                  width={400}
                  height={300}
                  className="max-h-full object-contain w-auto h-auto relative"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media - Neutral-50 */}
      <section className="py-24 lg:py-32 bg-neutral-50 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Tea plantation" fill className="object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/premium_authentic_experience.png" alt="Tea ceremony" fill className="object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Tea processing" fill className="object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Tea leaves" fill className="object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900">Follow our journey on social media</h2>
                <p className="text-xl text-neutral-600">
                  Discover the art of Ceylon tea making, behind-the-scenes moments, and the beautiful tea estates of Sri Lanka. Get inspired by our heritage and craftsmanship.
                </p>
              </div>
              <div className="flex items-center gap-5 pt-2">
                <a href="https://www.facebook.com/drrumie" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-900 hover:text-emerald-700 transition-colors ring-1 ring-neutral-200 shadow-sm hover:shadow-md">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/ceylontealand" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-900 hover:text-emerald-700 transition-colors ring-1 ring-neutral-200 shadow-sm hover:shadow-md">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Black Theme (Matching Homepage Footer/Products) */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-neutral-950 text-white">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">Ready to partner with us?</h2>
            <p className="text-xl text-neutral-400 leading-relaxed">
              Want to stock Pure Ceylon Tea in your store? We&apos;re happy to provide you with the highest quality tea. Contact us and we&apos;ll gladly send you a catalog and distributor information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 h-14 bg-white text-neutral-950 hover:bg-neutral-200 px-10 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}