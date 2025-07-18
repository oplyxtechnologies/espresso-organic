// enquiry/page.tsx
"use client";

import { useState } from "react";

export default function CourseEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const API_URL =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

      const res = await fetch(`${API_URL}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.message);
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto my-16 mt-32 bg-white p-8 rounded-md shadow-md border border-[#E5E5E5] "
    >
      <h2 className="text-3xl font-reporter text-[#2B1E17] mb-6 text-center">
        Course Enquiry
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-[#E5E5E5] bg-white focus:outline-none focus:ring-2 focus:ring-[#E9691D] placeholder:text-[#8B7766]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-[#E5E5E5] bg-white focus:outline-none focus:ring-2 focus:ring-[#E9691D] placeholder:text-[#8B7766]"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-[#E5E5E5] bg-white focus:outline-none focus:ring-2 focus:ring-[#E9691D] placeholder:text-[#8B7766]"
        />
        <select
          name="course"
          required
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-[#E5E5E5] bg-white text-[#2B1E17] focus:outline-none focus:ring-2 focus:ring-[#E9691D]"
        >
          <option value="">Select Course</option>
          <option value="Barista Training">Barista Training</option>
          <option value="Latte Art">Latte Art</option>
          <option value="Coffee Brewing">Coffee Brewing</option>
        </select>
      </div>

      <textarea
        name="message"
        placeholder="Additional Message"
        rows={5}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-md border border-[#E5E5E5] mt-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#E9691D] placeholder:text-[#8B7766]"
      />

      <button
        type="submit"
        className="bg-[#E32B2B] text-white px-6 py-3 mt-6 rounded-sm font-semibold hover:bg-[#b42323] transition"
      >
        Submit Enquiry
      </button>

      {status && (
        <p className="text-center text-sm text-[#2B1E17] mt-4">{status}</p>
      )}
    </form>
  );
}
