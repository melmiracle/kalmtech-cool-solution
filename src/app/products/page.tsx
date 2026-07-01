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

export default function ProductsPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
              </span>
            </div>
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
            </div>
          </div>

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

        </div>
      </div>
      <Footer />
    </>
  );
}
