import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const HomeCenters = () => {
    const centers = [
        {
            name: "Kotturpuram",
            address: "@Royal Habitat 5, 4th main road Extension Kottur Gardens, Chennai",
            phone: "+91 94444 75095",
            email: "yoursmvin@gmail.com"
        },
        {
            name: "Mylapore",
            address: "@ Akshara Play School 23, Kesavaperumal S St, Alamelu Manga Puram, Mandavelipakkam, Mylapore, Chennai",
            phone: "+91 94444 75095",
            email: "yoursmvin@gmail.com"
        },
        {
            name: "Kottivakkam",
            address: "@ Hellokids Aadhya Door no 2, Plot no 2A, AGS Colony 3rd Main Rd, near Nobel Hospital, AGS Colony, Kottivakkam",
            phone: "+91 94444 75095",
            email: "yoursmvin@gmail.com"
        },
        {
            name: "Adyar",
            address: "@ 8/19, 2nd Cresent Park Rd, Sector 3, Adyar, Chennai",
            phone: "+91 94444 75095",
            email: "yoursmvin@gmail.com"
        },
        {
            name: "Virugambakkam",
            address: "@ Shah Academics 355V+CGM, Natesan Nagar, Chinmaya Nagar, Chennai",
            phone: "+91 94444 75095",
            email: "yoursmvin@gmail.com"
        },
        {
            name: "RA Puram",
            address: "@ Tusk and Quill 2nd Main Rd, Raja Annamalaipuram, Chennai",
            phone: "+91 94444 75095",
            email: "yoursmvin@gmail.com"
        },
        {
            name: "Mugalivakkam",
            address: "@ Pebhok International Preschool, No.1, Groundfloor, Ramachandra Nagar, Madhanandhapuram, Mugalivakkam, Porur, Chennai",
            phone: "+91 94444 75095",
            email: "yoursmvin@gmail.com"
        },
        {
            name: "Pallikaranai",
            address: "@ NPRN SWAMI VIVEKANANDA PAYILAGAM, Bhavaniamman, Kannabiran Koil St, Surya Nagar, Medavakkam, Chennai",
            phone: "+91 94444 75095",
            email: "yoursmvin@gmail.com"
        },
        {
            name: "KK Nagar",
            address: "@SWRL Academy, 592, Alagirisamy Salai, Sector 9, K. K. Nagar, Chennai, Tamil Nadu 600078",
            phone: "+91 94444 75095",
            email: "yoursmvin@gmail.com"
        }
    ];

    return (
        <section className="py-20 bg-white border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our <span className="text-brand-primary">Centres</span></h2>
                    <p className="text-gray-500">Conveniently located branches across Chennai for offline training.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {centers.map((center, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 p-8 rounded-xl border border-gray-800 hover:border-brand-primary transition-colors relative group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <MapPin className="h-16 w-16 text-brand-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">{center.name}</h3>
                            <div className="space-y-4 relative z-10">
                                <p className="text-gray-500 text-sm flex items-start">
                                    <MapPin className="h-5 w-5 mr-2 text-brand-primary shrink-0" />
                                    {center.address}
                                </p>
                                <p className="text-gray-500 text-sm flex items-center">
                                    <Phone className="h-5 w-5 mr-2 text-brand-primary shrink-0" />
                                    {center.phone}
                                </p>
                                <p className="text-gray-500 text-sm flex items-center">
                                    <Mail className="h-5 w-5 mr-2 text-brand-primary shrink-0" />
                                    {center.email}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeCenters;
