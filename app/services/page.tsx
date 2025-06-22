import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - Dar al Islam Boston",
  description: "Weekly Juma prayer services every Friday at 12:45 PM (Khutbah) and 1:15 PM (Prayer). Learn about our announcements, food services, and community offerings.",
  openGraph: {
    title: "Services - Dar al Islam Boston",
    description: "Join us for weekly Juma prayers every Friday. Fixed schedule: Khutbah at 12:45 PM, Prayer at 1:15 PM. Food available after prayers.",
    url: "/services",
  },
};

export default function Services() {
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
            Our Services
          </h1>
          <p className="text-xl mb-8 drop-shadow-lg max-w-2xl mx-auto">
            Serving the Muslim community with weekly Juma prayers
          </p>
          <Button className="w-40">
            <a href="#juma-details">Prayer Times</a>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          {/* Juma Prayer Details */}
          <div id="juma-details" className="bg-brand-green/10 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-brand-green mb-6">Juma Prayer</h2>
            <div className="space-y-4">
              <p className="text-lg">
                One Juma'a service is held every Friday:
              </p>
              <div className="bg-white/50 p-4 rounded-md">
                <p className="text-lg font-semibold mb-2">Schedule:</p>
                <ul className="list-none pl-0">
                  <li><strong>Khutbah (sermon):</strong> 12:45 PM</li>
                  <li><strong>Prayer:</strong> 1:15 PM</li>
                </ul>
              </div>
              <p className="text-lg font-medium">
                This schedule never changes -- regardless of Daylight Savings Time.
              </p>
            </div>
            <div className="mt-6">
              <Button variant="outline" className="w-40">
                <a href="/directions">Get Directions</a>
              </Button>
            </div>
          </div>

          {/* Announcements Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Announcements</h2>
            <div className="bg-brand-blue/10 p-6 rounded-lg">
              <p className="mb-4">
                Announcements must be approved by board members beforehand. Please use 
                the Contact Us form to share your announcements BEFORE Friday.
              </p>
              <Button variant="secondary" className="w-40">
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>

          {/* Food Services */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Food Services</h2>
            <p>
              A limited number of Halal sandwiches and soda are available for sale 
              after the prayer. The revenue goes as a donation to support the operations.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="text-brand-green">💚</span>
              <p className="text-sm text-gray-600 italic">
                Your purchase helps support our mosque operations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 