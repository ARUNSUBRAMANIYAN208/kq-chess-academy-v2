import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '../../assets/hero-bg.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative min-h-[90vh] flex items-center bg-white overflow-hidden py-20 lg:py-0">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute top-40 -left-40 w-72 h-72 bg-brand-light/5 rounded-full blur-3xl"></div>
                {/* Decorative Grid Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoNDYsIDEyNSwgNTAsIDAuMDUpIi8+PC9zdmc+')] opacity-50"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                {/* Left Content Column */}
                <div className="flex-1 text-center lg:text-left pt-10 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-block lg:block"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-dark font-bold tracking-wider text-xs uppercase mb-8 mt-4">
                            <span className="w-2 h-2 rounded-full bg-brand-primary mr-3 animate-pulse"></span>
                            Welcome to KQ Chess Academy
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
                            Master the Art of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-primary relative inline-block pb-2">
                                Strategy
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-light/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <p className="text-gray-600 text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Train with FIDE instructors and Grandmasters. Join a legacy of champions produced since 2008.
                            We shape the future of chess.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="w-full flex justify-center lg:justify-start"
                    >
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <Link
                                to="/programs"
                                className="group px-8 py-4 bg-brand-primary text-white font-bold rounded-full shadow-lg shadow-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-full sm:w-auto text-lg"
                            >
                                Explore Courses <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 font-bold rounded-full hover:border-brand-primary hover:text-brand-primary transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-center text-lg shadow-sm hover:shadow-md"
                            >
                                Join Academy
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Right Image Column */}
                <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-12 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Decorative background shape for image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-light rounded-[3rem] transform rotate-3 scale-105 opacity-20 blur-lg"></div>
                        <div className="absolute inset-0 bg-brand-primary rounded-[3rem] transform -rotate-3 transition-transform duration-500 hover:rotate-0"></div>

                        {/* the actual image container */}
                        <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-gray-100 aspect-[4/3] lg:aspect-square flex items-center justify-center group">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${heroBg})` }}
                            ></div>
                            {/* Inner subtle gradient to ensure it doesn't look flat */}
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                        </div>

                        {/* Floating elements near image */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                                <span className="font-bold text-brand-primary text-xl">15+</span>
                            </div>
                            <div>
                                <p className="text-gray-900 font-bold text-sm">Years of</p>
                                <p className="text-gray-500 font-medium text-xs uppercase tracking-wider">Excellence</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
