import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Products & Services", href: "/products" },
  { label: "About", href: "/#about" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/contact" },
  { label: "Download Brochure", href: "/brochure/kalmtech-brochure.pdf" },
];

const services = [
  "Computers & Accessories",
  "Networking Devices",
  "Aircon Units (Retail & Wholesale)",
  "Aircon Installation",
  "Aircon Cleaning",
  "Repair & Maintenance",
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col items-center text-center">
            <Link href="/" className="inline-block mb-4">
              <div className="bg-white rounded-xl inline-block">
                <Image
                  src="/kalmlogo.png"
                  alt="Kalmtech Cool Solution"
                  width={500}
                  height={500}
                  className="h-14 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5 text-gray-500">
              Your trusted supplier of IT equipment and aircon solutions. Professional, affordable, and reliable — retail and wholesale.
            </p>
            <a
              href="https://www.facebook.com/kalmtechcoolsolution"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166FE5] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
              <FacebookIcon />
              Follow on Facebook
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="text-sm text-gray-500">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+639177231182" className="text-gray-500 hover:text-gray-900 transition-colors">
                  📞 +63 917 723 1182
                </a>
              </li>
              <li>
                <a
                  href="https://m.me/kalmtechcoolsolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  💬 Facebook Messenger
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=B15+L6+Sacred+Heart+Subdivision+Km.23+Quirino+Highway+Caloocan+City+Philippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  📍 B15 L6 Sacred Heart Subd., Km.23 Quirino Hwy, Caloocan City, 1400
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-900">
          <p>© {new Date().getFullYear()} Kalmtech Cool Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073C24 5.403 18.627 0 12 0S0 5.403 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.254h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}
