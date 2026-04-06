import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const siteUrl = 'https://roshanlalsweets.vercel.app';
const siteName = 'Roshan Lal Ji Sweets & Restaurant';
const siteDescription = 'Authentic North Indian sweets, namkeen & restaurant in Kasganj, UP — made with pure desi ghee and generations of love. Est. before Indian Independence. Son Papdi, Kaju Katli, Mawa Barfi & more.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    'Roshan Lal Ji Sweets', 'sweets Kasganj', 'namkeen Kasganj', 'mithai Kasganj',
    'son papdi', 'kaju katli', 'mawa barfi', 'Indian sweets', 'North Indian sweets',
    'pure ghee sweets', 'sweet shop Kasganj', 'restaurant Kasganj', 'Nadrai Gate Kasganj',
    'Indian mithai online', 'desi ghee sweets', 'festive sweets', 'Diwali sweets',
  ],
  authors: [{ name: 'Roshan Lal Ji Sweets & Restaurant' }],
  creator: 'Roshan Lal Ji Sweets',
  publisher: 'Roshan Lal Ji Sweets',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Roshan Lal Ji Sweets & Restaurant — Authentic Indian Sweets Since Independence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your Google Search Console verification token here once you have it
    // google: 'your-verification-token',
  },
};

// Structured data for local business (shown in Google search results)
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Roshan Lal Ji Sweets & Restaurant',
  description: siteDescription,
  url: siteUrl,
  telephone: ['+91-7055513961', '+91-9456809936'],
  email: 'info@roshanlaljisweets.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Circular Road, Malgodam Crossing, Nadrai Gate',
    addressLocality: 'Kasganj',
    addressRegion: 'Uttar Pradesh',
    postalCode: '207123',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 27.8074,
    longitude: 78.6447,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '07:30',
    closes: '22:30',
  },
  servesCuisine: ['North Indian', 'Indian Sweets', 'Namkeen', 'South Indian'],
  priceRange: '₹',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    reviewCount: '1821',
  },
  sameAs: [
    'https://www.roshanlaljisweets.com',
    'https://www.facebook.com/roshanlalsweets/',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-cream min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
