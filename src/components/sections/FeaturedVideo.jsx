import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users } from 'lucide-react';

const FeaturedVideo = () => {
    return (
        <section className="py-24 bg-gray-900 border-t-4 border-brand-primary relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-primary via-gray-900 to-gray-900"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/20 border border-brand-primary/30 text-brand-light font-bold text-sm mb-6">
                            <span className="relative flex h-3 w-3 mr-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-light"></span>
                            </span>
                            Featured Coverage
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            KQ Academy in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-primary">News</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            Watch our latest feature on the news channel highlighting our premier chess tournaments, upcoming prodigies, and the competitive environment at KQ Chess Academy.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="bg-gray-800/80 border border-gray-700 px-6 py-3 rounded-xl flex items-center">
                                <Trophy className="w-5 h-5 text-brand-primary mr-3" />
                                <span className="text-gray-300 font-bold">Premier Events</span>
                            </div>
                            <div className="bg-gray-800/80 border border-gray-700 px-6 py-3 rounded-xl flex items-center">
                                <Users className="w-5 h-5 text-brand-primary mr-3" />
                                <span className="text-gray-300 font-bold">Top Players</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(46,125,50,0.2)] border border-gray-800 bg-gray-900 aspect-video group">
                            <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
                            <iframe
                                className="w-full h-full absolute inset-0 z-0"
                                src="https://www.youtube.com/embed/W8TNYfSGC98?autoplay=0&rel=0"
                                title="Tournament News Coverage"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedVideo;
