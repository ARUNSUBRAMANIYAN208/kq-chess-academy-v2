import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import useTournaments from '../../hooks/useTournaments';

const UpcomingEvents = () => {
    const { tournaments, loading } = useTournaments();

    // If you only want to show a few on the home page, you could slice:
    const events = tournaments.slice(0, 2);

    return (
        <section className="py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming <span className="text-brand-primary">Events</span></h2>
                    <p className="text-gray-500">Join our tournaments and special camps.</p>
                </motion.div>

                {loading ? (
                    <div className="flex justify-center py-12">
                        <div className="w-8 h-8 border-4 border-brand-primary/30 border-t-brand-primary rounded-full animate-spin"></div>
                    </div>
                ) : events.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white border rounded-2xl p-12 text-center max-w-2xl mx-auto shadow-sm"
                    >
                        <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Info className="w-8 h-8 text-brand-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No Upcoming Events</h3>
                        <p className="text-gray-500">
                            There are currently no tournaments scheduled. Please check back later or subscribe to our newsletter for updates!
                        </p>
                    </motion.div>
                ) : (
                    <div className={`grid gap-8 ${events.length === 1 ? 'grid-cols-1 max-w-3xl mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}>
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-xl border border-gray-800 flex flex-col md:flex-row gap-6 hover:border-brand-primary transition-colors"
                            >
                                <div className="bg-brand-primary/10 p-4 rounded-lg flex-shrink-0 flex flex-col items-center justify-center text-brand-primary min-w-[100px]">
                                    <Calendar className="h-8 w-8 mb-2" />
                                    <span className="font-bold text-sm text-center">{event.date}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                                    <p className="text-gray-500 text-sm mb-4">{event.description}</p>
                                    <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                                        <div className="flex items-center">
                                            <Clock className="h-4 w-4 mr-1" /> {event.time}
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="h-4 w-4 mr-1" /> <span className="truncate max-w-[200px] sm:max-w-none">{event.location}</span>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <Link
                                            to={`/register/${event.id}`}
                                            className="inline-flex items-center px-5 py-2 rounded-lg bg-brand-primary text-white font-bold text-sm hover:bg-brand-dark transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Register Now <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default UpcomingEvents;
