import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Dar al Islam Boston",
  description: "Learn about Dar al-Islam of Boston, serving the Muslim community in Downtown Boston since 1999. We provide a convenient place for Friday prayers with 300-350 attendees weekly.",
  openGraph: {
    title: "About Dar al Islam Boston",
    description: "Serving the Muslim community in Downtown Boston since 1999. Join us for weekly Juma prayers at Cathedral Church of St. Paul.",
    url: "/about",
  },
};

export default function About() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="hero min-h-[50vh] relative flex items-center justify-center">
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
            About Us
          </h1>
          <p className="text-xl mb-8 drop-shadow-lg max-w-2xl mx-auto">
            Serving the Muslim community in Downtown Boston since 1999
          </p>
          <Button className="w-40">
            <a href="#location">Our Location</a>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p>
              Dar Al-Islam of Boston, Inc. (DIB) helps Muslims fulfill their obligatory Juma'a 
              Prayers ever Friday in Downtown Boston. DIB started organizing the Friday 
              congregation in December 1999. Its sole objective is to provide a convenient 
              prayer place in Downtown Boston to enable Muslims fulfill their obligation.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our History</h2>
            <p>
              Prior to the establishment of this organization, Muslims working in the 
              Downtown Boston area had no place to perform their obligatory Friday prayers 
              in a congregation. On average, 300 - 350 people attend the weekly congregation.
            </p>
          </div>

          <div id="location" className="bg-brand-green/10 p-8 rounded-lg my-12">
            <h2 className="text-3xl font-bold text-brand-green mb-6">Our Location</h2>
            <p className="text-lg mb-4">
              The prayers currently take place in the hall at:
            </p>
            <address className="not-italic text-lg font-semibold mb-6">
              Cathedral Church of St. Paul<br />
              138 Tremont Street<br />
              Boston, MA 02111
            </address>
            <Button variant="outline" className="w-40">
              <a href="/directions">Get Directions</a>
            </Button>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Community</h2>
            <p>
              The organization provides an exclusively religious activity. The organization 
              has no membership and is open to all Muslims. The congregation is also open 
              to the general public for observation.
            </p>
          </div>

          <div className="bg-brand-blue/10 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Support Us</h2>
            <p className="mb-6">
              The organization has no employees. The organization's only source of 
              financial support is voluntary donations from the congregation attendees.
            </p>
            <Button variant="secondary" className="w-40">
              <a href="/donations">Donate Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 