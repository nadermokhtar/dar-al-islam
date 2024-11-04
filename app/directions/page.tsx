import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Directions() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto prose prose-lg">
        <h1 className="text-4xl font-bold text-center mb-12">Directions</h1>

        {/* Location Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Location</h2>
          <p className="mb-6">
            Weekly Friday prayers and occasional other events are held in a large room 
            at the basement level of the Cathedral of St. Paul, located at:
          </p>
          <div className="bg-brand-green/10 p-6 rounded-lg mb-8">
            <address className="text-lg font-semibold not-italic">
              138 Tremont Street<br />
              Boston, MA 02111
            </address>
          </div>
          
          <div className="mb-8 rounded-lg overflow-hidden">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/church.jpg"
                alt="Cathedral of St. Paul"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <p className="text-lg">
              <strong>Note:</strong> Please enter from the side door (on the right of the steps), 
              proceed down the long corridor, then turn left and go down the stairs to the 
              basement level.
            </p>
          </div>
        </section>

        {/* Maps & Directions Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Maps & Directions</h2>
          <p className="mb-6">
            This location is in the heart of Boston, and conveniently situated next to 
            the Park Street subway station, across the street from Boston Common.
          </p>
          
          <div className="mb-8 rounded-lg overflow-hidden">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/map.jpg"
                alt="Map location"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>

          <div className="bg-brand-blue/10 p-6 rounded-lg mb-8">
            <p className="mb-4">For detailed driving directions, you may wish to use the following links:</p>
            <div className="flex gap-4">
              <Button variant="secondary" className="w-40">
                <a href="https://www.mapquest.com" target="_blank" rel="noopener noreferrer">Mapquest</a>
              </Button>
              <Button variant="secondary" className="w-40">
                <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">Google Maps</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Subway Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Subway</h2>
          <div className="mb-8 rounded-lg overflow-hidden">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/mbta.jpg"
                alt="MBTA map"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <p>
              If coming via subway on either the Green or Red Lines, exit at the Park Street 
              station, which is at the intersection of the Green Line and the Red Line. 
              The walk from this station is less than a minute.
            </p>
            <p>
              If traveling by the Orange Line, you can exit at the Downtown Crossing station, 
              which is also very close – only a three-minute walk.
            </p>
            <p>
              For more information on the subway system, please visit the{" "}
              <a href="http://www.mbta.com" target="_blank" rel="noopener noreferrer" 
                className="text-brand-green hover:underline">
                MBTA website
              </a>
            </p>
          </div>
        </section>

        {/* Parking Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Parking</h2>
          <p className="mb-6">
            There is very little street parking in the area (if you intend to park in the 
            street, allow yourself extra time to find an available spot!), but there are 
            many parking garages in walking distance:
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-4 list-none pl-0">
              <li>
                <strong>33 Arch Street Garage</strong><br />
                Downtown Crossing shopping district - the entrance is on Hawley Street<br />
                📞 617-204-9268
              </li>
              <li>
                <strong>Lafayette Garage</strong><br />
                1 Avenue De Lafayette, Boston<br />
                📞 617-357-1987<br />
                <a href="http://www.pilgrimparking.com/facilities/lafayette/index.php" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-brand-green hover:underline text-sm">
                  View website →
                </a>
              </li>
              <li>
                <strong>Boston Common Garage</strong><br />
                On Charles Street, across from the Public Garden
              </li>
              <li>
                <strong>One Beacon Garage</strong><br />
                On Cambridge Street
              </li>
              <li>
                <strong>99 Summer Street Garage</strong><br />
                The entrance is on Kingston Street<br />
                📞 617-439-9606
              </li>
              <li>
                <strong>First Federal Parking</strong><br />
                240 Devonshire Street, adjacent to 101 Federal Street
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 