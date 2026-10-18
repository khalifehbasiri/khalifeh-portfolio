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
    "Khalifeh Basiri is a software developer in Ottawa, Ontario, building Python and TypeScript applications across desktop software, full-stack web development, and applied AI.",
  openGraph: {
    title: "Khalifeh Basiri - Software Developer",
    description:
      "Ottawa-based software developer building Python and TypeScript applications across desktop software, full-stack web development, and applied AI.",
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
      "Ottawa-based software developer building Python and TypeScript applications across desktop software, full-stack web development, and applied AI.",
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
