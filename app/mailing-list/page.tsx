import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function MailingList() {
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
            Join Our Mailing List
          </h1>
          <p className="text-xl mb-8 drop-shadow-lg max-w-2xl mx-auto">
            Stay connected with our community and receive important updates
          </p>
          <Button className="w-40">
            <a href="#signup-form">Subscribe Now</a>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg mb-12 text-center">
            <p className="text-lg">
              Subscribe to our mailing list to receive updates about:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8 mb-12">
              <div className="bg-brand-green/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-brand-green mb-4">Community Updates</h3>
                <ul className="text-left text-sm space-y-2">
                  <li>• Weekly Juma prayer announcements</li>
                  <li>• Special event notifications</li>
                  <li>• Community gatherings</li>
                  <li>• Important announcements</li>
                </ul>
              </div>
              
              <div className="bg-brand-blue/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-brand-green mb-4">Islamic Resources</h3>
                <ul className="text-left text-sm space-y-2">
                  <li>• Educational materials</li>
                  <li>• Islamic articles</li>
                  <li>• Prayer time updates</li>
                  <li>• Community resources</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SendFox Form Container */}
          <div id="signup-form" className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-center">Subscribe to Our Newsletter</h2>
            
            {/* SendFox Embed Form */}
            <div className="sendfox-form-container">
              {/* Replace this comment with your SendFox embed code */}
              <div className="text-center text-sm text-gray-600 mt-6">
                <p>By subscribing, you agree to receive email communications from Dar al-Islam Boston.</p>
                <p>You can unsubscribe at any time by clicking the link in the footer of our emails.</p>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-yellow-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">Privacy Notice</h2>
            <p className="text-sm text-yellow-700">
              We respect your privacy and will never share your email address with third parties. 
              Your information will be used exclusively for Dar al-Islam Boston communications. 
              You can unsubscribe at any time using the link provided in every email.
            </p>
          </div>

          {/* Contact Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Having trouble subscribing or need to update your preferences?
            </p>
            <Button variant="outline" className="w-40">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 