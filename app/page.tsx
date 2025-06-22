import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Dar al Islam Boston - Your Islamic community center for worship, education, and spiritual growth. Join us for Jummah prayers, educational programs, and community events.",
  openGraph: {
    title: "Dar al Islam Boston - Home",
    description: "Your Islamic community center in Boston. Join us for Jummah prayers every Friday and connect with the Muslim community.",
    url: "/",
  },
  alternates: {
    canonical: "/",
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://daralislam.org/#organization",
        "name": "Dar al Islam Boston",
        "alternateName": "DIB",
        "url": "https://daralislam.org",
        "logo": {
          "@type": "ImageObject",
          "url": "https://daralislam.org/logo.png"
        },
        "sameAs": [
          "https://facebook.com/daralislam",
          "https://twitter.com/daralislam"
        ]
      },
      {
        "@type": "Place",
        "@id": "https://daralislam.org/#place",
        "name": "Dar al Islam Boston",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Main Street",
          "addressLocality": "Boston",
          "addressRegion": "MA",
          "postalCode": "02108",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "42.3601",
          "longitude": "-71.0589"
        }
      },
      {
        "@type": "ReligiousOrganization",
        "name": "Dar al Islam Boston",
        "description": "Islamic community center providing religious services, education, and community programs",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Main Street",
          "addressLocality": "Boston",
          "addressRegion": "MA",
          "postalCode": "02108",
          "addressCountry": "US"
        },
        "telephone": "+1-617-555-0100",
        "url": "https://daralislam.org",
        "openingHours": [
          "Fr 12:30-14:00"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Religious Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Jummah Prayer",
                "description": "Weekly Friday congregational prayer with sermon"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Islamic Education",
                "description": "Educational programs and classes"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4">
      <section className="hero min-h-[70vh] relative flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/fakeMosqueImage.webp"
            alt="Mosque Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Content */}
        <div className="text-center max-w-4xl mx-auto relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Dar al Islam Boston
          </h1>
          <p className="text-2xl mb-4 font-arabic drop-shadow-lg">
            السَّلامُ عَلَيْكُمْ
          </p>
          <p className="text-xl mb-8 drop-shadow-lg">
            Assalaamu 'alaikum. Peace be upon you.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button asChild>
              <Link href="#welcome">Learn More</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="#jummah-prayer">Jummah Prayer Time</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="welcome" className="py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Welcome</h2>

          <p className="mb-6">
            Welcome to the official website of Dar al-Islam of Boston (DIB).
          </p>

          <p className="mb-6">
            We are a non-profit organization dedicated to serving both Muslims
            in the Boston area and the entire Boston community at large. We
            invite you to learn more about us and the truth, beauty,
            righteousness, and peacefulness of the religion of Islam. We hope
            you find this website to be useful and welcome you to contact us
            with any questions that you may have.
          </p>

          <div
            id="jummah-prayer"
            className="bg-brand-green/10 p-6 rounded-lg my-8"
          >
            <h3 className="text-xl font-semibold text-brand-green mb-4">
              Important Information
            </h3>
            <p className="text-lg">
              Our primary service is the weekly Jummah prayer every Friday.
              <br />
              <strong>Sermon (Khutbah):</strong> 12:45 PM
              <br />
              <strong>Prayer:</strong> 1:15 PM
            </p>
            <div className="mt-4 flex gap-4">
              <Button variant="outline">
                <a href="/services">
                  Check Our Services page for more details →
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
