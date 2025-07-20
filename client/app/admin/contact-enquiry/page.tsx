"use client";
import React, { useEffect, useState } from "react";

type Enquiry = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
};

const Page = () => {
  const [mockEnquiries, setMockEnquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      const API_URL =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      try {
        const response = await fetch(`${API_URL}/api/contact`);
        if (!response.ok) {
          throw new Error("Failed to fetch enquiries");
        }
        const data = await response.json();
        setMockEnquiries(data);
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      }
    };

    fetchEnquiries();
  }, []);

  return (
    <div className="min-h-screen text-white p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#E81A02]">
        Contact Enquiries
      </h2>

      <div className="grid gap-4">
        {mockEnquiries.map((enquiry, index) => (
          <div
            key={index}
            className="bg-[#F2EDE7] p-5 rounded-xl shadow-md border-l-4 border-[#E81A02]"
          >
            <h2 className="text-xl font-semibold text-[#E81A02]">
              {enquiry.name}
            </h2>
            <p className="text-sm text-gray-800">
              📧 {enquiry.email} | 📞 {enquiry.phone}
            </p>
            <p className="mt-1 font-semibold text-gray-900">
              Subject: {enquiry.subject}
            </p>
            <p className="mt-2 text-[#000]">{enquiry.message}</p>
            <p className="mt-2 text-xs text-gray-600">
              📅 {new Date(enquiry.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
