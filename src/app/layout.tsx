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
  metadataBase: new URL('https://lxmokdr.vercel.app'),
  title: "KOUDRI Lamia - Data Science & AI Engineer | Portfolio",
  description: "Data Science & AI Engineer, Web Developer, and Designer. Passionate about creating impactful digital solutions with React, Next.js, Flutter, and Python.",
  keywords: ["Data Science", "AI Engineer", "Web Developer", "React", "Next.js", "Flutter", "Python", "Machine Learning", "Portfolio"],
  authors: [{ name: "KOUDRI Lamia" }],
  creator: "KOUDRI Lamia",
  openGraph: {
    title: "KOUDRI Lamia - Data Science & AI Engineer",
    description: "Data Science & AI Engineer, Web Developer, and Designer. Passionate about creating impactful digital solutions.",
    url: "https://lxmokdr.vercel.app",
    siteName: "KOUDRI Lamia Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "KOUDRI Lamia - Data Science & AI Engineer",
    description: "Data Science & AI Engineer, Web Developer, and Designer.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
