export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-white border-b border-gray-200 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">

        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span>💻❄️</span> IT Equipment &amp; Aircon Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Your Trusted Supplier of
            <br />
            <span className="text-gray-900">IT &amp; Air Conditioning Solutions</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kalmtech Cool Solution is your one-stop shop for IT equipment, aircon units,
            and professional aircon services — available for retail and wholesale.
          </p>
        </div>

        {/* Two product cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* IT Equipment Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 text-gray-900 hover:shadow-lg hover:-translate-y-1 transition-all group fade-in delay-100">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                💻
              </div>
              <div>
                <h3 className="text-lg font-bold">IT Equipment</h3>
                <p className="text-xs text-gray-500">Retail &amp; Wholesale</p>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              {[
                "Computers & Laptops",
                "Peripherals & Accessories",
                "Networking Devices",
              ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-gray-400">▸</span> {item}
                </li>
              ))}
            </ul>
            <a
              href="/products"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white font-semibold px-5 py-3 rounded-full transition-all text-sm"
            >
              Browse IT Products →
            </a>
          </div>

          {/* Aircon Card */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 text-gray-900 hover:shadow-lg hover:-translate-y-1 transition-all group fade-in delay-200">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                ❄️
              </div>
              <div>
                <h3 className="text-lg font-bold">Aircon Products &amp; Services</h3>
                <p className="text-xs text-gray-500">Retail, Wholesale &amp; Service</p>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              {[
                "Aircon Units (Retail & Wholesale)",
                "Installation & Repair",
                "Cleaning & Preventive Maintenance",
              ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="text-gray-400">▸</span> {item}
                </li>
              ))}
            </ul>
            <a
              href="/products#aircon"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white font-semibold px-5 py-3 rounded-full transition-all text-sm"
            >
              Browse Aircon Services →
            </a>
          </div>
        </div>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 fade-in delay-300">
          <a
            href="https://m.me/kalmtechcoolsolution"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#1877F2] text-white font-bold px-6 py-3.5 rounded-full hover:bg-[#166FE5] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessengerIcon />
            Message Us on Facebook
          </a>
          <a
            href="/products"
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 font-semibold px-6 py-3.5 rounded-full hover:bg-gray-900 hover:text-white transition-all"
          >
            View All Products &amp; Services
          </a>
        </div>


      </div>
    </section>
  );
}

function MessengerIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.913 1.454 5.512 3.726 7.21V22l3.405-1.869c.91.252 1.875.387 2.869.387 5.523 0 10-4.145 10-9.259S17.523 2 12 2zm1.043 12.467l-2.548-2.718-4.97 2.718 5.467-5.797 2.607 2.718 4.912-2.718-5.468 5.797z" />
    </svg>
  );
}
