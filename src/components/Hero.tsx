export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden"
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
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-400 rounded-full opacity-10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
              <span>💻❄️</span> IT Equipment &amp; Aircon Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Your Trusted Supplier of<br />
              <span className="text-cyan-300">IT Equipment &amp; Air Conditioning Solutions</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-lg leading-relaxed">
              Kalmtech Cool Solution is your one-stop shop for IT equipment, aircon units, and professional aircon services — available for retail and wholesale at affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://m.me/kalmtechcoolsolution"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-6 py-3.5 rounded-full hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <MessengerIcon />
                Message Us on Facebook
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3.5 rounded-full hover:bg-white hover:text-blue-700 transition-all"
              >
                View Products &amp; Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" },
                { value: "Retail &amp; Wholesale", label: "We Serve" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-xl font-extrabold text-cyan-300"
                    dangerouslySetInnerHTML={{ __html: stat.value }}
                  />
                  <div
                    className="text-xs text-blue-200 mt-1"
                    dangerouslySetInnerHTML={{ __html: stat.label }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="hidden lg:flex justify-center items-center fade-in delay-300">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-white text-center shadow-2xl w-80">
                <div className="text-5xl mb-4">💻 ❄️</div>
                <h2 className="text-xl font-bold mb-1">Kalmtech Cool Solution</h2>
                <p className="text-blue-200 text-xs mb-6">IT Equipment &amp; Aircon Specialist</p>
                <div className="space-y-2 text-left">
                  {[
                    "✅ Computers & Accessories",
                    "✅ Networking Devices",
                    "✅ Aircon Units (Retail & Wholesale)",
                    "✅ Aircon Installation",
                    "✅ Cleaning & Repair",
                    "✅ Preventive Maintenance",
                  ].map((item) => (
                    <div key={item} className="text-sm text-blue-100">{item}</div>
                  ))}
                </div>
                <a
                  href="https://m.me/kalmtechcoolsolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block bg-cyan-400 hover:bg-cyan-300 text-blue-900 font-bold py-2 rounded-xl transition-colors text-sm"
                >
                  💬 Get a Quote
                </a>
              </div>
              <div className="absolute -inset-4 bg-cyan-400/20 rounded-3xl blur-2xl -z-10" />
            </div>
          </div>

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
