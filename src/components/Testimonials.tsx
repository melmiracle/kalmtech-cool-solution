const testimonials = [
  {
    name: "Maria Santos",
    location: "Quezon City",
    rating: 5,
    text: "Super satisfied with the service! They arrived on time, cleaned my aircon thoroughly, and even explained what was wrong. Very professional and affordable. Highly recommended!",
  },
  {
    name: "John dela Cruz",
    location: "Caloocan",
    rating: 5,
    text: "I messaged them on Facebook and they responded right away. Had my aircon installed the same day. The technicians were polite, fast, and the price was very reasonable.",
  },
  {
    name: "Liza Reyes",
    location: "Marikina",
    rating: 5,
    text: "My aircon was not cooling properly for weeks. Kalmtech diagnosed the issue quickly — it just needed a Freon recharge. Affordable and honest. Will definitely call them again.",
  },
  {
    name: "Rodel Bautista",
    location: "Cainta, Rizal",
    rating: 5,
    text: "Great experience! I booked preventive maintenance for 3 units and they handled everything in one visit. Clean work, no mess left behind. Five stars!",
  },
  {
    name: "Ana Villanueva",
    location: "Pasig City",
    rating: 5,
    text: "Been using Kalmtech for 2 years now for our office aircon maintenance. Always on time, always professional. Best aircon service provider I've worked with.",
  },
  {
    name: "Miguel Torres",
    location: "Mandaluyong",
    rating: 5,
    text: "Very reliable team. They fixed my noisy aircon unit in under an hour. No overcharging, no nonsense. This is the kind of service you want when it's 38°C outside!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
<<<<<<< HEAD
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mb-3">
=======
          <span className="inline-block bg-cyan-100 text-cyan-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
>>>>>>> e61d3ee (general updated changes)
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Hundreds of satisfied clients across Metro Manila and nearby provinces. Here's what they have to say.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-blue-500 text-lg">★</span>
                ))}
              </div>
              {/* Quote */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5 italic">"{t.text}"</p>
              {/* Author */}
              <div className="flex items-center gap-3">
<<<<<<< HEAD
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
=======
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold text-sm">
>>>>>>> e61d3ee (general updated changes)
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
