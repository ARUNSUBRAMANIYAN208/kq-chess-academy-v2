import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        { name: "Manishankar V", role: "Student", text: "Excellent coaching. The systematic approach helps in understanding complex positions easily." },
        { name: "Radhika Murali", role: "Parent", text: "My son has improved significantly under Subramanian sir's guidance. The dedication is commendable." },
        { name: "Subashree Ramesh", role: "Student", text: "Best place to learn chess. The atmosphere is very motivating." },
    ];

    return (
        <section className="py-20 bg-gray-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
                    Student <span className="text-brand-primary">Stories</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-xl border border-gray-800 relative"
                        >
                            <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-primary/20" />
                            <p className="text-gray-600 mb-6 italic relative z-10">"{review.text}"</p>
                            <div>
                                <h4 className="text-gray-900 font-bold">{review.name}</h4>
                                <span className="text-brand-primary text-sm">{review.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
