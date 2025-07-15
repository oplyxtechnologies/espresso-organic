"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const API_URL =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.message);
    } catch (err) {
      setStatus("Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-8 rounded-md max-w-2xl mx-auto space-y-6 "
    >
      <h2 className="text-3xl font-reporter text-[#2B1E17] mb-4 text-center">
        Contact Us, we&apos;re here to help!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#E9691D] bg-white placeholder:text-[#8B7766]"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#E9691D] bg-white placeholder:text-[#8B7766]"
        />
        <input
          type="tel"
          name="phone"
          required
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#E9691D] bg-white placeholder:text-[#8B7766]"
        />
        <input
          type="text"
          name="subject"
          required
          placeholder="Subject"
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#E9691D] bg-white placeholder:text-[#8B7766]"
        />
      </div>

      <textarea
        name="message"
        required
        placeholder="Your Message"
        rows={5}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-md border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#E9691D] bg-white placeholder:text-[#8B7766]"
      />

      <button
        type="submit"
        className="bg-[#E32B2B] text-white px-6 py-3 rounded-sm font-semibold hover:bg-[#b42323] transition"
      >
        Send Message
      </button>

      {status && (
        <p className="text-center text-sm text-[#2B1E17] mt-2">{status}</p>
      )}
    </form>
  );
}
