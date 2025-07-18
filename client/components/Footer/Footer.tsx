"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#2B1E17] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Espresso Organic</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Rooted in craft and community, we blend premium organic coffee with
            hands-on barista education.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/80">
            {[
              { href: "/training", label: "Barista Training" },
              { href: "/cafe", label: "Visit Our Café" },
              { href: "/about", label: "Our Journey" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <MapPin size={16} />
              <span>Thapagaun, New Baneshwor, Kathmandu</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} />
              <a href="tel:+9779818272352" className="hover:underline">
                +977 9818272352
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} />
              <a
                href="mailto:hello@espressoorganic.com"
                className="hover:underline"
              >
                hello@espressoorganic.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
          <p className="text-sm text-white/80 mb-4">
            Get updates on courses, events, and brews.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              // Optionally handle submission
            }}
          >
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-2 rounded-sm border border-white bg-transparent text-white text-sm placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#E9691D]"
            />
            <button
              type="submit"
              className="bg-[#E9691D] text-white px-4 py-2 text-sm rounded-sm hover:bg-[#c95618] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/50">
        &copy; {year ?? "----"} Espresso Organic. All rights reserved.
      </div>
    </footer>
  );
}
