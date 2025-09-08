import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // optional icon

const faqs = [
  {
    question: "What is Kuppismart?",
    answer:
      "Kuppismart is an IoT-based solution designed to make poultry farms smarter, efficient, and cost-effective.",
  },
  {
    question: "How does it help farmers?",
    answer:
      "It helps farmers reduce feed costs, improve bird health, automate monitoring, and increase overall efficiency.",
  },
  {
    question: "Is technical knowledge required?",
    answer:
      "No, the system is designed to be simple and user-friendly, so farmers can operate it without any technical background.",
  },
  {
    question: "Can I integrate it with my existing farm setup?",
    answer:
      "Yes, Kuppismart solutions are flexible and can be integrated with most existing setups.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Frequently Asked Questions
        </h2>
        <p className="text-green-600 font-semibold mt-2 text-xl">FAQs</p>

        {/* FAQ Items */}
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-green-400 rounded-lg shadow-sm text-left"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium text-gray-800 focus:outline-none"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
