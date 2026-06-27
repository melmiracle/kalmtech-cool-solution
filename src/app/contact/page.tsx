import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Kalmtech Cool Solution",
  description:
    "Get in touch with Kalmtech Cool Solution. Book a service, inquire about products, or ask about wholesale pricing. Located in Caloocan City, Philippines.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Contact Us</span>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
