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
    <section className="mb-[83px] w-full px-4 lg:px-[154px] mx-auto px-4 py-10">
      <h2 className="text-2xl lg:text-5xl font-bold mb-4 lg:mb-[30px] text-center">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div
              key={index}
              className="bg-white p-4 lg:px-[49px] border border-gray-100 rounded-[32px] shadow-sm transition"
            >
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className={`${isOpen ? "mb-[17px] lg:mb-3" : "mb-0"} text-base lg:text-2xl font-bold`}>{faq.question}</span>
                {isOpen ? (
                  <FaChevronUp className="text-gray-800" />
                ) : (
                  <FaChevronDown className="text-gray-900" />
                )}
              </button>
              {isOpen && (
                <div className="text-xs leading-normal lg:text-[18px] text-gray-700 font-normal">{faq.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
