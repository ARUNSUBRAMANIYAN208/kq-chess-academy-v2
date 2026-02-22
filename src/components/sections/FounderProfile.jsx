import React from 'react';
import { motion } from 'framer-motion';

const FounderProfile = () => {
    const skills = [
        "International-Level Chess Coaching & Playing",
        "Advanced Opening, Middlegame & Endgame Training",
        "Talent Identification & Long-Term Player Development",
        "Tournament Preparation & Team Leadership",
        "Chess Academy & Branch Management",
        "School Chess Program Implementation",
        "Online & Offline Coaching Methodologies"
    ];

    const achievements = [
        "International FIDE Master (FM), awarded by FIDE – 2009",
        "Peak FIDE ELO Rating: 2331",
        "Captain – Winning Chennai District Team, National Cities Team",
        "Winner – All India FIDE Rated Tournament, Hyderabad (2012)",
        "Winner – All India FIDE Rated Tournament, Aurangabad (2006)",
        "Runner-Up – All India FIDE Rated Tournaments (Gorakhpur, Kochi)",
        "Represented Tamil Nadu in National 'B' & Team Championships"
    ];

    const experience = [
        "Founder & Proprietor – KQ Chess Academy, Chennai (Jan 2003 – Present) with 12 branches",
        "Trained students for district, state, national, and international tournaments",
        "Conducted national-level coaching camps across India",
        "Mentored high-potential players with personalized training plans"
    ];

    const programs = [
        "Chess Club Coach – AMM School, Kotturpuram, Chennai",
        "Chess Trainer – DAV Group of Schools (Gopalapuram, Pallikaranai, Mogappair, Gill Nagar & Pallavaram)",
        "Chess coaching in St. Michael’s Academy Adyar",
        "Chess coaching in Saraswathi Venkatraman School Thiruvanmiyur",
        "Chess Coaching in Children Garden School Mylapore",
        "Conducted District & State Level Tournaments; Organised Intra School Tournaments"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-gray-900 mb-4"
                    >
                        Meet Our Founder
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="h-1 w-24 bg-brand-primary mx-auto rounded-full mb-6"
                    />
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-600 text-lg leading-relaxed"
                    >
                        M. Vinothkumar, an accomplished FIDE Master (FM) with over 22 years of competitive and coaching experience, is the visionary behind KQ Chess Academy.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Intro & Contact */}
                    <div className="lg:col-span-1 border border-brand-primary/20 rounded-2xl p-8 bg-white shadow-sm h-fit">
                        <div className="text-center mb-6">
                            <div className="w-32 h-32 rounded-full border-4 border-brand-primary/20 mx-auto flex items-center justify-center bg-brand-primary/5 text-brand-primary text-4xl mb-4 shadow-sm">
                                ♔
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">M. Vinothkumar</h3>
                            <p className="text-brand-primary font-medium tracking-wide">FIDE MASTER</p>
                            <p className="text-gray-500 text-sm mt-1">Founder & Proprietor</p>
                        </div>
                        <div className="space-y-4 pt-6 border-t border-gray-100 text-sm">
                            <div className="flex items-center text-gray-600">
                                <span className="font-semibold text-gray-900 w-20">Mobile:</span>
                                <span>9444475095 / 8825988779</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <span className="font-semibold text-gray-900 w-20">Email:</span>
                                <a href="mailto:yoursmvin@gmail.com" className="text-brand-primary hover:underline truncate">
                                    yoursmvin@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <span className="font-semibold text-gray-900 w-20">Location:</span>
                                <span>Chennai, India</span>
                            </div>
                            <div className="flex text-gray-600">
                                <span className="font-semibold text-gray-900 w-20 shrink-0">Education:</span>
                                <span>Diploma in Mechanical Engineering, CN Polytechnic</span>
                            </div>
                            <div className="flex text-gray-600 mt-2">
                                <span className="font-semibold text-gray-900 w-20 shrink-0">Languages:</span>
                                <span>English, Tamil, Kannada, Telugu</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Details Tabs/Grids */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Summary */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm"
                        >
                            <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                <span className="bg-brand-primary w-2 h-6 rounded-full mr-3"></span>
                                Professional Summary
                            </h4>
                            <p className="text-gray-600 leading-relaxed">
                                Highly accomplished FIDE Master (FM) with over 22 years of competitive and coaching experience in chess. 
                                Founder and Proprietor of KQ Chess Academy with 12 Branches across Chennai. Specialized in training students 
                                from beginner to National and International Tournament levels, with strong expertise in player development, 
                                institutional chess programs, and academy management.
                            </p>
                        </motion.div>

                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {/* Skills */}
                            <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-brand-primary/30 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl transform translate-x-2 -translate-y-2">♕</div>
                                <h4 className="text-lg font-bold text-gray-900 mb-4">Core Skills & Expertise</h4>
                                <ul className="space-y-3">
                                    {skills.map((skill, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600 text-sm">
                                            <span className="text-brand-primary mr-2 font-bold">•</span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Achievements */}
                            <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-brand-primary/30 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl transform translate-x-2 -translate-y-2">♗</div>
                                <h4 className="text-lg font-bold text-gray-900 mb-4">Chess Achievements</h4>
                                <ul className="space-y-3">
                                    {achievements.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600 text-sm">
                                            <span className="text-brand-primary mr-2 font-bold">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Experience */}
                            <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-brand-primary/30 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl transform translate-x-2 -translate-y-2">♞</div>
                                <h4 className="text-lg font-bold text-gray-900 mb-4">Professional Coaching</h4>
                                <ul className="space-y-3">
                                    {experience.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600 text-sm">
                                            <span className="text-brand-primary mr-2 font-bold">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Institutional Programs */}
                            <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-brand-primary/30 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl transform translate-x-2 -translate-y-2">♖</div>
                                <h4 className="text-lg font-bold text-gray-900 mb-4">Institutional Programs</h4>
                                <ul className="space-y-3">
                                    {programs.map((item, idx) => (
                                        <li key={idx} className="flex items-start text-gray-600 text-sm">
                                            <span className="text-brand-primary mr-2 font-bold">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderProfile;
