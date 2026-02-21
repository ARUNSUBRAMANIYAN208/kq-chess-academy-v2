import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 border-t-4 border-brand-primary relative overflow-hidden">
            {/* Absolute decorative bg */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-5 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-md bg-brand-primary flex items-center justify-center text-white font-black text-sm">KQ</span>
                            Chess Academy
                        </h3>
                        <p className="text-sm leading-relaxed mb-6">
                            Nurturing chess talent and fostering a love for the game across India since 2008. From beginners to Grandmasters.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/vinothkumar.madhavan.9" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-2.5 rounded-full hover:bg-brand-primary hover:text-white transition-all transform hover:-translate-y-1"><Facebook size={18} /></a>
                            <a href="#" className="bg-gray-800 p-2.5 rounded-full hover:bg-brand-primary hover:text-white transition-all transform hover:-translate-y-1"><Instagram size={18} /></a>
                            <a href="#" className="bg-gray-800 p-2.5 rounded-full hover:bg-brand-primary hover:text-white transition-all transform hover:-translate-y-1"><Twitter size={18} /></a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 text-brand-primary shrink-0" />
                                <span>Kotturpuram, Chennai, Tamil Nadu</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 text-brand-primary shrink-0" />
                                <span>+91 94444 75095</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-3 text-brand-primary shrink-0" />
                                <span>contact@kqchessacademy.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="/" className="hover:text-brand-primary transition-colors flex items-center"><span className="mr-2">›</span> Home</a></li>
                            <li><a href="/about" className="hover:text-brand-primary transition-colors flex items-center"><span className="mr-2">›</span> About Academy</a></li>
                            <li><a href="/programs" className="hover:text-brand-primary transition-colors flex items-center"><span className="mr-2">›</span> Our Programs</a></li>
                            <li><a href="/tournaments" className="hover:text-brand-primary transition-colors flex items-center"><span className="mr-2">›</span> Tournaments</a></li>
                            <li><a href="/contact" className="hover:text-brand-primary transition-colors flex items-center"><span className="mr-2">›</span> Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} KQ Chess Academy. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex items-center text-sm">
                        Designed with <span className="text-red-500 mx-1">❤</span> for Chess
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
