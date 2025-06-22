import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Dar al Islam Boston",
  description: "Get in touch with Dar al-Islam Boston. Send us a message, find our location at Cathedral Church of St. Paul, or learn about our prayer times.",
  openGraph: {
    title: "Contact Dar al Islam Boston",
    description: "Contact us for questions about prayer times, announcements, donations, or general inquiries. We're here to help.",
    url: "/contact",
  },
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="hero min-h-[50vh] relative flex items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/fakeMosqueImage.webp"
            alt="Mosque Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        <div className="text-center max-w-4xl mx-auto relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl mb-8 drop-shadow-lg max-w-2xl mx-auto">
            We're here to help and answer any questions you might have
          </p>
          <Button className="w-40">
            <a href="#contact-form">Get in Touch</a>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-brand-green/10 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-brand-green mb-4">Location</h2>
              <address className="not-italic space-y-2">
                <p className="font-semibold">Cathedral Church of St. Paul</p>
                <p>138 Tremont Street</p>
                <p>Boston, MA 02111</p>
              </address>
            </div>
            
            <div className="bg-brand-blue/10 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-brand-green mb-4">Prayer Times</h2>
              <div className="space-y-2">
                <p><strong>Juma Prayer:</strong></p>
                <p>Khutbah: 12:45 PM</p>
                <p>Prayer: 1:15 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                >
                  <option value="">Please select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="prayer">Prayer Times</option>
                  <option value="announcement">Submit Announcement</option>
                  <option value="donation">Donations</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <Button className="w-full md:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-yellow-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">Please Note</h2>
            <p className="text-sm text-yellow-700">
              For urgent matters or immediate assistance, we recommend visiting us in person 
              during Juma prayer times. For announcement submissions, please send them well 
              in advance of the intended announcement date.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 