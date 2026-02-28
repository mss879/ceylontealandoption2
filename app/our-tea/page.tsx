import Image from 'next/image'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, Leaf } from 'lucide-react'

export const metadata = {
  title: "Our Tea Grades | Ceylon Tea Land",
  description: "Explore our extensive collection of premium Ceylon tea grades, from robust black teas to delicate green teas and aromatic blends.",
  keywords: ["Ceylon Tea Grades", "Black Tea", "Green Tea", "Flavored Tea", "Tea Exporter"],
  authors: [{ name: "Ceylon Tea Land" }],
  openGraph: {
    title: "Our Tea Grades | Ceylon Tea Land",
    description: "Explore our extensive collection of premium Ceylon tea grades.",
    url: "https://ceylontealand.com/our-tea",
    siteName: "Ceylon Tea Land",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Our Tea Grades | Ceylon Tea Land",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// Data Structure
const teaCategories = {
  black: [
    { id: 'pekoe', name: 'Pekoe', image: '/products/pekoe.png' },
    { id: 'pekoe1', name: 'Pekoe 1', image: '/products/pekoe-1.png' },
    { id: 'opa', name: 'OPA', image: '/products/OPA.png' },
    { id: 'op1', name: 'OP 1', image: '/products/OP1.png' },
    { id: 'dust', name: 'Dust', image: '/products/DUST.png' },
    { id: 'bopf', name: 'BOPF', image: '/products/BOPF.png' },
    { id: 'bop', name: 'BOP', image: '/products/BOP.png' },
    { id: 'bop1', name: 'BOP 1', image: '/products/BOP1.png' },
    { id: 'bop1a', name: 'BOP 1A', image: '/products/BOP1A.png' },
    { id: 'broken-mix', name: 'Broken Mix', image: '/products/BM-tea.png' },
    { id: 'fgs1', name: 'FGS 1', image: '/products/FGS1.png' },
    { id: 'fbop', name: 'FBOP', image: '/products/FBOP.png' },
    { id: 'fbopf1', name: 'FBOP F1', image: '/products/FBOPF1.png' },
    { id: 'fbopfsp', name: 'FBOP F SP', image: '/products/FBOPFSP.png' },
    { id: 'fbopfexsp1', name: 'FBOP FEX SP1', image: '/products/FBOP FEX SP1.png' },
  ],
  flavoured: [
    { id: 'gt-earl-grey', name: 'GT Earl Grey', image: '/products/earl grey 3.jpg' },
    { id: '1001-nights', name: '1001 Nights', image: '/products/1001 nghts 7.jpg' },
    { id: 'wild-berry', name: 'Wild Berry', image: '/products/very berry 8.jpg' },
    { id: 'strawberry', name: 'Strawberry', image: '/products/strawberry 10.jpg' },
    { id: 'ginger-lemon', name: 'Ginger Lemon', image: '/products/ginger lemon 12.jpg' },
    { id: 'lady-grey', name: 'Lady Grey', image: '/products/lady grey 14.jpg' },
    { id: 'apple', name: 'Apple', image: '/products/apple 15.jpg' },
    { id: 'rose', name: 'Rose', image: '/products/rose 16.jpg' },
    { id: 'masala-mix', name: 'Masala Mix', image: '/products/masala 17.jpg' },
    { id: 'bt-earl-grey', name: 'BT Earl Grey', image: '/products/earl grey bt 18.jpg' },
  ],
  green: [
    { id: 'gun-powder-special', name: 'Gun Powder Special', image: '/products/GP-SPECIAL.png' },
    { id: 'gt-curl', name: 'GT Curl', image: '/products/GREEN-TEA-CURL.png' },
    { id: 'gt-chunmee', name: 'GT Chunmee', image: '/products/Gt-Chumnee.png' },
    { id: 'gtff1', name: 'GTFF1', image: '/products/GTFF1.png' },
    { id: 'gun-powder', name: 'Gun Powder', image: '/products/GUN-POWDER-1.png' },
    { id: 'young-hyson', name: 'Young Hyson', image: '/products/young-hyson.png' },
  ]
}

const footerNavColumns = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Ceylon Tea', href: '/ceylon-tea' },
      { label: 'About Us', href: '/about' },
      { label: 'Events', href: '/events' },
      { label: 'Our Tea', href: '/our-tea' },
      { label: 'Branding', href: '/branding' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Tea Bags', href: '/#tea-bags' },
      { label: 'Bulk Tea', href: '/#bulk-tea' },
      { label: 'Green Tea', href: '/#green-tea' },
    ],
  },
  {
    title: 'Account & Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Contact Details',
    links: [],
  },
];

