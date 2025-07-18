"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactAndLocationSection() {
  return (
    <section
      id="location"
      className="bg-white py-20 px-6 md:px-12 lg:px-20 border-t border-[#F2EDE6]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-reporter text-[#2B1E17] mb-4">
            Visit Us
          </h2>
          <p className="text-[#6F5A48] mb-8">
            We’re open every day, serving up organic brews and fresh bakes in
            the heart of the city.
          </p>

          <div className="space-y-4 text-[#3C2E29] text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1 text-[#E32B2B]" />
              <p>
                Espresso Organic Café
                <br />
                Thapagaun, New Baneshwor, Kathmandu
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#E32B2B]" />
              <p>+977 9818272352</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#E32B2B]" />
              <p>hello@espressoorganic.com</p>
            </div>

            <div className="pt-4">
              <p className="font-semibold text-[#2B1E17] mb-1">Opening Hours</p>
              <p>Mon – Fri: 7:00 AM – 8:00 PM</p>
              <p>Sat – Sun: 8:00 AM – 9:00 PM</p>
            </div>
          </div>
        </motion.div>

        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full h-[360px] rounded-md overflow-hidden shadow-md"
        >
          <iframe
            title="Espresso Organic Café Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485.391504335579!2d85.333140488364!3d27.69021814216561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bd83cfd63f%3A0xe1e41c8aad8e23f8!2sEspresso%20Organic%20Coffee%20House!5e0!3m2!1sen!2snp!4v1752815300854!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
