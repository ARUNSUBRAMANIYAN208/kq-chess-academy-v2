import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, Clock, ExternalLink, Award, Users, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeaturedVideo from '../components/sections/FeaturedVideo';
import useTournaments from '../hooks/useTournaments';

const Tournaments = () => {
    const { tournaments, loading } = useTournaments();

    // Filter tournaments into upcoming and past
    const upcomingTournaments = tournaments.filter(t => t.status !== 'Completed');
    const pastTournaments = tournaments.filter(t => t.status === 'Completed');

    return (
        <div className="bg-white min-h-screen text-gray-900 font-sans">
            {/* Hero Section */}
            <div className="relative py-28 bg-gray-900 overflow-hidden border-b-4 border-brand-primary">
                {/* Background Decor */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-primary via-gray-900 to-gray-900"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-light font-bold text-sm mb-6">
                            <Trophy className="w-4 h-4 mr-2" /> Competitive Play
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white">
                            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-brand-primary">Tournaments</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                            Compete with the best. Experience the thrill of over-the-board and online chess tournaments organized by KQ Chess Academy.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/register/1" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-light transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(46,125,50,0.4)]">
                                Register Now
                            </Link>
                            {/* <button className="bg-gray-800 text-white border border-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-700 transition-all transform hover:-translate-y-1">
                                View Results
                            </button> */}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Upcoming Tournaments List */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                        <div>
                            <h2 className="text-4xl font-black text-gray-900 flex items-center mb-2">
                                Upcoming Events
                            </h2>
                            <p className="text-gray-500 text-lg">Register early to secure your spot.</p>
                        </div>
                    </div>

                    {loading ? (
                        <div className="flex justify-center py-20">
                            <div className="w-12 h-12 border-4 border-brand-primary/30 border-t-brand-primary rounded-full animate-spin"></div>
                        </div>
                    ) : upcomingTournaments.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-3xl p-12 text-center border border-gray-200 shadow-sm max-w-3xl mx-auto"
                        >
                            <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Trophy className="w-10 h-10 text-brand-primary" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">No Tournaments Scheduled</h3>
                            <p className="text-xl text-gray-500 mb-8 max-w-xl mx-auto">
                                We are currently preparing our next season of tournaments. Check back soon or subscribe to our newsletter to receive updates as soon as new events are announced!
                            </p>
                        </motion.div>
                    ) : (
                        <div className="grid gap-6">
                            {upcomingTournaments.map((tournament) => (
                                <motion.div
                                    key={tournament.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-brand-primary/50 transition-all shadow-sm hover:shadow-xl group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-2 h-full bg-brand-primary/10 group-hover:bg-brand-primary transition-colors"></div>
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-3 mb-4">
                                                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${tournament.status === 'Registration Full' ? 'bg-red-100 text-red-700 border border-red-200' :
                                                    tournament.status === 'Registration Open' ? 'bg-green-100 text-green-700 border border-green-200' :
                                                        tournament.status === 'Upcoming' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                                                            'bg-purple-100 text-purple-700 border border-purple-200'
                                                    }`}>
                                                    {tournament.status}
                                                </span>
                                                {tournament.status === 'Registration Open' && tournament.remainingSpots <= 50 && tournament.remainingSpots > 0 && (
                                                    <span className="bg-orange-100 text-orange-700 text-[10px] font-bold px-2 py-1 rounded-md border border-orange-200 animate-pulse">
                                                        Only {tournament.remainingSpots} spots left!
                                                    </span>
                                                )}
                                                <span className="text-gray-500 font-medium text-sm bg-gray-100 px-3 py-1 rounded-full">{tournament.rating}</span>
                                                {tournament.prospectus && (
                                                    <a
                                                        href={tournament.prospectus}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center text-xs font-bold text-brand-primary hover:text-brand-light underline underline-offset-4"
                                                    >
                                                        <FileText className="w-3 h-3 mr-1" /> Prospectus
                                                    </a>
                                                )}
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors">
                                                {tournament.name || tournament.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm text-gray-600 font-medium">
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center mr-3">
                                                        <Calendar className="h-4 w-4 text-brand-primary" />
                                                    </div>
                                                    {tournament.date}
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center mr-3">
                                                        <Clock className="h-4 w-4 text-brand-primary" />
                                                    </div>
                                                    {tournament.time}
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center mr-3">
                                                        <MapPin className="h-4 w-4 text-brand-primary" />
                                                    </div>
                                                    {tournament.venue || tournament.location}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 lg:mt-0 lg:ml-12 flex flex-col sm:flex-row lg:flex-col items-center sm:items-end justify-between lg:justify-center min-w-[160px] gap-4 sm:gap-0 lg:gap-4 border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-10">
                                            <div className="text-center sm:text-right">
                                                <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Prize Pool</span>
                                                <span className="text-2xl font-black text-brand-primary">{tournament.prizePool}</span>
                                            </div>
                                            {tournament.status === 'Registration Full' ? (
                                                <button disabled className="w-full sm:w-auto bg-gray-200 text-gray-500 px-6 py-2.5 rounded-lg font-bold cursor-not-allowed border border-gray-300 shadow-inner">
                                                    Sold Out
                                                </button>
                                            ) : (
                                                <Link to={`/register/${tournament.id}`} className="w-full sm:w-auto text-brand-primary bg-brand-primary/10 hover:bg-brand-primary hover:text-white px-6 py-2.5 rounded-lg font-bold transition-all border border-brand-primary/20 text-center">
                                                    Register Now
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Previous Events Section */}
            {pastTournaments.length > 0 && (
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="mb-12">
                            <h2 className="text-4xl font-black text-gray-900 mb-2">
                                Previous Events
                            </h2>
                            <p className="text-gray-500 text-lg">Relive the highlights and view event details.</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {pastTournaments.map((tournament) => (
                                <motion.div
                                    key={tournament.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gray-200 text-gray-600 border border-gray-300">
                                                {tournament.status}
                                            </span>
                                            <span className="text-gray-400 text-sm font-medium">{tournament.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                                            {tournament.name || tournament.title}
                                        </h3>
                                        <div className="flex items-center text-sm text-gray-500 mb-6">
                                            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                                            {tournament.venue || tournament.location}
                                        </div>
                                    </div>

                                    {tournament.prospectus && (
                                        <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                                            <span className="text-xs text-brand-primary font-bold">Prospectus Available</span>
                                            <a
                                                href={tournament.prospectus}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center text-brand-primary bg-white hover:bg-brand-primary hover:text-white px-4 py-2 rounded-lg font-bold text-sm transition-all border border-brand-primary/20"
                                            >
                                                <FileText className="w-4 h-4 mr-2" /> View Prospectus
                                            </a>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
            {/* Featured Video Section */}
            <FeaturedVideo />

            {/* Why Participate */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Benefits</span>
                        <h2 className="text-4xl font-black text-gray-900 mb-4">Why Compete With Us?</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            Tournaments are the crucible where chess improvement happens.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Award className="h-8 w-8 text-brand-primary" />,
                                title: "FIDE Rated Events",
                                desc: "Get your official rating by playing in our regularly scheduled FIDE rated tournaments under standard controls."
                            },
                            {
                                icon: <Users className="h-8 w-8 text-brand-primary" />,
                                title: "Diverse Community",
                                desc: "Play against a wide variety of styles and strengths, from beginners to titled masters from around the region."
                            },
                            {
                                icon: <Trophy className="h-8 w-8 text-brand-primary" />,
                                title: "Mentorship Review",
                                desc: "Our coaches review top board games and tournament highlights to help students learn from their real-world games."
                            }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-gray-50 p-8 rounded-3xl border border-gray-200 hover:border-brand-primary/50 transition-all duration-300 group shadow-sm hover:shadow-xl"
                            >
                                <div className="bg-white inline-flex p-4 rounded-2xl mb-6 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tournaments;
