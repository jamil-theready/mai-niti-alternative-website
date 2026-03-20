import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mai Niti Alternative | Plant Medicine Healing Retreats in Peru",
  description:
    "Experience transformative plant medicine ceremonies and healing retreats in the Peruvian Amazon. Guided by experienced Shipibo curanderos in a safe, traditional setting.",
  keywords: [
    "plant medicine retreat Peru",
    "plant medicine healing",
    "sacred ceremony Peru",
    "healing retreat Amazon",
    "curandero Peru",
    "traditional healing",
    "Mai Niti Alternative",
    "dieta plant medicine",
    "Pucallpa retreat",
    "spiritual healing Peru",
  ],
  metadataBase: new URL("https://mainiti.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mai Niti Alternative | Plant Medicine Healing Retreats in Peru",
    description:
      "Transformative plant medicine ceremonies and healing retreats in the Peruvian Amazon. Traditional healing in a safe, guided setting.",
    type: "website",
    locale: "en_US",
    siteName: "Mai Niti Alternative",
    url: "https://mainiti.org",
    images: [
      {
        url: "/images/site/pucallpa-yarinacocha.jpg",
        width: 1200,
        height: 630,
        alt: "Mai Niti Alternative healing retreat in the Peruvian Amazon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mai Niti Alternative | Plant Medicine Healing Retreats in Peru",
    description:
      "Transformative plant medicine ceremonies and healing retreats in the Peruvian Amazon.",
    images: ["/images/site/pucallpa-yarinacocha.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mai Niti Alternative",
  url: "https://mainiti.org",
  email: "info@mainiti.org",
  telephone: "+51-961-741-743",
  description:
    "Traditional plant medicine healing retreat center in the Peruvian Amazon, guided by experienced Shipibo curanderos.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pucallpa",
    addressRegion: "Ucayali",
    addressCountry: "PE",
  },
  sameAs: [
    "https://www.facebook.com/mainitialternative",
    "https://www.instagram.com/mainitialternative",
    "https://www.youtube.com/@mainitialternative",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Mai Niti Alternative",
  url: "https://mainiti.org",
  email: "info@mainiti.org",
  telephone: "+51-961-741-743",
  description:
    "Plant medicine healing retreat center offering sacred ceremonies, dieta programs, and healing retreats in the Peruvian Amazon.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Yarinacocha",
    addressLocality: "Pucallpa",
    addressRegion: "Ucayali",
    postalCode: "25000",
    addressCountry: "PE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.271167,
    longitude: -74.641795,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  areaServed: "Worldwide",
  knowsLanguage: ["English", "Spanish", "Shipibo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2a1a13" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;700;900&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/images/hero/sky.webp" />
        <link rel="preload" as="image" href="/images/hero/mountains.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
