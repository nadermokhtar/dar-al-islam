import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            Dar al Islam Boston
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/khutba-evaluation">Khutba</Link>
            <Link href="/directions">Directions</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/contact">Contact</Link>
            <Button variant="outline" asChild>
              <Link href="/donations">Donate</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
} 