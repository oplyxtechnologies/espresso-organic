"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const journeySteps = [
  {
    title: "1. Choose your course",
    description:
      "Pick from our beginner or advanced programs designed to fit your goals and experience.",
  },
  {
    title: "2. Join Our Café workshop",
    description:
      "Step into our real café environment and start learning with live tools and settings.",
  },
  {
    title: "3. Train with real Baristas",
    description:
      "Gain hands-on skills side-by-side with seasoned baristas using organic beans.",
  },
  {
    title: "4. Graduate with confidence",
    description:
      "Leave with practical experience, improved technique, and a strong foundation to grow.",
  },
];

const faqs = [
  {
    question: "Do I need experience to join?",
    answer:
      "No prior experience is required. Our courses are designed for beginners as well as those looking to refresh or refine their barista skills.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes! You’ll receive an official Espresso Organic certificate after completing your course and final assessment.",
  },
  {
    question: "Is the training hands-on?",
    answer:
      "Absolutely. You’ll work directly with real café equipment and ingredients to simulate authentic café environments.",
  },
  {
    question: "Are organic beans really used?",
    answer:
      "Yes — we only use certified organic beans sourced from ethical farms that practice fair trade and sustainability.",
  },
];

export default function JourneyAndFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFF8F2] py-20 px-4 md:px-10 lg:px-20">
      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-reporter text-[#2B1E17] mb-4">
          Your Training Journey
        </h2>
      </div>

      {/* 2 Column Grid on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left: Journey Steps */}
        <div className="space-y-4">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#FFF1E6] border border-[#FFD6C2] p-5 rounded-md"
            >
              <h4 className="font-semibold text-[#2B1E17] mb-1">
                {step.title}
              </h4>
              <p className="text-sm text-[#6F5A48]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Right: FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-md overflow-hidden border border-[#A66417] bg-[#A66417]"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-white font-medium text-left"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div className="bg-white px-6 py-4 text-[#2B1E17] text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
