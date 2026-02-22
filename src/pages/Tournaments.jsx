import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, Clock, ExternalLink, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tournaments = () => {
    const upcomingTournaments = [
        {
            id: 1,
            name: "KQ Grand Prix 2025",
            date: "Jan 15-20, 2025",
            venue: "KQ Chess Academy Main Hall",
            time: "09:00 AM",
            format: "Swiss System, 9 Rounds",
            rating: "FIDE Rated & Unrated",
            status: "Registration Open",
            prizePool: "$2,000"
        },
        {
            id: 2,
            name: "Junior Chess Championship",
            date: "Feb 10, 2025",
            venue: "Online (Lichess)",
            time: "10:00 AM",
            format: "Rapid 15+10",
            rating: "Under 16 Category",
            status: "Upcoming",
            prizePool: "Trophies + Certificates"
        },
        {
            id: 3,
            name: "Weekend Rapid Fire",
            date: "Every Saturday",
            venue: "KQ Academy Center",
            time: "04:00 PM",
            format: "Blitz 5+3",
            rating: "Open to All",
            status: "Recurring",
            prizePool: "Medals"
        }
    ];

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
                        <a href="#" className="text-brand-primary hover:text-brand-dark transition-colors flex items-center font-bold mt-4 md:mt-0 group">
                            Full Calendar <ExternalLink className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>

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
                                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${tournament.status === 'Registration Open' ? 'bg-green-100 text-green-700 border border-green-200' :
                                                tournament.status === 'Upcoming' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                                                    'bg-purple-100 text-purple-700 border border-purple-200'
                                                }`}>
                                                {tournament.status}
                                            </span>
                                            <span className="text-gray-500 font-medium text-sm bg-gray-100 px-3 py-1 rounded-full">{tournament.rating}</span>
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors">
                                            {tournament.name}
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
                                                {tournament.venue}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 lg:mt-0 lg:ml-12 flex flex-col sm:flex-row lg:flex-col items-center sm:items-end justify-between lg:justify-center min-w-[160px] gap-4 sm:gap-0 lg:gap-4 border-t lg:border-t-0 lg:border-l border-gray-100 pt-6 lg:pt-0 lg:pl-10">
                                        <div className="text-center sm:text-right">
                                            <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Prize Pool</span>
                                            <span className="text-2xl font-black text-brand-primary">{tournament.prizePool}</span>
                                        </div>
                                        <Link to={`/register/${tournament.id}`} className="w-full sm:w-auto text-brand-primary bg-brand-primary/10 hover:bg-brand-primary hover:text-white px-6 py-2.5 rounded-lg font-bold transition-all border border-brand-primary/20 text-center">
                                            Register Now
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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
