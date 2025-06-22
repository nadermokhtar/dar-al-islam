import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Dar al Islam
          </Link>
          
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/jummah-prayer" className="text-gray-600 hover:text-gray-900">
              Jummah Prayer
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-900">
              Resources
            </Link>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
} 