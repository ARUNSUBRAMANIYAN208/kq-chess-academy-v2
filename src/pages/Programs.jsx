import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Globe, Users, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';

const Programs = () => {
    const curriculum = [
        "Dynamic vs Static Advantage", "Exploiting weaknesses", "Knight and pawn ending",
        "Material vs Activity", "Stopping opponent counterplay", "Shutting out a piece",
        "Tempo", "Queens Gambit Declined", "Strong and weak squares",
        "Principle of two weaknesses", "Queen vs 1 pawn", "Understanding where pieces go",
        "How to use pawns", "Counter blows", "Minority attack",
        "Reti opening", "Active moves", "Creating a weakness"
    ];

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 relative overflow-hidden pt-24 pb-16">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary"></div>
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-7xl mx-auto px-4 relative z-10 text-center"
                >
                    <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                        Our Curriculum
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                        World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-primary">Training</span>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                        Expertly designed to cultivate strategic thinking, pattern recognition, and guide you to chess excellence.
                    </p>
                    <div className="mt-10 flex justify-center">
                        <a href="https://coaching.kqchessacademy.com/" target="_blank" rel="noopener noreferrer" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition-all shadow-lg hover:shadow-brand-primary/30 transform hover:-translate-y-1 flex items-center">
                            Access Coaching Portal <ExternalLink className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Modes */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 relative overflow-hidden group hover:border-brand-primary/30 transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
                            <div className="bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                                <Users className="h-8 w-8 text-brand-primary" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Personalized Coaching</h3>
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                At KQ Chess Academy, we believe every student is unique! That's why we provide one-on-one training,
                                ensuring personalized attention and focused guidance to help each student excel in tournaments with confidence.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center mr-3">
                                        <CheckCircle className="h-4 w-4 text-brand-primary" />
                                    </div>
                                    Tailored to your playing style
                                </li>
                                <li className="flex items-center text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center mr-3">
                                        <CheckCircle className="h-4 w-4 text-brand-primary" />
                                    </div>
                                    Critical thinking focus & analysis
                                </li>
                            </ul>
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <a href="https://coaching.kqchessacademy.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-brand-primary font-bold hover:text-brand-dark transition-colors group text-lg">
                                    Go to Coaching Portal <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 relative overflow-hidden group hover:border-brand-primary/30 transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
                            <div className="bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                                <Globe className="h-8 w-8 text-brand-primary" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Expanding Globally</h3>
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                KQ Chess Academy students are getting trained in the US, UK, Germany and other countries.
                                Our online classes connect students globally, providing puzzles and tournament games assigned for improvement.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center mr-3">
                                        <CheckCircle className="h-4 w-4 text-brand-primary" />
                                    </div>
                                    Seamless Interactive Online Classes
                                </li>
                                <li className="flex items-center text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center mr-3">
                                        <CheckCircle className="h-4 w-4 text-brand-primary" />
                                    </div>
                                    International Student Base
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Topics Grid */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-gray-900 mb-4">Mastery Syllabus</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Explore the advanced concepts our students master to become champions.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {curriculum.map((topic, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.03 }}
                                className="bg-gray-50 px-6 py-5 rounded-2xl border border-gray-200/60 hover:border-brand-primary hover:shadow-lg hover:shadow-brand-primary/10 transition-all group flex items-center"
                            >
                                <div className="bg-white p-2 rounded-lg shadow-sm mr-4 group-hover:bg-brand-primary transition-colors duration-300">
                                    <BookOpen className="h-5 w-5 text-brand-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="text-gray-800 font-semibold">{topic}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Programs;
