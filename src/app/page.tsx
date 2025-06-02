import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home - Gyeongbokgung',
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

export default function Home(){
  return (
    <div>
      <h1>PAGE HOME</h1>
    </div>
  )
}