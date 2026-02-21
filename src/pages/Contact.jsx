import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-gray-50 py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in <span className="text-brand-primary">Touch</span></h1>
                    <p className="text-gray-600 text-lg">Start your chess journey with us today.</p>
                </motion.div>
            </div>

            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Centers</h2>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-800">
                            <h3 className="text-xl font-bold text-brand-primary mb-4">Kotturpuram</h3>
                            <div className="flex items-start text-gray-600 mb-2">
                                <MapPin className="h-5 w-5 mr-3 text-brand-primary shrink-0" />
                                <p>Kotturpuram, Chennai, Tamil Nadu.</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 mt-8">
                            <div className="flex items-center text-gray-600">
                                <Phone className="h-5 w-5 mr-3 text-brand-primary" />
                                <span>+91 94444 75095</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                                <Mail className="h-5 w-5 mr-3 text-brand-primary" />
                                <span>contact@kqchessacademy.com</span>
                            </div>
                        </div>

                        <div className="flex items-start text-gray-600 mt-4">
                            <Clock className="h-5 w-5 mr-3 text-brand-primary shrink-0" />
                            <div>
                                <p><span className="font-bold text-gray-900">Thursday - Saturday:</span> 5:00 PM - 7:00 PM</p>
                                <p><span className="font-bold text-gray-900">Sunday:</span> 11:00 AM - 1:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); console.log("Form submitted"); }}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none" placeholder="+91 98765 43210" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none h-32" placeholder="How can we help you?"></textarea>
                            </div>
                            <button className="w-full bg-brand-primary text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
