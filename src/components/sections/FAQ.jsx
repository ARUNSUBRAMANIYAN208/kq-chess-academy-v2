import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        {
            question: "What is the best age to start learning chess?",
            answer: "We recommend starting as early as 5 years old. However, it's never too late to learn! Chess improves cognitive skills at any age."
        },
        {
            question: "Do you offer online classes?",
            answer: "Yes! We have a robust online training program with students joining from USA, UK, Germany, and more. We use interactive tools to make learning effective."
        },
        {
            question: "How long does it take to become a rated player?",
            answer: "It varies by individual, but with consistent practice and our structured coaching, many students achieve their first FIDE rating within 1-2 years."
        },
        {
            question: "Are there opportunities to play in tournaments?",
            answer: "Absolutely. We actively encourage and accompany our students to District, State, and National level tournaments regularly."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-20 bg-gray-50 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <HelpCircle className="h-12 w-12 text-brand-primary mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked <span className="text-brand-primary">Questions</span></h2>
                    <p className="text-gray-500">Everything you need to know about joining KQ Chess Academy.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl border border-gray-800 overflow-hidden">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                                {activeIndex === index ? (
                                    <Minus className="h-5 w-5 text-brand-primary shrink-0" />
                                ) : (
                                    <Plus className="h-5 w-5 text-brand-primary shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-800/50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
