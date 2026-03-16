import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Building2 } from 'lucide-react';

// Branch data
const branches = [
    { id: 1, name: "Kotturpuram", address: "Royal Habitat 5, 4th Main Road Extension, Kottur Gardens, Chennai" },
    { id: 2, name: "Mylapore", address: "Akshara Play School, 23, Kesavaperumal S St, Mandavelipakkam, Mylapore, Chennai" },
    { id: 3, name: "Kottivakkam", address: "Hellokids Aadhya, Door No.2, Plot 2A, AGS Colony 3rd Main Rd, near Nobel Hospital, Kottivakkam" },
    { id: 4, name: "Adyar", address: "8/19, 2nd Crescent Park Rd, Sector 3, Adyar, Chennai" },
    { id: 5, name: "Virugambakkam", address: "Shah Academics, Natesan Nagar, Chinmaya Nagar, Chennai" },
    { id: 6, name: "RA Puram", address: "Tusk and Quill, 2nd Main Rd, Raja Annamalaipuram, Chennai" },
    { id: 7, name: "Mugalivakkam", address: "Pebhok International Preschool, No.1, Ramachandra Nagar, Madhanandhapuram, Mugalivakkam, Porur, Chennai" },
    { id: 8, name: "Pallikaranai", address: "NPRN Swami Vivekananda Payilagam, Kannabiran Koil St, Surya Nagar, Medavakkam, Chennai" },
    { id: 9, name: "KK Nagar", address: "SWRL Academy, 592, Alagirisamy Salai, Sector 9, K. K. Nagar, Chennai - 600078" },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number (min 10 digits)';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzDVD5_ZzZXDGxsMKkcybeCbS-gBZ3mUx_usTVJyw6bSbmcdKhspQVitduuaQ8JHMGX/exec';

        const dataToSubmit = new FormData();
        dataToSubmit.append('submissionDate', new Date().toLocaleString());
        dataToSubmit.append('formType', 'ContactForm');
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
                setFormData({ name: '', email: '', phone: '', message: '' });
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

            {/* Branches Section */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <Building2 className="h-10 w-10 text-brand-primary mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-gray-900">Our <span className="text-brand-primary">Centers</span></h2>
                        <p className="text-gray-500 mt-2 text-sm">9 centers across Chennai — find one near you.</p>
                    </div>

                    {/* Shared Contact Strip */}
                    <div className="flex flex-wrap justify-center gap-6 bg-brand-primary/5 border border-brand-primary/15 rounded-2xl px-6 py-4 mb-10">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <Phone className="h-4 w-4 text-brand-primary" />
                            <a href="tel:+919444475095" className="font-semibold hover:text-brand-primary transition-colors">+91 94444 75095</a>
                            <span className="text-gray-400">·</span>
                            <a href="tel:+918825988779" className="font-semibold hover:text-brand-primary transition-colors">+91 88259 88779</a>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                            <Mail className="h-4 w-4 text-brand-primary" />
                            <a href="mailto:yoursmvin@gmail.com" className="font-semibold hover:text-brand-primary transition-colors">yoursmvin@gmail.com</a>
                        </div>
                    </div>

                    {/* Branch Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {branches.map((branch, index) => (
                            <motion.div
                                key={branch.id}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-brand-primary/30 transition-all duration-300"
                            >
                                <div className="w-9 h-9 shrink-0 rounded-full bg-brand-primary/10 flex items-center justify-center mt-0.5">
                                    <MapPin className="h-4 w-4 text-brand-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-gray-900 text-base mb-1 group-hover:text-brand-primary transition-colors">{branch.name}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{branch.address}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left side: Quick Info */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Send Us a <span className="text-brand-primary">Message</span></h2>
                        <p className="text-gray-500 text-lg">Have a question about our programs, pricing, or want to schedule a free trial? We'd love to hear from you.</p>

                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4">
                            <h3 className="font-bold text-gray-900 text-lg">Quick Contact</h3>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Phone className="h-5 w-5 text-brand-primary shrink-0" />
                                <a href="tel:+919444475095" className="hover:text-brand-primary transition-colors font-medium">+91 94444 75095</a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Phone className="h-5 w-5 text-brand-primary shrink-0" />
                                <a href="tel:+918825988779" className="hover:text-brand-primary transition-colors font-medium">+91 88259 88779</a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <Mail className="h-5 w-5 text-brand-primary shrink-0" />
                                <a href="mailto:yoursmvin@gmail.com" className="hover:text-brand-primary transition-colors font-medium">yoursmvin@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Drop Us a Line</h3>

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
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none text-gray-900 placeholder-gray-400 ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                                        placeholder="Your Name"
                                    />
                                    {errors.name && <p className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none text-gray-900 placeholder-gray-400 ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && <p className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input
                                        type="number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none text-gray-900 placeholder-gray-400 ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                                        placeholder="+91 98765 43210"
                                    />
                                    {errors.phone && <p className="mt-1 text-xs text-red-500 font-medium">{errors.phone}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none h-32 text-gray-900 placeholder-gray-400 ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                                        placeholder="How can we help you?"
                                    ></textarea>
                                    {errors.message && <p className="mt-1 text-xs text-red-500 font-medium">{errors.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className={`relative w-full text-white font-bold py-3 rounded-lg transition-all overflow-hidden ${status === 'submitting' ? 'bg-brand-primary/70 cursor-not-allowed' : 'bg-brand-primary hover:bg-brand-dark'}`}
                                >
                                    {status === 'submitting' && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
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

