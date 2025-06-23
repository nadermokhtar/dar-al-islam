import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jummah Prayer - Dar al Islam Boston",
  description: "Join us for Jummah prayer every Friday. Khutbah at 12:45 PM, Prayer at 1:15 PM. Find prayer times, location details, and important notes.",
  openGraph: {
    title: "Jummah Prayer Times - Dar al Islam Boston",
    description: "Friday prayers every week. Khutbah at 12:45 PM, Prayer at 1:15 PM. All are welcome to join our congregation.",
    url: "/jummah-prayer",
  },
};

export default function JummahPrayer() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Jummah Prayer</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Prayer Times</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Khutbah (Sermon)</span>
              <span>12:45 PM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Jummah Prayer</span>
              <span>1:15 PM</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Location</h2>
          <p className="mb-4">
            Cathedral Church of St. Paul<br />
            138 Tremont Street<br />
            Boston, MA 02111
          </p>
          <Button asChild>
            <Link href="https://www.google.com/maps/dir/?api=1&destination=138+Tremont+Street,+Boston,+MA+02111" target="_blank" rel="noopener noreferrer">
              Get Directions
            </Link>
          </Button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Important Notes</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Please arrive early to find parking and get settled</li>
            <li>Bring your own prayer mat if possible</li>
            <li>Wudu facilities are available</li>
            <li>Separate prayer areas for men and women</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 