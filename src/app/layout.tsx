import type { Metadata } from "next";
import { Inter, Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JBL Live M6 | Premium Wireless Headphones",
  description: "Experience the premium JBL Live M6 wireless headphone experience. Compact size, full-scale sound, precision-engineered for daily immersion.",
  openGraph: {
    title: "JBL Live M6 | Premium Wireless Headphones",
    description: "Experience the premium JBL Live M6 wireless headphone experience. Compact size, full-scale sound, precision-engineered for daily immersion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#050505] text-[#f5f5f5] selection:bg-[#ff4b00]/30 selection:text-white font-sans overflow-x-hidden">{children}</body>
    </html>
  );
}
