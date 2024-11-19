'use client'
import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface FAQItem {
    question: string;
    answer: string;
  }
  
  const faqs: FAQItem[] = [
    {
      question: "Is Juneau Vacation Home: Stunning View + Beach Access pet-friendly?",
      answer: "Yes, pets are welcome at our vacation home. Please let us know in advance if you're bringing a pet."
    },
    {
      question: "What time is check-in at Juneau Vacation Home: Stunning View + Beach Access?",
      answer: "Check-in time is at 3:00 PM. Early check-in may be available upon request."
    },
    {
      question: "What time is check-out at Juneau Vacation Home: Stunning View + Beach Access?",
      answer: "Check-out time is at 11:00 AM. Late check-out may be available upon request."
    },
    {
      question: "Where is Juneau Vacation Home: Stunning View + Beach Access located?",
      answer: "Our vacation home is located in Juneau, Alaska with convenient beach access and stunning views."
    }
  ];

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="grid md:grid-cols-3  p-6">
    <h2 className="text-2xl font-semibold mb-6 text-gray-900">
      Frequently asked questions
    </h2>
    
    <div className="space-y-4 col-span-2">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-gray-200"
        >
          <button
            className="w-full flex items-center justify-between py-4 text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="text-base text-gray-900 pr-8">{faq.question}</span>
            <FaChevronDown
              className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {openIndex === index && (
            <div className="pb-4 text-gray-600">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
  )
}
