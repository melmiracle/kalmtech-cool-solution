const reasons = [
  {
    icon: "💰",
    title: "Affordable Retail & Wholesale Pricing",
    description:
      "Competitive prices for individual buyers and bulk orders alike. Get honest quotes upfront with no hidden fees.",
  },
  {
    icon: "📦",
    title: "One-Stop Shop",
    description:
      "IT equipment, aircon units, and professional services all under one roof. Less hassle, more convenience.",
  },
  {
    icon: "👨‍🔧",
    title: "Skilled Technicians",
    description:
      "Our certified team handles all major aircon brands with precision. We show up prepared and get the job done right.",
  },
  {
    icon: "⚡",
    title: "Fast & Reliable Service",
    description:
      "Quick response times and same-day service for most calls. We respect your time and your comfort.",
  },
  {
    icon: "🔒",
    title: "Quality You Can Trust",
    description:
      "We only carry reliable products and back every service we provide. If it's not right, we make it right.",
  },
  {
    icon: "🌟",
    title: "Trusted by Hundreds",
    description:
      "Hundreds of satisfied clients — from homeowners to business owners — across Metro Manila and nearby areas.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 fade-in-up">
          <span className="inline-block bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            Why Kalmtech
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Why Choose Us
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            We&apos;re not just a supplier or a service team — we&apos;re a reliable partner for all your IT and aircon needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all fade-in"
              style={{ animationDelay: `${(i % 3) * 100 + 100}ms` }}
            >
              <div className="text-3xl mb-4">{reason.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
