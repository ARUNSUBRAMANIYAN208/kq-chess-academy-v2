import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import images
import heroBg from '../../assets/hero-bg.png';
import slide2 from '../../assets/tournament_4.jpeg';
import slide3 from '../../assets/tournament_5.jpeg';
import slide4 from '../../assets/tournament_6.jpeg';

const slides = [
    {
        id: 1,
        badge: "Welcome to KQ Chess Academy",
        title: <>Master the Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-primary">Strategy</span></>,
        description: "Train with FIDE instructors and Grandmasters. Join a legacy of champions produced since 2008. We shape the future of chess.",
        image: heroBg,
        ctaPrimary: { text: "Explore Courses", link: "/programs" },
        ctaSecondary: { text: "Join Academy", link: "/contact" }
    },
    {
        id: 2,
        badge: "Join Our Community",
        title: <>Future Champions <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-primary">Start Here</span></>,
        description: "Our tournaments provide the perfect platform for young minds to compete, learn, and excel. Experience the thrill of competitive chess.",
        image: slide2,
        ctaPrimary: { text: "View Tournaments", link: "/tournaments" },
        ctaSecondary: { text: "Our Gallery", link: "/gallery" }
    },
    {
        id: 3,
        badge: "Interactive Training",
        title: <>Learn from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-primary">Best</span></>,
        description: "Advanced curriculum designed to sharpen your tactics and positional understanding. From basic moves to Grandmaster concepts.",
        image: slide3,
        ctaPrimary: { text: "Our Curriculum", link: "/programs" },
        ctaSecondary: { text: "Book a Trial", link: "/contact" }
    },
    {
        id: 4,
        badge: "Celebrate Success",
        title: <>Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-primary">Grandmaster</span></>,
        description: "Over 15 years of producing state and national champions. Start your winning legacy at KQ Chess Academy today.",
        image: slide4,
        ctaPrimary: { text: "Get Started", link: "/contact" },
        ctaSecondary: { text: "Watch Videos", link: "/gallery" }
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [isAutoPlaying]);

    const nextSlide = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setIsAutoPlaying(false);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative min-h-[95vh] lg:min-h-[90vh] flex items-center bg-white overflow-hidden pt-32 pb-44 lg:py-24">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute top-40 -left-40 w-72 h-72 bg-brand-light/5 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoNDYsIDEyNSwgNTAsIDAuMDUpIi8+PC9zdmc+')] opacity-50"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 min-h-[600px] lg:min-h-0"
                    >
                        {/* Left Content Column */}
                        <div className="flex-1 text-center lg:text-left z-10 w-full mb-8 lg:mb-0">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-primary/20 bg-brand-primary/5 text-brand-dark font-bold tracking-wider text-xs uppercase mb-8">
                                    <span className="w-2 h-2 rounded-full bg-brand-primary mr-3 animate-pulse"></span>
                                    {slides[currentSlide].badge}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight px-2 lg:px-0">
                                    {slides[currentSlide].title}
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <p className="text-gray-600 text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium px-4 lg:px-0">
                                    {slides[currentSlide].description}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="w-full flex justify-center lg:justify-start"
                            >
                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 lg:px-0">
                                    <Link
                                        to={slides[currentSlide].ctaPrimary.link}
                                        className="group px-8 py-4 bg-brand-primary text-white font-bold rounded-full shadow-lg shadow-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-full sm:w-auto text-lg"
                                    >
                                        {slides[currentSlide].ctaPrimary.text} <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link
                                        to={slides[currentSlide].ctaSecondary.link}
                                        className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 font-bold rounded-full hover:border-brand-primary hover:text-brand-primary transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto text-center text-lg shadow-sm hover:shadow-md"
                                    >
                                        {slides[currentSlide].ctaSecondary.text}
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Image Column */}
                        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-light rounded-[3rem] transform rotate-3 scale-105 opacity-20 blur-lg"></div>
                                <div className="absolute inset-0 bg-brand-primary rounded-[3rem] transform -rotate-3 transition-transform duration-500 hover:rotate-0"></div>

                                <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl bg-gray-100 aspect-[4/3] lg:aspect-square flex items-center justify-center group">
                                    <motion.div
                                        key={slides[currentSlide].image}
                                        initial={{ scale: 1.2, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 1.2 }}
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                                    ></motion.div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                                </div>

                                {/* Floating Stat */}
                                {/* <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden sm:flex items-center gap-4"
                                >
                                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center">
                                        <span className="font-bold text-brand-primary text-xl">15+</span>
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-bold text-sm">Years of</p>
                                        <p className="text-gray-500 font-medium text-xs uppercase tracking-wider">Excellence</p>
                                    </div>
                                </motion.div> */}
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Dots */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setIsAutoPlaying(false);
                                setCurrentSlide(index);
                            }}
                            className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-10 bg-brand-primary' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
                        />
                    ))}
                </div>

                {/* Arrow Controls (Desktop only) */}
                <div className="hidden lg:block">
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 border border-gray-100 text-gray-800 shadow-lg hover:bg-brand-primary hover:text-white transition-all z-30"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 border border-gray-100 text-gray-800 shadow-lg hover:bg-brand-primary hover:text-white transition-all z-30"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
