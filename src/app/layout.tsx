import type { Metadata } from "next";
import { Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display"
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Biomedical Profile",
  description: "Translational biomedical portfolio bridging academic rigor and industry impact.",
  openGraph: {
    title: "Biomedical Profile",
    description: "Translational biomedical portfolio bridging academic rigor and industry impact.",
    images: ["/og-image.png"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Biomedical Profile",
    description: "Translational biomedical portfolio bridging academic rigor and industry impact.",
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${bodyFont.variable}`}>
      <body className="font-sans">
        <div className="min-h-screen bg-transparent">{children}</div>
      </body>
    </html>
  );
}
