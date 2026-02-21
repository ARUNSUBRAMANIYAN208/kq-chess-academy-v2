import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const Team = () => {
    const team = [
        { name: "Mr. M. Vinothkumar", role: "Head Coach & Founder" },
        { name: "Mr. Vignesh", role: "Senior Coach" },
        { name: "Mr. Arun", role: "Senior Coach" },
        { name: "Mr. Vishnu Ram", role: "Senior Coach" },
        { name: "Mr. Abdul Azeem", role: "Senior Coach" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Experts</h2>
                    <p className="text-gray-500">Dedicated coaches led by Mr. M. Vinothkumar.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 p-8 rounded-xl border border-gray-800 hover:border-brand-primary text-center group transition-colors"
                        >
                            <div className="h-24 w-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-brand-primary/30 group-hover:border-brand-primary transition-colors">
                                <User className="h-10 w-10 text-gray-500 group-hover:text-brand-primary transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                            <p className="text-brand-primary text-sm">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
