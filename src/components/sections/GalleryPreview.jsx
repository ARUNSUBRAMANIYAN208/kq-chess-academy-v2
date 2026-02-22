import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, ArrowRight } from 'lucide-react';
import chessTournament from '../../assets/tournament_4.jpeg';
import chessClass from '../../assets/tournament_5.jpeg';
import chessWinner from '../../assets/tournament_6.jpeg';

const GalleryPreview = () => {
    return (
        <section className="py-20 bg-white border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Camera className="h-12 w-12 text-brand-primary mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Life at KQ Chess Academy</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto mb-10">
                        Moments of focus, joy, and triumph. See our future grandmasters in action.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <motion.div whileHover={{ y: -10 }} className="rounded-xl overflow-hidden border border-gray-800 shadow-lg">
                        <img src={chessTournament} alt="Tournament" className="w-full h-64 object-cover" />
                    </motion.div>
                    <motion.div whileHover={{ y: -10 }} className="rounded-xl overflow-hidden border border-gray-800 shadow-lg md:-mt-8">
                        <img src={chessWinner} alt="Winner" className="w-full h-64 object-cover" />
                    </motion.div>
                    <motion.div whileHover={{ y: -10 }} className="rounded-xl overflow-hidden border border-gray-800 shadow-lg">
                        <img src={chessClass} alt="Classroom" className="w-full h-64 object-cover" />
                    </motion.div>
                </div>

                <div className="text-center">
                    <Link
                        to="/gallery"
                        className="inline-flex items-center px-8 py-3 bg-transparent border border-brand-primary text-brand-primary font-bold rounded-full hover:bg-brand-primary hover:text-gray-900 transition-all transform hover:scale-105"
                    >
                        View Full Gallery <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default GalleryPreview;
