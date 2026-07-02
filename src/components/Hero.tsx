export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gray-300 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gray-400 rounded-full opacity-10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-400 rounded-full opacity-5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">

        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <span>💻❄️</span> IT Equipment &amp; Aircon Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Your Trusted Supplier of
            <br />
            <span className="text-gray-200">IT &amp; Air Conditioning Solutions</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Kalmtech Cool Solution is your one-stop shop for IT equipment, aircon units,
            and professional aircon services — available for retail and wholesale.
          </p>
        </div>

        {/* Two product cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* IT Equipment Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 text-white hover:bg-white/20 transition-all group fade-in delay-100">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 bg-gray-500/30 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                💻
              </div>
              <div>
                <h3 className="text-lg font-bold">IT Equipment</h3>
                <p className="text-xs text-gray-200">Retail &amp; Wholesale</p>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              {[
                "Computers & Laptops",
                "Peripherals & Accessories",
                "Networking Devices",
              ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-200">
                  <span className="text-gray-300">▸</span> {item}
                </li>
              ))}
            </ul>
            <a
              href="/products"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-5 py-3 rounded-full transition-all text-sm border border-white/20"
            >
              Browse IT Products →
            </a>
          </div>

          {/* Aircon Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 text-white hover:bg-white/20 transition-all group fade-in delay-200">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 bg-cyan-500/30 rounded-2xl flex items-center justify-center text-2xl shrink-0">
                ❄️
              </div>
              <div>
                <h3 className="text-lg font-bold">Aircon Products &amp; Services</h3>
                <p className="text-xs text-gray-200">Retail, Wholesale &amp; Service</p>
              </div>
            </div>
            <ul className="space-y-2 mb-6">
              {[
                "Aircon Units (Retail & Wholesale)",
                "Installation & Repair",
                "Cleaning & Preventive Maintenance",
              ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-200">
                  <span className="text-gray-200">▸</span> {item}
                </li>
              ))}
            </ul>
            <a
              href="/products#aircon"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-black font-semibold px-5 py-3 rounded-full transition-all text-sm"
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
            className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-6 py-3.5 rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <MessengerIcon />
            Message Us on Facebook
          </a>
          <a
            href="/products"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3.5 rounded-full hover:bg-white hover:text-black transition-all"
          >
            View All Products &amp; Services
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/20 max-w-2xl mx-auto fade-in delay-400">
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
            { value: "Retail &amp; Wholesale", label: "We Serve" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-xl font-extrabold text-gray-200"
                dangerouslySetInnerHTML={{ __html: stat.value }}
              />
              <div
                className="text-xs text-gray-300 mt-1"
                dangerouslySetInnerHTML={{ __html: stat.label }}
              />
            </div>
          ))}
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
