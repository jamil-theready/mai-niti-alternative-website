import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mai Niti Alternative | Plant Medicine Healing Retreats in Peru",
  description:
    "Experience transformative ayahuasca ceremonies and plant medicine healing retreats in the Peruvian Amazon. Guided by experienced curanderos in a safe, traditional setting.",
  keywords: [
    "ayahuasca retreat Peru",
    "plant medicine healing",
    "ayahuasca ceremony",
    "healing retreat Amazon",
    "curandero Peru",
    "shamanic healing",
    "Mai Niti Alternative",
    "dieta plant medicine",
    "Pucallpa retreat",
    "spiritual healing Peru",
  ],
  openGraph: {
    title: "Mai Niti Alternative | Plant Medicine Healing Retreats in Peru",
    description:
      "Transformative ayahuasca ceremonies and plant medicine retreats in the Peruvian Amazon. Traditional healing in a safe, guided setting.",
    type: "website",
    locale: "en_US",
    /* TODO: Add OG image URL after deployment */
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
