import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Niraj Paul | Senior iOS Developer & Mobile Architect",
  description:
    "Portfolio of Niraj Paul, Senior iOS Developer with 11+ years experience specializing in Swift, SwiftUI, tvOS, OTT Video Streaming (AVPlayer/HLS), and Scalable Architectures.",
  keywords: [
    "Senior iOS Developer",
    "Swift Developer",
    "SwiftUI Expert",
    "Apple TV Developer",
    "OTT Developer",
    "Mobile Architect",
    "Bangalore iOS Engineer",
    "AVFoundation HLS",
    "SonyLIV Tegna Engineer"
  ],
  authors: [{ name: "Niraj Paul" }],
  openGraph: {
    title: "Niraj Paul | Senior iOS Developer & Mobile Architect",
    description:
      "11+ Years of iOS engineering excellence. Specializing in OTT Streaming, SwiftUI, tvOS, and Scalable Apple Architectures.",
    type: "website",
    locale: "en_US",
    siteName: "Niraj Paul Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niraj Paul | Senior iOS Developer & Mobile Architect",
    description:
      "11+ Years of iOS engineering excellence. Specializing in OTT Streaming, SwiftUI, tvOS, and Scalable Apple Architectures.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="bg-[#09090B] text-white min-h-screen font-sans antialiased selection:bg-[#0A84FF]/30">
        {children}
      </body>
    </html>
  );
}
