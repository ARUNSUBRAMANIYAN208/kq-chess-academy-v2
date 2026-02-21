import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
    const students = [
        { name: "GM Adhiban Baskaran", desc: "Former World U-16 Champion", link: "https://en.wikipedia.org/wiki/Adhiban_Baskaran" },
        { name: "GM M. Shyam Sundar", desc: "Internationally acclaimed Grandmaster", link: "https://en.wikipedia.org/wiki/Shyam_Sundar_M." },
        { name: "WGM R. Rakshitta Ravi", desc: "Women Grandmaster Norm Holder", link: "https://en.wikipedia.org/wiki/Rakshitta_Ravi" },
        { name: "M. MahaLakshmi", desc: "WIM, Former World Champion U-18G", link: "https://ratings.fide.com/profile/5001080" },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hall of Fame</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Our academy has produced some of the top players including Grand Masters and International Masters who represent India globally.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {students.map((student, index) => (
                        <motion.a
                            key={index}
                            href={student.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 p-6 rounded-xl border border-gray-800 hover:border-brand-primary transition-all hover:-translate-y-1 block group"
                        >
                            <div className="h-12 w-12 rounded-full bg-brand-primary/10 flex items-center justify-center mb-4 text-brand-primary font-bold text-xl group-hover:bg-brand-primary group-hover:text-gray-900 transition-colors">
                                {student.name.charAt(0)}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">{student.name}</h3>
                            <p className="text-sm text-gray-500">{student.desc}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
