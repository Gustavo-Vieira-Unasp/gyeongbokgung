import "./globals.css";

import { Header } from '../components/header'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Gyeongbokgung',
  description: 'Gyeongbokgung is a project to help people (me) to save their things in a better place, instead of simple use a .txt',
  openGraph: {
    title: 'Gyeongbokgung! The best site to save your favorite things!',
    description: 'Gyeongbokgung is a project to help people (me) to save their things in a better place, instead of simple use a .txt',
    images: ['sadly no images']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
