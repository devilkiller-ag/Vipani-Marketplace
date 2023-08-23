import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar/navbar';

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vipaṇi - The Modern Online Marketplace',
  description: 'Vipaṇi (विपणि) is a modern online marketplace!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
