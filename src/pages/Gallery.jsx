import React from 'react';
import { motion } from 'framer-motion';
import chessTournament from '../assets/chess_tournament.png';
import chessClass from '../assets/chess_class.png';
import chessWinner from '../assets/chess_winner.png';
// New Tournament Images
import tournament1 from '../assets/tournament_4.jpeg';
import tournament2 from '../assets/tournament_5.jpeg';
import tournament3 from '../assets/tournament_6.jpeg';
import tournament4 from '../assets/tournament_7.jpeg';
import tournament5 from '../assets/tournament_8.jpeg';
import tournament6 from '../assets/tournament_9.jpeg';
import tournament7 from '../assets/tournament_10.jpeg';
import tournament8 from '../assets/tournament_11.jpeg';
import tournament9 from '../assets/tournament_12.jpeg';
import tournament10 from '../assets/tournament_13.jpeg';

const Gallery = () => {
    // Reusing images to create a fuller gallery grid
    const images = [
        { src: tournament1, title: "" },
        { src: tournament2, title: "" },
        { src: tournament3, title: "" },
        { src: tournament4, title: "" },
        { src: tournament5, title: "" },
        { src: tournament6, title: "" },
        { src: tournament7, title: "" },
        { src: tournament8, title: "" },
        { src: tournament9, title: "" },
        { src: tournament10, title: "" },
        // { src: chessTournament, title: "State Level Tournament 2024" },
        // { src: chessClass, title: "Weekend Advanced Batch" },
        // { src: chessWinner, title: "National Junior Champion" },
        // { src: chessClass, title: "Beginners Classroom" },
        // { src: chessTournament, title: "Inter-School Competition" },
        // { src: chessWinner, title: "Prize Distribution Ceremony" },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-50 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Academy <span className="text-brand-primary">Gallery</span></h1>
                    <p className="text-gray-600 text-lg">Glimpses of our tournaments, classes, and happy students.</p>
                </motion.div>
            </div>

            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="aspect-video bg-gray-50 rounded-xl overflow-hidden border border-gray-800 hover:border-brand-primary transition-all group relative cursor-pointer"
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <span className="text-gray-900 font-medium">{item.title}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
