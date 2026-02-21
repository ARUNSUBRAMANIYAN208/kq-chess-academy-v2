import React from 'react';
import { motion } from 'framer-motion';
import { Globe, UserCheck, Target } from 'lucide-react';

const WhyChooseUs = () => {
    const features = [
        {
            icon: <UserCheck className="h-8 w-8 text-gray-900" />,
            title: "Personalized Coaching",
            desc: "One-on-one training tailored to your unique style and skill level. We believe every student is unique."
        },
        {
            icon: <Globe className="h-8 w-8 text-gray-900" />,
            title: "Global Presence",
            desc: "Students trained in the US, UK, Germany and other countries. Online classes available for students worldwide."
        },
        {
            icon: <Target className="h-8 w-8 text-gray-900" />,
            title: "Tournament Focus",
            desc: "We encourage participation in State and National tournaments to broaden horizons and improve game level."
        }
    ];

    return (
        <section className="py-20 bg-brand-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose KQ Chess Academy?</h2>
                    <p className="text-gray-900/80 max-w-2xl mx-auto">
                        We are committed to promoting chess as a mind sport that encourages discipline, critical thinking, and sportsmanship.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
                        >
                            <div className="h-16 w-16 bg-brand-primary/30 rounded-full flex items-center justify-center mb-6 mx-auto">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
