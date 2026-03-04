import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutTeaser = () => {
    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-brand-primary font-bold text-lg mb-2 uppercase tracking-wide">About Founder</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Led by Head Coach <br /> Mr. M. Vinothkumar
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Starting the academy in 2008 with the motto "Coaching is My Passion", Mr. M. Vinothkumar has produced many rated players and trained countless students.
                            Our academy is dedicated to nurturing chess talent and fostering a love for the game across India.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We conduct regular classes for kids from Beginner level to Tournament level, providing a platform to sharpen their skills.
                        </p>

                        <Link
                            to="/about"
                            className="text-brand-primary font-semibold hover:text-gray-900 transition-colors flex items-center"
                        >
                            Read More About Us &rarr;
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {/* Stat Cards */}
                        <div className="bg-white p-6 rounded-xl border border-gray-800 hover:border-brand-primary/50 transition-colors">
                            <Trophy className="h-10 w-10 text-brand-primary mb-4" />
                            <h4 className="text-2xl font-bold text-gray-900 mb-1">2007</h4>
                            <p className="text-gray-500 text-sm">Established</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-800 hover:border-brand-primary/50 transition-colors">
                            <Crown className="h-10 w-10 text-brand-primary mb-4" />
                            <h4 className="text-2xl font-bold text-gray-900 mb-1">GMs & IMs</h4>
                            <p className="text-gray-500 text-sm">Produced</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-800 hover:border-brand-primary/50 transition-colors sm:col-span-2">
                            <Users className="h-10 w-10 text-brand-primary mb-4" />
                            <h4 className="text-2xl font-bold text-gray-900 mb-1">12 Branches</h4>
                            <p className="text-gray-500 text-sm">Across Chennai including T.Nagar, Mylapore, Adyar</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutTeaser;
