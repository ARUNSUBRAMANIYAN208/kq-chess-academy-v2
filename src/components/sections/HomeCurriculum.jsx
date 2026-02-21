import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BookOpen } from 'lucide-react';

const HomeCurriculum = () => {
    const topics = [
        "Piece movements & Value", "Attacking and Capturing", "Check, Checkmate & Stalemate",
        "Tactical Patterns (Fork, Pin, Skewer)", "Opening Principles", "Middle Game Strategy",
        "Endgame Techniques", "Pawn Structures", "Analyzing Games",
        "Tournament Rules", "Calculating Variations", "Positional Play"
    ];

    return (
        <section className="py-20 bg-gray-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Course <span className="text-brand-primary">Highlights</span></h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Our comprehensive curriculum covers everything from the basics to advanced grandmaster techniques.
                            Designed for maximizing potential at every level.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {topics.map((topic, index) => (
                                <div key={index} className="flex items-center space-x-2 text-gray-600">
                                    <CheckCircle2 className="h-5 w-5 text-brand-primary shrink-0" />
                                    <span className="text-sm">{topic}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a href="/programs" className="text-brand-primary font-bold hover:text-gray-900 transition-colors inline-flex items-center">
                                View Full Syllabus <BookOpen className="ml-2 h-4 w-4" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-2xl border border-gray-700"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Our Training Works</h3>
                        <ul className="space-y-4">
                            <li className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-bold text-brand-primary mb-1">Personalized Attention</h4>
                                <p className="text-sm text-gray-500">One-on-one focus to address individual strengths and weaknesses.</p>
                            </li>
                            <li className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-bold text-brand-primary mb-1">Global Reach</h4>
                                <p className="text-sm text-gray-500">Online training for students in USA, UK, Germany, and beyond.</p>
                            </li>
                            <li className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-bold text-brand-primary mb-1">Tournament Exposure</h4>
                                <p className="text-sm text-gray-500">Guidance and support for District, State, and National tournaments.</p>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeCurriculum;
