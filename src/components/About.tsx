export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Visual card */}
          <div className="relative fade-in-left">
            <div className="relative bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 text-gray-900 shadow-sm overflow-hidden">
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid-sm" width="24" height="24" patternUnits="userSpaceOnUse">
                      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="black" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid-sm)" />
                </svg>
              </div>
              {/* Top accent bar */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-gray-900 rounded-full" />
              <div className="relative">
                <div className="flex justify-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm border-2 border-gray-300">💻</div>
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm border-2 border-gray-300">❄️</div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-1 text-gray-900">Kalmtech Cool Solution</h3>
                <p className="text-gray-500 text-center text-sm mb-8">IT Equipment &amp; Aircon Specialist</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🛒", label: "Retail" },
                    { icon: "📦", label: "Wholesale" },
                    { icon: "🏠", label: "Residential" },
                    { icon: "🏢", label: "Commercial" },
                    { icon: "⚡", label: "Fast Service" },
                    { icon: "💯", label: "Quality Products" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-white rounded-xl p-3 text-center border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition-all"
                    >
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <div className="text-xs font-semibold text-gray-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative blurred circle */}
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gray-300 rounded-full opacity-20 blur-3xl -z-10" />
            <div className="absolute -top-4 -left-4 w-28 h-28 bg-gray-400 rounded-full opacity-10 blur-3xl -z-10" />
          </div>

          {/* Text */}
          <div className="fade-in-right">
            <span className="inline-block bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Your One-Stop Shop for IT &amp; Aircon Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kalmtech Cool Solution is a trusted supplier and service provider based in Caloocan City, Philippines. We specialize in IT equipment — computers, accessories, and networking devices — as well as air conditioning units and professional aircon services.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We serve both individual customers and bulk buyers, offering competitive retail and wholesale pricing. Whether you&apos;re setting up a home office, equipping a business, or need a reliable aircon installed and maintained, we&apos;ve got you covered.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team combines technical know-how with a genuine commitment to customer satisfaction — no overcharging, no shortcuts, just reliable products and honest service.
            </p>

            <div className="grid grid-cols-2 gap-4 fade-in">
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "5+", label: "Years in Business" },
                { value: "Retail & Wholesale", label: "We Cater To" },
                { value: "IT & Aircon", label: "Our Specialties" },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-lg font-extrabold text-gray-700 leading-tight">{stat.value}</div>
                  <div className="text-xs text-gray-600 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
