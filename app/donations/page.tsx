import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Donations() {
  const donationTiers = [
    {
      name: "Single Donation",
      description: "Make a one-time contribution to support our mosque",
      features: [
        "Support mosque maintenance",
        "Help with utility costs",
        "Contribute to community programs",
        "Support Friday prayer services"
      ],
      buttonText: "Donate Once"
    },
    {
      name: "Monthly Donation",
      description: "Become a regular supporter with monthly donations",
      features: [
        "Sustained mosque support",
        "Regular contribution to programs",
        "Help plan long-term initiatives",
        "Consistent community support"
      ],
      buttonText: "Donate Monthly",
      highlighted: true
    },
    {
      name: "Annual Donation",
      description: "Make a yearly contribution to our cause",
      features: [
        "Major project support",
        "Long-term planning assistance",
        "Significant community impact",
        "Yearly renewal option"
      ],
      buttonText: "Donate Yearly"
    }
  ];

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
            Support Our Mosque
          </h1>
          <p className="text-xl mb-8 drop-shadow-lg max-w-2xl mx-auto">
            Your donations help us maintain and grow our services for the community
          </p>
          <Button className="w-40">
            <a href="#donation-options">Donate Now</a>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg mb-12 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
            <p>
              Dar al-Islam Boston operates solely through the generous support of our 
              community. Your donations help us maintain our facilities, provide services, 
              and continue our mission of serving the Muslim community in Boston.
            </p>
          </div>

          {/* Donation Impact */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-brand-green/10 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-brand-green mb-4">Facility Maintenance</h3>
              <p className="text-gray-600">Support the upkeep of our prayer spaces and facilities</p>
            </div>
            
            <div className="bg-brand-blue/10 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-brand-green mb-4">Community Programs</h3>
              <p className="text-gray-600">Enable us to provide educational and social services</p>
            </div>
            
            <div className="bg-brand-green/10 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-brand-green mb-4">Future Growth</h3>
              <p className="text-gray-600">Help us expand our services and reach more people</p>
            </div>
          </div>

          {/* Donation Options */}
          <div id="donation-options" className="grid md:grid-cols-3 gap-8">
            {donationTiers.map((tier, index) => (
              <div 
                key={index}
                className={`
                  rounded-lg p-8 
                  ${tier.highlighted 
                    ? 'border-2 border-brand-green shadow-lg' 
                    : 'border border-gray-200'
                  }
                `}
              >
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-brand-green">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={tier.highlighted ? "default" : "outline"}
                  className="w-full"
                >
                  {tier.buttonText}
                </Button>
              </div>
            ))}
          </div>

          {/* Tax Information */}
          <div className="mt-16 bg-yellow-50 p-6 rounded-lg max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">Tax Deductible Donations</h2>
            <p className="text-sm text-yellow-700">
              Dar al-Islam Boston is a registered 501(c)(3) non-profit organization. 
              All donations are tax-deductible to the extent allowed by law. You will 
              receive a receipt for your donation that can be used for tax purposes.
            </p>
          </div>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need help with your donation or have questions?
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