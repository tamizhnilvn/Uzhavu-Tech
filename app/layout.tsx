import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Uzhavu Tech | Engineering Higher Farmer Income Through Smart Agriculture",
  description: "Empower every farmer with affordable IoT hardware, AI crop advisories, drone mapping, and market access.",
  keywords: ["Agritech", "Precision Farming", "IoT Agriculture", "AI Crop Advisory", "Smart Irrigation", "Uzhavu Tech"],
  authors: [{ name: "Tamizh Nilavan" }],
  openGraph: {
    title: "Uzhavu Tech | Smart Agritech Startup",
    description: "Engineering Higher Farmer Income Through Smart Agriculture",
    url: "https://uzhavu.tech",
    siteName: "Uzhavu Tech",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-agri-bg dark:bg-[#0A120A] text-agri-text dark:text-gray-100 min-h-screen flex flex-col justify-between">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}