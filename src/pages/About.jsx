import React from 'react';
import { motion } from 'framer-motion';
import Team from '../components/sections/Team';
import Achievements from '../components/sections/Achievements';
import FounderProfile from '../components/sections/FounderProfile';

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
                        Fostering critical thinking and sportsmanship through the royal game of chess since 2007.
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
                                    KQ Chess Academy was established in 2007, built on foundational excellence in chess coaching.
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
                            className="bg-gray-50 flex flex-col items-center justify-center p-8 rounded-2xl border border-brand-primary/20 h-full"
                        >
                            <div className="text-center">
                                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-brand-primary/20 mx-auto flex items-center justify-center bg-brand-primary/5 text-brand-primary text-6xl shadow-sm mb-6">
                                    ♔
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Since 2007</h3>
                                <p className="text-gray-500 text-lg">Creating Champions for over two decades</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <FounderProfile />
            <Team />
            <Achievements />
        </div>
    );
};

export default About;
