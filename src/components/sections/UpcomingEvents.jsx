import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
    const events = [
        {
            id: 1,
            title: "Golden Jubilee State Level Tournament",
            date: "Aug 03, 2025",
            time: "09:00 AM",
            location: "P.S. Senior Secondary School, Mylapore",
            description: "Tamilnadu State Level Chess Tournament organized for the Golden Jubilee Celebrations. FIDE Rated & Unrated events."
        },
        {
            id: 2,
            title: "SRM IST State Level Tournament",
            date: "Sep 20, 2025",
            time: "09:00 AM",
            location: "SRM IST Ramapuram Campus",
            description: "Tamilnadu State Level Chess Tournament hosted at SRM IST Faculty of Science and Humanities."
        }
    ];

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                                <p className="text-gray-500 text-sm mb-4">{event.description}</p>
                                <div className="flex items-center gap-4 text-xs text-gray-500">
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
            </div>
        </section>
    );
};

export default UpcomingEvents;
