import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const HomeCenters = () => {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <Building2 className="h-10 w-10 text-brand-primary mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our <span className="text-brand-primary">Centres</span></h2>
                    <p className="text-gray-500 text-sm">9 centres across Chennai — find one near you.</p>
                </motion.div>

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
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

                {/* CTA */}
                <div className="text-center">
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 border-2 border-brand-primary text-brand-primary font-bold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300 text-sm"
                    >
                        Contact Us <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeCenters;
