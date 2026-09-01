import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { NavigationHandler } from './components/NavigationHandler';
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
  metadataBase: new URL("https://kbasiri.com"),
  title: "Khalifeh Basiri - Software Developer",
  description:
    "Portfolio of Khalifeh Basiri - software developer building Python, Azure, machine learning, and full-stack web applications.",
  openGraph: {
    title: "Khalifeh Basiri - Software Developer",
    description:
      "Software developer building Python, Azure, machine learning, and full-stack web applications.",
    url: "/",
    siteName: "Khalifeh Basiri",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Khalifeh Basiri - Software Developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalifeh Basiri - Software Developer",
    description:
      "Software developer building Python, Azure, machine learning, and full-stack web applications.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NavigationHandler />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
