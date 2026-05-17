import type { Metadata } from "next";
import { Playfair_Display, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { RESTAURANT_DATA } from "@/lib/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${RESTAURANT_DATA.name}`,
    default: `Authentic Tamil Cuisine in T. Nagar, Chennai | ${RESTAURANT_DATA.name}`,
  },
  description: "Authentic Chettinad and Tamil Nadu cuisine in T. Nagar, Chennai. Reserve your table directly. Confirmed within 90 minutes.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: RESTAURANT_DATA.name,
    images: [{
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDy9k_LMRg4e4_Ra3WCypdFInVKcYJzrHhpO-48Z9v6Ij7X4h0rJu2zLTJbdCLzg_JiWu6RmPKcgrQM7BptL2KMFmAwGXwvJi5CPos8cUBJGInOX_U2HSyfTGQusBkWkrO6yNCWJpGeQ8OQ2ZZmO9JlYQ2XU2BfVqRU_oIId83Te-PuD0Iz7tPsb-l8mzeJREpno8IjV3BLkplxHOQIUk6oX2zXbkNxP1WwJhB6rTPIQWnS7Ky4y3iSlV5YkqlB-TpCH8oNlzuz7CU",
      width: 1200,
      height: 630,
      alt: RESTAURANT_DATA.name,
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${spaceMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "Restaurant"],
              name: RESTAURANT_DATA.name,
              servesCuisine: "Indian, Tamil, Chettinad",
              priceRange: RESTAURANT_DATA.priceRange.split(' ')[0],
              openingHours: RESTAURANT_DATA.hours.schema,
              address: {
                "@type": "PostalAddress",
                streetAddress: RESTAURANT_DATA.location.addressLine1,
                addressLocality: "Chennai",
                postalCode: "600017",
                addressCountry: "IN",
              },
              telephone: RESTAURANT_DATA.contact.phone,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: RESTAURANT_DATA.trust.googleRating,
                reviewCount: RESTAURANT_DATA.trust.googleReviewCount.replace('+', '').replace(',', ''),
              },
            }),
          }}
        />
      </head>
      <body className="bg-milk text-sage font-inter antialiased min-h-screen flex flex-col overflow-x-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-milk focus:text-forest focus:ring-2 focus:ring-gold outline-none">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        <MobileStickyBar />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