export default function OurTeaPage() {
  return (
    <main className="flex-1 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-950 pt-48 pb-32 text-white border-b border-[#ead9bc]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#b58b54]/10 blur-[150px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-emerald-900/10 blur-[150px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#b58b54]/20 bg-white/5 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f1d2a4] mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b58b54] animate-pulse"></span>
            Our Collection
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-white mb-8">
            The Finest <br className="hidden md:block" /> <span className="font-serif italic text-[#b58b54]">Ceylon Tea Grades</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
            From the misty hills of Sri Lanka to your cup. Explore our extensive collection of premium tea grades,
            ranging from robust black teas to delicate green teas and aromatic blends.
          </p>
        </div>
      </section>

      {/* Tea Grid Section */}
      <section className="relative px-6 py-32 bg-white">
        {/* Ambient background for section */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute top-40 left-0 h-[500px] w-[500px] rounded-full bg-[#f4f1ea] blur-[150px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-20">
              <div className="overflow-x-auto pb-4 px-4 w-full flex justify-center no-scrollbar">
                <TabsList className="bg-neutral-50 p-1.5 rounded-full border border-[#ead9bc] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] w-max max-w-none">
                  <TabsTrigger
                    value="all"
                    className="rounded-full px-6 md:px-8 py-3.5 text-[12px] md:text-[13px] font-semibold tracking-wide uppercase data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-300 whitespace-nowrap"
                  >
                    All Teas
                  </TabsTrigger>
                  <TabsTrigger
                    value="black"
                    className="rounded-full px-6 md:px-8 py-3.5 text-[12px] md:text-[13px] font-semibold tracking-wide uppercase data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-300 whitespace-nowrap"
                  >
                    Black Tea
                  </TabsTrigger>
                  <TabsTrigger
                    value="flavoured"
                    className="rounded-full px-6 md:px-8 py-3.5 text-[12px] md:text-[13px] font-semibold tracking-wide uppercase data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-300 whitespace-nowrap"
                  >
                    Flavoured Tea
                  </TabsTrigger>
                  <TabsTrigger
                    value="green"
                    className="rounded-full px-6 md:px-8 py-3.5 text-[12px] md:text-[13px] font-semibold tracking-wide uppercase data-[state=active]:bg-[#1a1a1a] data-[state=active]:text-white data-[state=active]:shadow-xl transition-all duration-300 whitespace-nowrap"
                  >
                    Green Tea
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            {['all', 'black', 'flavoured', 'green'].map((categoryKey) => {
              const teasToDisplay = categoryKey === 'all'
                ? Object.values(teaCategories).flat()
                : teaCategories[categoryKey as keyof typeof teaCategories] || [];

              return (
                <TabsContent key={categoryKey} value={categoryKey} className="mt-0 animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10">
                    {teasToDisplay.map((tea) => (
                      <div
                        key={tea.id}
                        className="group relative bg-[#faf9f6] rounded-[2rem] p-7 md:p-8 border border-[#ead9bc] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-15px_rgba(181,139,84,0.15)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d9b482] overflow-hidden"
                      >
                        {/* Hover Ambient Detail */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#f4f1ea]/0 via-[#f4f1ea]/50 to-[#f4f1ea] opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-multiply" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#b58b54]/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="aspect-square relative mb-8 rounded-2xl overflow-hidden flex items-center justify-center bg-transparent drop-shadow-2xl">
                          {/* Placeholder for image if not found */}
                          <div className="absolute inset-0 flex items-center justify-center text-neutral-200">
                            <Leaf className="w-16 h-16 opacity-30" />
                          </div>
                          <Image
                            src={tea.image}
                            alt={tea.name}
                            fill
                            className="object-contain p-2 group-hover:scale-[1.15] transition-transform duration-700 ease-out relative z-10"
                          />
                        </div>

                        <div className="text-center relative z-20">
                          <h3 className="font-serif italic text-[#1a1a1a] text-2xl mb-3 group-hover:text-[#b58b54] transition-colors duration-300">
                            {tea.name}
                          </h3>
                          <div className="w-10 h-0.5 bg-[#ead9bc] mx-auto group-hover:w-16 group-hover:bg-[#b58b54] transition-all duration-500"></div>
                        </div>

                        {/* Corner Accent Line */}
                        <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#b58b54] to-transparent"></div>
                          <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-[#b58b54] to-transparent"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="tea-footer">
        <div className="tea-footer__container">
          <div className="tea-footer__banner">
            <div className="tea-footer__banner-left">
              <div className="tea-footer__cta">
                <p className="tea-footer__cta-heading">
                  Premium Sri Lankan teas, crafted for retailers, specialty cafes, and hospitality brands who expect
                  unforgettable flavour in every cup.
                </p>
                <Link href="/contact" className="tea-footer__cta-button">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="tea-footer__banner-right">
              <Image
                src="/tea_footer_banner.png"
                alt="Pouring Ceylon Tea"
                width={600}
                height={400}
                className="tea-footer__image"
              />
            </div>
          </div>

          <nav className="tea-footer__nav" aria-label="Footer">
            {footerNavColumns.map((column) => (
              <div key={column.title} className="tea-footer__nav-column">
                <p className="tea-footer__badge">{column.title}</p>
                <div className="tea-footer__nav-list">
                  {column.links.map((link) => (
                    <Link key={link.label} href={link.href} className="tea-footer__nav-link">
                      {link.label}
                    </Link>
                  ))}
                </div>
                {column.title === 'Contact Details' && (
                  <div className="tea-footer__contact-info mt-6 text-neutral-400 space-y-3 text-sm leading-relaxed">
                    <p>
                      <strong>Head Office -</strong> No. 51, Fairfield Gardens,<br />
                      Colombo - 8, Sri Lanka.
                    </p>
                    <p>
                      <strong>Hot line -</strong> +94 77 773 4180<br />
                      <strong>Tel -</strong> +94 11 253 1682
                    </p>
                    <p>
                      <strong>E-mail -</strong> info@ceylontealand.com<br />
                      <strong>Fax -</strong> +94 11 254 7909
                    </p>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="tea-footer__info">
            <div className="tea-footer__meta flex-wrap gap-y-2">
              <span>© 2025 Ceylon Tea Land.</span>
              <span className="hidden sm:inline">|</span>
              <a
                href="https://www.arcai.agency"
                target="_blank"
                rel="noopener noreferrer"
                title="ARC AI - Web Design & Digital Solutions"
                className="inline-flex items-center hover:opacity-80 transition-opacity"
              >
                Designed & Developed by{' '}
                <Image
                  src="/arc logo.png"
                  alt="ARC AI - Web Design & Digital Solutions"
                  width={350}
                  height={180}
                  className="tea-footer__meta-logo scale-150 ml-3 origin-left w-auto"
                />
              </a>
            </div>
            <div className="tea-footer__socials">
              <a
                href="https://www.facebook.com/drrumie"
                target="_blank"
                rel="noreferrer"
                className="tea-footer__social-link"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="tea-footer__social-icon"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ceylontealand?utm_medium=copy_link"
                target="_blank"
                rel="noreferrer"
                className="tea-footer__social-link"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="tea-footer__social-icon"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                  <circle cx="12" cy="12" r="3.5"></circle>
                  <circle cx="17.5" cy="6.5" r="1"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}