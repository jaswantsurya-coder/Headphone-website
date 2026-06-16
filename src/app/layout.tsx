import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JBL Tour M6 | Silence, Perfected.",
  description: "Experience the flagship JBL Tour M6 wireless noise-cancelling headphones. Cinematic sound, adaptive ANC, and premium comfort, precision-engineered for focus.",
  openGraph: {
    title: "JBL Tour M6 | Silence, Perfected.",
    description: "Experience the flagship JBL Tour M6 wireless noise-cancelling headphones. Cinematic sound, adaptive ANC, and premium comfort, precision-engineered for focus.",
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
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#050505] text-white/90 selection:bg-[#0050FF]/30 selection:text-white font-sans overflow-x-hidden">{children}</body>
    </html>
  );
}
