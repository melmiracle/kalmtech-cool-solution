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
      "Keyboards, mice, monitors, webcams, headsets, and more. We carry quality brands suited for everyday use and professional setups.",
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

export default function Services() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mb-3">
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
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-xl">💻</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">IT Equipment</h3>
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
                  <div className="w-10 h-10 bg-blue-50 group-hover:bg-blue-500 rounded-xl flex items-center justify-center text-xl mb-3 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-14">
          <div className="flex-1 border-t border-gray-200" />
          <span className="text-gray-400 text-sm font-medium px-2">also</span>
          <div className="flex-1 border-t border-gray-200" />
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
                  <div className="w-10 h-10 bg-cyan-50 group-hover:bg-cyan-500 rounded-xl flex items-center justify-center text-xl mb-3 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md"
          >
            View All Products &amp; Services →
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
    </section>
  );
}
