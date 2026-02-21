import React from 'react';
import { motion } from 'framer-motion';
import Team from '../components/sections/Team';
import Achievements from '../components/sections/Achievements';

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        About <span className="text-brand-primary">KQ Chess Academy</span>
                    </motion.h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        Fostering critical thinking and sportsmanship through the royal game of chess since 1997.
                    </p>
                </div>
            </div>

            {/* Founder & History */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Legacy</h2>
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    KQ Chess Academy was established in 1997, built on foundational excellence in chess coaching.
                                    With 12 branches across Chennai, we are dedicated to nurturing chess talent and fostering
                                    a love for the game from beginner to international levels.
                                </p>
                                <p>
                                    Our academy organizes a variety of chess tournaments throughout the year, bringing together players of all skill levels
                                    from different regions. Whether you're a beginner eager to learn or an experienced player looking to compete,
                                    we provide a platform to sharpen your skills.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-2xl border border-brand-primary/20"
                        >
                            <h3 className="text-2xl font-bold text-brand-primary mb-2">M. Vinothkumar, FIDE Master</h3>
                            <p className="text-gray-500 text-sm mb-4 uppercase tracking-wider">International Chess Coach | Founder</p>

                            <div className="space-y-4 text-gray-600 mb-6">
                                <p className="italic">"Coaching is My Passion"</p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-3 rounded-lg border border-gray-800">
                                        <p className="text-brand-primary font-bold text-lg">2331</p>
                                        <p className="text-xs text-gray-500 uppercase">Peak FIDE Rating</p>
                                    </div>
                                    <div className="bg-white p-3 rounded-lg border border-gray-800">
                                        <p className="text-brand-primary font-bold text-lg">22+ Yrs</p>
                                        <p className="text-xs text-gray-500 uppercase">Experience</p>
                                    </div>
                                </div>
                                <ul className="text-sm space-y-2">
                                    <li className="flex items-start">
                                        <span className="text-brand-primary mr-2">•</span>
                                        International FM Awarded by FIDE (2009)
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-primary mr-2">•</span>
                                        Multiple All India FIDE Rated Tournament Winner
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-brand-primary mr-2">•</span>
                                        Represented Tamil Nadu in National Championships
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {["FM Title", "Expert Trainer", "Tournament Organizer"].map((tag) => (
                                    <span key={tag} className="bg-brand-primary/10 text-brand-primary border border-brand-primary/20 font-bold px-3 py-1 rounded-full text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <Team />
            <Achievements />
        </div>
    );
};

export default About;
