import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Espresso Organic Coffee",
  description:
    "Get in touch with Espresso Organic Coffee for inquiries, locations, and more.",
};

export default function ContactPage() {
  return (
    <main className="w-full text-[color:var(--color-black)] bg-[#FFFAF3]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/courses/foundation.jpg"
          alt="Espresso Contact"
          fill
          quality={100}
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-reporter mb-4">
            Let's Brew a Connection ☕
          </h1>
          <p className="text-white/90 text-base sm:text-lg">
            Questions about our café or training programs? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-reporter mb-6">Get in Touch</h2>
          <p className="mb-6 text-[#3C2E29]">
            Whether you&apos;re interested in joining a barista course or just
            want to talk coffee, we&apos;d love to chat.
          </p>

          {/* Main Office */}
          <div className="space-y-4 mb-10">
            <h3 className="text-xl font-semibold">Head Office – Kathmandu</h3>
            <p className="flex items-center gap-2 text-sm">
              <MapPin size={16} />
              Thapagaun, New Baneshwor, Kathmandu
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Phone size={16} />
              <Link href="tel:+977123456789">+977 9818272352</Link>
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Mail size={16} />
              <Link href="mailto:hello@espressoorganic.com">
                hello@espressoorganic.com
              </Link>
            </p>
          </div>

          {/* Branches */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Our Branches</h3>

            <div className="space-y-1">
              <p className="font-bold">Urlabari, Morang</p>
              <p className="text-sm">
                Madhulalla road opposite of shakya pharmacy
              </p>
              <p className="text-sm flex items-center gap-2">
                <Phone size={16} />{" "}
                <Link href="tel:+9779800000001">+977 9800000001</Link>
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-bold">Itahari, Sunsari</p>
              <p className="text-sm">
                Biratnagar line opposite of chintan chautari
              </p>
              <p className="text-sm flex items-center gap-2 ">
                <Phone size={16} />{" "}
                <Link href="tel:+9779800000002">+977 9800000002</Link>
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
        {/* End Contact Info & Form Section */}
      </section>
      {/* Optional Map */}
      <section className="w-full h-[300px]">
        <iframe
          title="Espresso Organic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1485.391504335579!2d85.333140488364!3d27.69021814216561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bd83cfd63f%3A0xe1e41c8aad8e23f8!2sEspresso%20Organic%20Coffee%20House!5e0!3m2!1sen!2snp!4v1752815300854!5m2!1sen!2snp"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}
