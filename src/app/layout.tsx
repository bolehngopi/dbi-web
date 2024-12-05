import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MoveTop } from '@/components/MoveTop';

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'DBI | Wujudkan potensi penuh bisnis Anda',
  description: 'Meningkatkan efisiensi dan inovasi melalui integrasi digital yang cerdas. Bersama DBI, wujudkan potensi penuh bisnis Anda.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} antialiased`} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <MoveTop />
      </body>
    </html>
  );
}
