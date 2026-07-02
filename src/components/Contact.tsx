"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
          <div className="text-center mb-14">
          <span className="inline-block bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Ready to book a service or have questions? Reach out through any channel below — we respond fast.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <ContactCard icon="📞" title="Phone" content="+63 917 723 1182" href="tel:+639177231182" />
            <ContactCard icon="📘" title="Facebook Page" content="facebook.com/kalmtechcoolsolution" href="https://www.facebook.com/kalmtechcoolsolution" />
            <ContactCard
              icon="📍"
              title="Address"
              content="B15 L6 Sacred Heart Subd., Km.23 Quirino Highway, Caloocan City, 1400"
              href="https://maps.google.com/?q=B15+L6+Sacred+Heart+Subdivision+Km.23+Quirino+Highway+Caloocan+City+Philippines"
            />
            <a
              href="https://maps.google.com/?q=14.765,121.085+(B15+L6+Sacred+Heart+Subd.,+Km.23+Quirino+Highway,+Caloocan+City,+1400+Philippines)"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <iframe
                title="Kalmtech Cool Solution Location"
                width="100%"
                height="208"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=14.765,121.085+(B15+L6+Sacred+Heart+Subd.,+Km.23+Quirino+Highway,+Caloocan+City,+1400+Philippines)&output=embed&z=17"
              />
            </a>
          </div>

          {/* Form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-sm">
                  Thanks for reaching out. We&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-gray-600 text-sm hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Juan dela Cruz"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="09XX XXX XXXX"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your aircon concern or the service you need..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition-colors shadow-md">
                    Send Message
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Or message us directly on{" "}
                  <a
                    href="https://m.me/kalmtechcoolsolution"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:underline font-medium">
                    Facebook Messenger
                  </a>{" "}
                  for a faster response.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  content,
  href,
}: {
  icon: string;
  title: string;
  content: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-300 hover:bg-gray-100 transition-colors">
      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-500 font-medium">{title}</div>
        <div className="text-sm font-semibold text-gray-900">{content}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return inner;
}
