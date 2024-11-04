import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Dar al Islam Boston</h3>
            <p className="text-sm text-gray-600">
              Your community center for Islamic education and worship
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/resources">Islamic Resources</Link></li>
              <li><Link href="/khutba-evaluation">Khutba Evaluation</Link></li>
              <li><Link href="/mailing-list">Mailing List</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-sm text-gray-600">
              138 Tremont Street<br />
              Boston, MA 02111<br />
              Email: info@daralislamboston.org<br />
              Phone: (555) 123-4567
            </address>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Dar al Islam Boston. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 