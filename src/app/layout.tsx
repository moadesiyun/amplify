import type { Metadata } from "next";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amplify",
  description: "Next generation of music curation applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">  
       
       <body>
        <div className="bg-purple-300 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <NavBar className="w-full max-w-6xl"/>    
       {children} 
       <Footer />
       </div>
       </body>     
        
       
    </html>
        
  );
}
