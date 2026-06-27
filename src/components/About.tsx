export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Visual card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 text-white shadow-2xl">
              <div className="text-5xl mb-6 text-center">💻 ❄️</div>
              <h3 className="text-2xl font-bold text-center mb-1">Kalmtech Cool Solution</h3>
              <p className="text-slate-400 text-center text-sm mb-8">IT Equipment &amp; Aircon Specialist</p>
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
                    className="bg-white/10 rounded-xl p-3 text-center border border-white/10"
                  >
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="text-xs font-semibold text-slate-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-300 rounded-full opacity-20 blur-2xl -z-10" />
          </div>

          {/* Text */}
          <div>
            <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mb-3">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5">
              Your One-Stop Shop for IT &amp; Aircon Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Kalmtech Cool Solution is a trusted supplier and service provider based in Caloocan City, Philippines. We specialize in IT equipment — computers, accessories, and networking devices — as well as air conditioning units and professional aircon services.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We serve both individual customers and bulk buyers, offering competitive retail and wholesale pricing. Whether you're setting up a home office, equipping a business, or need a reliable aircon installed and maintained, we've got you covered.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team combines technical know-how with a genuine commitment to customer satisfaction — no overcharging, no shortcuts, just reliable products and honest service.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "5+", label: "Years in Business" },
                { value: "Retail & Wholesale", label: "We Cater To" },
                { value: "IT & Aircon", label: "Our Specialties" },
              ].map((stat) => (
                <div key={stat.label} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <div className="text-lg font-extrabold text-blue-600 leading-tight">{stat.value}</div>
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
