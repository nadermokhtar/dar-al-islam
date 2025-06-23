import type { Metadata } from "next";
import { Inter, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import { Providers } from "@/components/providers";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"]
});
const notoNaskhArabic = Noto_Naskh_Arabic({ 
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
  preload: true,
  fallback: ["Arial Unicode MS", "Tahoma"]
});

export const metadata: Metadata = {
  title: {
    default: "Dar al Islam Boston - Islamic Community Center",
    template: "%s | Dar al Islam Boston"
  },
  description: "Dar al Islam Boston is your community center for Islamic education, worship, and spiritual growth. Join us for daily prayers, Jummah services, educational programs, and community events.",
  keywords: ["mosque", "Islamic center", "Boston mosque", "Muslim community", "Jummah prayer", "Islamic education", "Dar al Islam"],
  authors: [{ name: "Dar al Islam Boston" }],
  creator: "Dar al Islam Boston",
  publisher: "Dar al Islam Boston",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Dar al Islam Boston - Islamic Community Center",
    description: "Your community center for Islamic education, worship, and spiritual growth in Boston",
    url: "/",
    siteName: "Dar al Islam Boston",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dar al Islam Boston Mosque"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dar al Islam Boston - Islamic Community Center",
    description: "Your community center for Islamic education, worship, and spiritual growth in Boston",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.className} ${notoNaskhArabic.variable}`}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
