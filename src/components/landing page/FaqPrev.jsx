import  { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Can I schedule rides in advance?",
    answer:
      "We offer a 30-day return policy for unused products in their original packaging. Shipping fees are non-refundable.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 3–5 business days, while express shipping takes 1–2 business days depending on your location.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to most countries. Shipping fees and delivery times vary based on location.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">FAQS</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm transition"
          >
            <button
              className="flex items-center justify-between w-full p-4 text-left"
              onClick={() => toggle(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {/* {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-blue-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )} */}
              {openIndex === index ? (
                <FaChevronUp/>
              ) : (
                <FaChevronDown/>
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
