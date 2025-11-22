import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Search Doctors',
  description: 'Find the best doctors near you',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

