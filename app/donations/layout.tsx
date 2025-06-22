import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Donations - Dar al Islam Boston",
  description: "Support Dar al-Islam Boston with a secure donation. Help us maintain our facilities, support weekly Jummah prayers, and serve the Muslim community.",
  openGraph: {
    title: "Support Dar al Islam Boston",
    description: "Your donation helps us continue serving the Muslim community with weekly prayers and community programs. Secure payments through Stripe.",
    url: "/donations",
  },
};

export default function DonationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}