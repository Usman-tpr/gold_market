import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left py-4 font-bold text-gray-800 focus:outline-none">
        {question}
      </button>
      {isOpen && <p className="pb-4 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQs = () => {
  const faqItems = [
    { question: 'How do I sell my gold?', answer: 'You can create an account and post your gold for sale.' },
    { question: 'Is it safe to sell here?', answer: 'Yes, we ensure secure transactions and safe handling of your items.' },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-yellow-600">Frequently Asked Questions</h2>
        <div className="mt-8 text-left">
          {faqItems.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
