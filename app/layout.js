import { Poppins } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WAButton from '@/components/ui/WAButton';
import ScrollRevealProvider from '@/components/ui/ScrollRevealProvider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300','400','500','600','700','800','900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://albostechnologies.com'),
  title: {
    default: 'Albos Technologies | Software Development Company in Pune, India',
    template: '%s | Albos Technologies',
  },
  description: 'Albos Technologies is a full-stack software engineering company in Pune, India. We build web apps, mobile apps, blockchain solutions, IoT systems & more. 500+ projects, 320+ clients, 18 countries.',
  keywords: [
    'software development company pune',
    'web development company india',
    'mobile app development pune',
    'react next.js development',
    'blockchain development company india',
    'digital marketing seo pune',
    'iot development company',
    'albos technologies',
  ],
  authors: [{ name: 'Albos Technologies', url: 'https://albostechnologies.com' }],
  creator: 'Albos Technologies',
  publisher: 'Albos Technologies',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://albostechnologies.com',
    siteName: 'Albos Technologies',
    title: 'Albos Technologies | Software Development Company in Pune',
    description: 'Full-stack software engineering studio. 500+ projects shipped. React, Next.js, Flutter, Blockchain, IoT.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Albos Technologies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Albos Technologies | Software Development Company',
    description: 'Full-stack software engineering studio. 500+ projects. Pune, India.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://albostechnologies.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Albos Technologies",
              "url": "https://albostechnologies.com",
              "logo": "https://albostechnologies.com/images/albos-technologies-logo.png",
              "description": "Full-stack software engineering company in Pune, India. 500+ projects, 320+ clients.",
              "foundingDate": "2014",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-97666-50411",
                "contactType": "customer service",
                "availableLanguage": ["English", "Hindi", "Marathi"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/albos-technologies",
                "https://twitter.com/albostechnologies"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "320",
                "bestRating": "5"
              }
            })
          }}
        />
        {/* JSON-LD WebSite Schema for Sitelinks Searchbox */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Albos Technologies",
              "url": "https://albostechnologies.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://albostechnologies.com/services?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className="relative min-h-screen flex flex-col bg-[#fafaf8]">
        <Navbar />
        <main className="flex-1">
          <ScrollRevealProvider>
            {children}
          </ScrollRevealProvider>
        </main>
        <Footer />
        <WAButton />
      </body>
    </html>
  );
}
