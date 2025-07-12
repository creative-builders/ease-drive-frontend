import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Can I schedule rides in advance?",
    answer:
      "Yes! You can book for later — perfect for early morning lectures or weekend trips.",
  },
  {
    question: " Can I book a round trip (to & fro)?",
    answer:
      "Absolutely. You can set a wait time for the return leg and only pay once.",
  },
  {
    question: "How do I pay for my ride?",
    answer:
      "You can pay securely via transfer, debit card, or supported gateways like Paystack. Cash payments are discouraged to ensure safety.",
  },
  {
    question: " What if a driver asks me to pay off the app?",
    answer:
      "Kindly report it immediately. All transactions should happen within the platform to keep everyone protected.",
  },
];

const FaqSection = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFaq = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // close it
        : [...prev, index]               // open it
    );
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-sm transition"
            >
              <button
                className="flex items-center justify-between w-full p-4 text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-bold">{faq.question}</span>
                {isOpen ? (
                  <FaChevronUp className="text-gray-800" />
                ) : (
                  <FaChevronDown className="text-gray-900" />
                )}
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-gray-700 font-normal">{faq.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
