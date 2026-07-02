import Image from "next/image";
import Link from "next/link";
import ProductCardWrapper from "./ProductCardWrapper";
import { itCategories, airconCategories } from "@/data/products";

export default function Services() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            Products &amp; Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Everything You Need, In One Place
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            From IT equipment for your home or office to aircon units and professional services — available for retail customers and wholesale buyers.
          </p>
        </div>

        {/* IT Equipment */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-xl">💻</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">IT Equipment</h3>
              <p className="text-sm text-gray-500">Available for retail &amp; wholesale</p>
            </div>
            <span className="ml-auto hidden sm:inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
              Retail &amp; Wholesale
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {itCategories.map((cat) => (
              <ProductCardWrapper key={cat.title} category={cat}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-gray-300 transition-all hover:-translate-y-1 group">
                  <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cat.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{cat.description}</p>
                  <span className="inline-block mt-3 text-sm font-semibold text-gray-600 group-hover:text-gray-700">
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
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center text-xl">❄️</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Aircon Products &amp; Services</h3>
              <p className="text-sm text-gray-500">Units available retail &amp; wholesale · Professional service nationwide</p>
            </div>
            <span className="ml-auto hidden sm:inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full">
              Retail &amp; Wholesale
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {airconCategories.map((cat) => (
              <ProductCardWrapper key={cat.title} category={cat}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-gray-300 transition-all hover:-translate-y-1 group">
                  <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-gray-100">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cat.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{cat.description}</p>
                  <span className="inline-block mt-3 text-sm font-semibold text-gray-600 group-hover:text-gray-700">
                    Browse Products →
                  </span>
                </div>
              </ProductCardWrapper>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md"
          >
            View All Products &amp; Services →
          </Link>
          <a
            href="/brochure/kalmtech-brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold px-6 py-3 rounded-full transition-colors shadow-md border border-gray-300"
          >
            <DownloadIcon />
            Download Brochure
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
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  );
}
