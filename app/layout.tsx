import type { Metadata } from "next";
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
  title: "Umair | Full Stack Developer",
  description: "Full Stack Web Developer specializing in MERN stack",
  keywords: [
    "Umair",
    "Full Stack Developer",
    "MERN Developer",
    "Next.js Developer",
    "MongoDB",
    "React Developer",
  ],
  openGraph: {
    title: "Umair | Full Stack MERN Developer",
    description:
      "Full-Stack MERN Developer specializing in scalable web applications.",
    url: "https://yourdomain.vercel.app",
    siteName: "Umair Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
