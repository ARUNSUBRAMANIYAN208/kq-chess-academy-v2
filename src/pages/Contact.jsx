import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzDVD5_ZzZXDGxsMKkcybeCbS-gBZ3mUx_usTVJyw6bSbmcdKhspQVitduuaQ8JHMGX/exec';

        const dataToSubmit = new FormData();
        dataToSubmit.append('submissionDate', new Date().toLocaleString());
        dataToSubmit.append('formType', 'ContactForm'); // To distinguish it in the sheet
        dataToSubmit.append('name', formData.name);
        dataToSubmit.append('email', formData.email);
        dataToSubmit.append('phone', formData.phone);
        dataToSubmit.append('message', formData.message);

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: dataToSubmit
            });

            if (response.ok || response.type === 'opaque') {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Error!', error.message);
            setStatus('error');
            setErrorMessage('Something went wrong sending your message. Please try again.');
        }
    };
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

                            {/* New contact number */}
                            <div className="flex items-center text-gray-600">
                                <Phone className="h-5 w-5 mr-3 text-brand-primary" />
                                <span>+91 88259 88779</span>
                            </div>

                            <div className="flex items-center text-gray-600">
                                <Mail className="h-5 w-5 mr-3 text-brand-primary" />
                                <span>yoursmvin@gmail.com</span>
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

                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-8"
                            >
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                                <p className="text-gray-600 mb-6">Thank you for reaching out. We will get back to you shortly.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="text-brand-primary font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {status === 'error' && (
                                    <div className="bg-red-50 border-l-4 border-red-500 p-4 shrink-0 flex items-start">
                                        <AlertCircle className="w-5 h-5 text-red-500 mr-2 shrink-0 mt-0.5" />
                                        <p className="text-sm text-red-700">{errorMessage}</p>
                                    </div>
                                )}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none text-gray-900 placeholder-gray-400"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none text-gray-900 placeholder-gray-400"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none text-gray-900 placeholder-gray-400"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none h-32 text-gray-900 placeholder-gray-400"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className={`relative w-full text-gray-900 font-bold py-3 rounded-lg transition-all overflow-hidden ${status === 'submitting' ? 'bg-yellow-400/70 cursor-not-allowed text-transparent' : 'bg-brand-primary hover:bg-yellow-400'}`}
                                >
                                    {status === 'submitting' && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-5 h-5 border-3 border-gray-900/30 border-t-gray-900 rounded-full animate-spin"></div>
                                        </div>
                                    )}
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
