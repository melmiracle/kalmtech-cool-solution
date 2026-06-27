import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MessengerButton from "@/components/MessengerButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kalmtech Cool Solution | IT Equipment & Aircon Solutions Philippines",
  description:
    "Your trusted supplier of IT equipment and air conditioning solutions. Computers, networking devices, aircon units, installation, repair, and maintenance — retail and wholesale. Based in Caloocan City, Philippines.",
  keywords:
    "IT equipment Philippines, computers wholesale, networking devices, aircon installation, aircon repair, aircon maintenance, aircon units wholesale, Caloocan, Kalmtech Cool Solution",
  openGraph: {
    title: "Kalmtech Cool Solution | IT Equipment & Aircon Solutions Philippines",
    description:
      "Trusted supplier of IT equipment and aircon solutions — retail and wholesale. Professional aircon services in Caloocan City, Philippines.",
    type: "website",
    url: "https://kalmtechcoolsolution.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Navbar />
        <main>{children}</main>
        <MessengerButton />
      </body>
    </html>
  );
}
