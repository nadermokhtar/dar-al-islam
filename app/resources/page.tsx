import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Resources() {
  const resources = [
    {
      name: "Islami City",
      url: "https://www.islamicity.com",
      description: "Comprehensive Islamic resources and information"
    },
    {
      name: "Islamic Center of Boston (ICB Wayland)",
      url: "https://www.icbwayland.org",
      description: "Local Islamic center serving the Wayland community"
    },
    {
      name: "Islamic Center of Burlington",
      url: "https://www.icburlington.org",
      description: "Islamic center serving the Burlington area"
    },
    {
      name: "Islamic Center of New England (ICNE)",
      url: "https://www.icne.net",
      description: "Regional Islamic center serving New England"
    },
    {
      name: "Islamic Finder",
      url: "https://www.islamicfinder.org",
      description: "Prayer times and mosque locations worldwide"
    },
    {
      name: "Islamic Multi-Service Organization (IMSO)",
      url: "https://www.imso.us",
      description: "Community services and support organization"
    },
    {
      name: "Islamic Society of Boston (ISB)",
      url: "https://www.isboston.org",
      description: "Major Islamic center serving Greater Boston"
    },
    {
      name: "Worcester Islamic Center",
      url: "https://www.wicenter.org",
      description: "Islamic center serving the Worcester community"
    },
    {
      name: "Muslim American Society - Boston Chapter",
      url: "https://www.masboston.org",
      description: "Local chapter of national Muslim organization"
    },
    {
      name: "Muslim Community Support & Services (MCSS)",
      url: "https://www.muslimsupport.org",
      description: "Support services for the Muslim community"
    }
  ];

  return (
    <div className="container mx-auto px-4">
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
            Resources & Links
          </h1>
          <p className="text-xl mb-8 drop-shadow-lg max-w-2xl mx-auto">
            Connecting you with Islamic resources and community organizations
          </p>
          <Button className="w-40">
            <a href="#resources">View Resources</a>
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          {/* Notice Box */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-12">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">NOTICE</h2>
            <p className="text-sm text-yellow-700">
              Clicking on the links below will take you to an external web site that does not 
              belong to Dar al-Islam of Boston. Dar al-Islam of Boston has no affiliation with 
              any of these external web sites and takes no responsibility for the information, 
              security, content, presentation, or accuracy presented within the chosen site. 
              Also, we make no guarantees about how the information collected on these web 
              sites will be used. For information concerning privacy policies for the individual 
              sites, contact the webmaster for that specific site.
            </p>
          </div>

          {/* Resources Grid */}
          <div id="resources" className="grid gap-6">
            {resources.map((resource, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-brand-green/30 transition-colors"
              >
                <h3 className="text-xl font-semibold text-brand-green mb-2">
                  {resource.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {resource.description}
                </p>
                <Button variant="outline" className="w-full sm:w-auto" asChild>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Visit Website
                    <span className="text-xs">↗</span>
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Additional Help */}
          <div className="mt-12 bg-brand-blue/10 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
            <p className="mb-6">
              If you need help finding specific resources or have questions about any of 
              these organizations, please don't hesitate to contact us.
            </p>
            <Button variant="secondary" className="w-40">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 