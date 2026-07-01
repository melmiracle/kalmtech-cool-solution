import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductCardWrapper from "@/components/ProductCardWrapper";
import Footer from "@/components/Footer";
import { itCategories, airconCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Products & Services | Kalmtech Cool Solution",
  description:
    "Browse our IT equipment and air conditioning products and services. Available for retail and wholesale — computers, networking devices, aircon units, installation, repair, and maintenance.",
};

<<<<<<< HEAD
const itProducts = [
  {
    icon: "🖥️",
    title: "Computers & Laptops",
    description:
      "Desktop PCs, laptops, and all-in-ones for home, office, and school use. Available retail and wholesale at competitive prices.",
    image: "/services/computers.jpg",
    imageAlt: "Laptop computer on a desk",
  },
  {
    icon: "🖱️",
    title: "Peripherals & Accessories",
    description:
      "Keyboards, mice, monitors, webcams, headsets, and more. Quality brands for everyday use and professional setups.",
    image: "/services/peripherals.jpg",
    imageAlt: "Keyboard and mouse peripherals",
  },
  {
    icon: "🌐",
    title: "Networking Devices",
    description:
      "Routers, switches, access points, LAN cables, and network accessories for homes, offices, and commercial establishments.",
    image: "/services/networking.jpg",
    imageAlt: "Network router and cables",
  },
];

const airconProducts = [
  {
    icon: "❄️",
    title: "Aircon Units (Retail & Wholesale)",
    description:
      "Split-type, window-type, and inverter aircon units from top brands. Buy single units or in bulk — we offer wholesale pricing for dealers and businesses.",
    image: "/services/aircon-unit.jpg",
    imageAlt: "Air conditioning unit installed on wall",
  },
  {
    icon: "🔧",
    title: "Aircon Installation",
    description:
      "Professional installation of all aircon types. Proper mounting, wiring, and testing to ensure your unit runs at peak performance from day one.",
    image: "/services/aircon-install.jpg",
    imageAlt: "Technician installing air conditioner",
  },
  {
    icon: "🧹",
    title: "Aircon Cleaning",
    description:
      "Deep cleaning of filters, coils, and drain lines to remove dust, mold, and bacteria — improving efficiency and extending your unit's lifespan.",
    image: "/services/aircon-cleaning.jpg",
    imageAlt: "Cleaning air conditioner filter",
  },
  {
    icon: "🛠️",
    title: "Repair & Diagnostics",
    description:
      "Fast and accurate troubleshooting for all aircon problems — not cooling, water leaks, noisy compressors, circuit board failures, and more.",
    image: "/services/aircon-repair.jpg",
    imageAlt: "Technician repairing appliance",
  },
  {
    icon: "📋",
    title: "Preventive Maintenance",
    description:
      "Scheduled PM service to keep your unit in top shape. Includes inspection, cleaning, and minor adjustments to prevent costly breakdowns.",
    image: "/services/aircon-maintenance.jpg",
    imageAlt: "Maintenance checklist inspection",
  },
  {
    icon: "💧",
    title: "Freon Recharging",
    description:
      "Safe and accurate refrigerant recharging to restore cooling capacity. We check for leaks first to ensure lasting results.",
    image: "/services/aircon-freon.jpg",
    imageAlt: "Refrigerant recharging service",
  },
];

=======
>>>>>>> e61d3ee (general updated changes)
export default function ProductsPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<<<<<<< HEAD
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-blue-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Products &amp; Services</span>
          </div>

          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mb-3">
              Products &amp; Services
=======
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-cyan-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">Products &amp; Services</span>
        </div>

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            Products &amp; Services
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Everything You Need, In One Place
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            From IT equipment for your home or office to aircon units and professional services — available for retail customers and wholesale buyers.
          </p>
        </div>

        {/* IT Equipment */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-xl">💻</div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">IT Equipment</h2>
              <p className="text-sm text-gray-500">Available for retail &amp; wholesale</p>
            </div>
            <span className="ml-auto hidden sm:inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
              Retail &amp; Wholesale
>>>>>>> e61d3ee (general updated changes)
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Everything You Need, In One Place
            </h1>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              From IT equipment for your home or office to aircon units and professional services — available for retail customers and wholesale buyers.
            </p>
          </div>
<<<<<<< HEAD

          {/* IT Equipment */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl">💻</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">IT Equipment</h2>
                <p className="text-sm text-gray-500">Available for retail &amp; wholesale</p>
              </div>
              <span className="ml-auto hidden sm:inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                Retail &amp; Wholesale
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {itProducts.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 transition-all hover:-translate-y-1 group"
                >
                  <div className="w-full h-48 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
=======
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {itCategories.map((cat) => (
              <ProductCardWrapper key={cat.title} category={cat}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-indigo-200 transition-all hover:-translate-y-1 group">
                  <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cat.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{cat.description}</p>
                  <span className="inline-block mt-3 text-sm font-semibold text-indigo-600 group-hover:text-indigo-700">
                    Browse Products →
                  </span>
                </div>
              </ProductCardWrapper>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-14">
          <div className="flex-1 border-t border-gray-400" />
          <span className="text-gray-900 text-sm font-medium px-2">also</span>
          <div className="flex-1 border-t border-gray-400" />
        </div>

        {/* Aircon Products & Services */}
        <div id="aircon" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center text-xl">❄️</div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Aircon Products &amp; Services</h2>
              <p className="text-sm text-gray-500">Units available retail &amp; wholesale · Professional service nationwide</p>
            </div>
            <span className="ml-auto hidden sm:inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full">
              Retail &amp; Wholesale
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {airconCategories.map((cat) => (
              <ProductCardWrapper key={cat.title} category={cat}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-cyan-200 transition-all hover:-translate-y-1 group">
                  <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cat.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{cat.description}</p>
                  <span className="inline-block mt-3 text-sm font-semibold text-cyan-600 group-hover:text-cyan-700">
                    Browse Products →
                  </span>
                </div>
              </ProductCardWrapper>
            ))}
>>>>>>> e61d3ee (general updated changes)
          </div>

<<<<<<< HEAD
          {/* Divider */}
          <div className="flex items-center gap-4 mb-14">
            <div className="flex-1 border-t border-gray-200" />
            <span className="text-gray-400 text-sm font-medium px-2">also</span>
            <div className="flex-1 border-t border-gray-200" />
          </div>
=======
        {/* CTA */}
        <div className="text-center mt-14 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://m.me/kalmtechcoolsolution"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md"
          >
            Inquire or Book a Service →
          </a>
          <a
            href="https://m.me/kalmtechcoolsolution"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-3 rounded-full transition-colors shadow-md border border-gray-200"
          >
            Ask About Wholesale Pricing →
          </a>
        </div>
>>>>>>> e61d3ee (general updated changes)

          {/* Aircon Products & Services */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center text-xl">❄️</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Aircon Products &amp; Services</h2>
                <p className="text-sm text-gray-500">Units available retail &amp; wholesale · Professional service nationwide</p>
              </div>
              <span className="ml-auto hidden sm:inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full">
                Retail &amp; Wholesale
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {airconProducts.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 hover:border-cyan-200 transition-all hover:-translate-y-1 group"
                >
                  <div className="w-full h-48 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://m.me/kalmtechcoolsolution"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md"
            >
              Inquire or Book a Service →
            </a>
            <a
              href="https://m.me/kalmtechcoolsolution"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md"
            >
              Ask About Wholesale Pricing →
            </a>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
