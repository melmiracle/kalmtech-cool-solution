export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Visual card */}
          <div className="relative fade-in-left">
            <div className="relative bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
              {/* Header area */}
              <div className="bg-gray-50 border-b border-gray-100 px-6 sm:px-10 py-6 sm:py-8 text-center">
                <div className="flex justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm border border-gray-200">💻</div>
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm border border-gray-200">❄️</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Kalmtech Cool Solution</h3>
                <p className="text-gray-500 text-xs mt-1">IT Equipment &amp; Aircon Specialist</p>
              </div>
              {/* Badges grid */}
              <div className="px-6 sm:px-10 py-6 sm:py-8">
                <div className="grid grid-cols-2 gap-3">
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
                      className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100 hover:border-gray-300 hover:bg-white transition-all"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-semibold text-gray-700">{item.label}</span>
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
