import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
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
          <p className="text-2xl mb-4 font-arabic drop-shadow-lg">السَّلامُ عَلَيْكُمْ</p>
          <p className="text-xl mb-8 drop-shadow-lg">Assalaamu 'alaikum. Peace be upon you.</p>
          <Button>
            <a href="#welcome">Learn More</a>
          </Button>
        </div>
      </section>

      <section id="welcome" className="py-16">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Welcome</h2>
          
          <p className="mb-6">
            Welcome to the official website of Dar al-Islam of Boston (DIB).
          </p>

          <p className="mb-6">
            We are a non-profit organization dedicated to serving both Muslims in the Boston 
            area and the entire Boston community at large. We invite you to learn more about 
            us and the truth, beauty, righteousness, and peacefulness of the religion of Islam. 
            We hope you find this website to be useful and welcome you to contact us with any 
            questions that you may have.
          </p>

          <div className="bg-brand-green/10 p-6 rounded-lg my-8">
            <h3 className="text-xl font-semibold text-brand-green mb-4">
              Important Information
            </h3>
            <p className="text-lg">
              Our primary service is the weekly Juma prayer every Friday.
              <br />
              <strong>Sermon (Khutbah):</strong> 12:45 PM
              <br />
              <strong>Prayer:</strong> 1:15 PM
            </p>
            <div className="mt-4">
              <Button variant="outline" asChild>
                <a href="/services">Check Our Services page for more details →</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
