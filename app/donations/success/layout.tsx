import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Donation Success - Dar al Islam Boston",
  description: "Thank you for your donation to Dar al-Islam Boston. Your support helps us continue serving the Muslim community with weekly prayers and programs.",
  openGraph: {
    title: "Donation Successful - Dar al Islam Boston",
    description: "Thank you for supporting Dar al-Islam Boston. Your donation helps us serve the Muslim community.",
    url: "/donations/success",
  },
};

export default function DonationSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}