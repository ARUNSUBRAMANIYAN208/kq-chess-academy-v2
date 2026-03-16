import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, Clock, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import useTournaments from '../hooks/useTournaments';

const TournamentRegistration = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { tournaments, loading } = useTournaments();

    const tournament = tournaments.find(t => t.id === id);

    const [formData, setFormData] = useState({
        playerName: '',
        fideId: '',
        fideRating: '',
        dob: '',
        email: '',
        phone: '',
        district: '',
    });

    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (!loading && !tournament) {
            navigate('/tournaments');
        }
    }, [tournament, loading, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.playerName.trim()) newErrors.playerName = 'Player name is required';
        if (!formData.dob) newErrors.dob = 'Date of birth is required';
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Valid email is required';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
            newErrors.phone = 'Valid 10+ digit phone number is required';
        }

        if (!formData.district.trim()) newErrors.district = 'District/City is required';

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

        // YOU MUST REPLACE THIS URL WITH YOUR PUBLISHED GOOGLE APP SCRIPT WEB APP URL
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzDVD5_ZzZXDGxsMKkcybeCbS-gBZ3mUx_usTVJyw6bSbmcdKhspQVitduuaQ8JHMGX/exec';

        // Add tournament specific data to the submission
        const dataToSubmit = new FormData();
        Object.keys(formData).forEach(key => {
            dataToSubmit.append(key, formData[key]);
        });

        // Ensure we gracefully handle mapping where title/name might be interchangeable depending on the CSV
        const tName = tournament.name || tournament.title || 'Unknown Tournament';
        const tDate = tournament.date || 'Unknown Date';
        const tVenue = tournament.venue || tournament.location || 'Unknown Venue';

        dataToSubmit.append('tournamentName', tName);
        dataToSubmit.append('tournamentDate', tDate);
        dataToSubmit.append('tournamentVenue', tVenue);

        // Add timestamp internally using Google Apps Script usually, but we can pass it
        dataToSubmit.append('submissionDate', new Date().toLocaleString());

        try {
            // Note: Since Google Apps script CORS can be tricky, `no-cors` is often used 
            // but it hides the response. If your script allows CORS, you will get a 200 OK.
            // Replace with standard fetch if your apps script handles CORS.

            // Dummy simulation for now if the URL is not replaced.
            if (scriptURL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
                // Simulate network request
                await new Promise(resolve => setTimeout(resolve, 1500));
                setStatus('success');
                return;
            }

            const response = await fetch(scriptURL, {
                method: 'POST',
                body: dataToSubmit,
                // mode: 'no-cors' // Uncomment if you face CORS issues (but you won't see success response body)
            });

            if (response.ok || response.type === 'opaque') {
                setStatus('success');
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Error!', error.message);
            setStatus('error');
            setErrorMessage('Something went wrong submitting your registration. Please try again.');
        }
    };

    if (!tournament) return null;

    if (status === 'success') {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center border-t-4 border-green-500"
                >
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Thank you for registering for <strong>{tournament.name || tournament.title}</strong>. We have received your details. Our team will contact you shortly with further instructions.
                    </p>
                    <button
                        onClick={() => navigate('/tournaments')}
                        className="bg-brand-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-dark transition-colors shadow-lg shadow-brand-primary/30"
                    >
                        Return to Tournaments
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12 md:py-20 font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <button
                    onClick={() => navigate('/tournaments')}
                    className="flex items-center text-gray-500 hover:text-brand-primary mb-8 transition-colors font-medium"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tournaments
                </button>

                <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
                    {/* Header Banner */}
                    <div className="bg-gray-900 border-b-4 border-brand-primary p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-primary via-gray-900 to-gray-900"></div>
                        <div className="relative z-10">
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-primary/20 text-brand-light font-bold text-xs uppercase tracking-wider mb-4 border border-brand-primary/30">
                                Official Registration
                            </span>
                            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                                {tournament.name || tournament.title}
                            </h1>

                            <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-300">
                                <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg">
                                    <Calendar className="w-4 h-4 mr-2 text-brand-light" />
                                    {tournament.date}
                                </div>
                                <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg">
                                    <MapPin className="w-4 h-4 mr-2 text-brand-light" />
                                    {tournament.venue || tournament.location}
                                </div>
                                <div className="flex items-center bg-gray-800/50 px-4 py-2 rounded-lg">
                                    <Trophy className="w-4 h-4 mr-2 text-brand-light" />
                                    {tournament.format}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="p-8 md:p-12">
                        <div className="mb-8 border-b border-gray-100 pb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Player Information</h2>
                            <p className="text-gray-500">Please fill out all the details carefully to confirm your entry.</p>
                        </div>

                        {status === 'error' && (
                            <div className="mb-8 bg-red-50 border-l-4 border-red-500 p-4 rounded-r flex items-start">
                                <AlertCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 shrink-0" />
                                <p className="text-red-700">{errorMessage}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Player Name */}
                                <div className="space-y-2">
                                    <label htmlFor="playerName" className="block text-sm font-bold text-gray-700">Full Name *</label>
                                    <input
                                        type="text"
                                        id="playerName"
                                        name="playerName"
                                        value={formData.playerName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-shadow bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 ${errors.playerName ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                                        placeholder="E.g. Viswanathan Anand"
                                    />
                                    {errors.playerName && <p className="text-xs text-red-500 font-medium ml-1">{errors.playerName}</p>}
                                </div>

                                {/* Date of Birth */}
                                <div className="space-y-2">
                                    <label htmlFor="dob" className="block text-sm font-bold text-gray-700">Date of Birth *</label>
                                    <input
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        value={formData.dob}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-shadow bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 ${errors.dob ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                                    />
                                    {errors.dob && <p className="text-xs text-red-500 font-medium ml-1">{errors.dob}</p>}
                                </div>

                                {/* FIDE ID */}
                                <div className="space-y-2">
                                    <label htmlFor="fideId" className="block text-sm font-bold text-gray-700">FIDE ID (If any)</label>
                                    <input
                                        type="text"
                                        id="fideId"
                                        name="fideId"
                                        value={formData.fideId}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-shadow bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400"
                                        placeholder="E.g. 5000017"
                                    />
                                </div>

                                {/* FIDE Rating */}
                                <div className="space-y-2">
                                    <label htmlFor="fideRating" className="block text-sm font-bold text-gray-700">Current FIDE Rating / Unrated</label>
                                    <input
                                        type="text"
                                        id="fideRating"
                                        name="fideRating"
                                        value={formData.fideRating}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-shadow bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400"
                                        placeholder="E.g. 2331 or 'Unrated'"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-shadow bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                                        placeholder="player@email.com"
                                    />
                                    {errors.email && <p className="text-xs text-red-500 font-medium ml-1">{errors.email}</p>}
                                </div>

                                {/* Phone */}
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-shadow bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                                        placeholder="+91 98765 43210"
                                    />
                                    {errors.phone && <p className="text-xs text-red-500 font-medium ml-1">{errors.phone}</p>}
                                </div>

                                {/* District / City */}
                                <div className="space-y-2 md:col-span-2">
                                    <label htmlFor="district" className="block text-sm font-bold text-gray-700">City / District / Country *</label>
                                    <input
                                        type="text"
                                        id="district"
                                        name="district"
                                        value={formData.district}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-shadow bg-gray-50 focus:bg-white text-gray-900 placeholder-gray-400 ${errors.district ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                                        placeholder="E.g. Chennai, Tamil Nadu"
                                    />
                                    {errors.district && <p className="text-xs text-red-500 font-medium ml-1">{errors.district}</p>}
                                </div>
                            </div>

                            <div className="pt-8 mt-8 border-t border-gray-100 flex justify-end">
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className={`relative px-8 py-4 rounded-xl font-bold text-lg text-white transition-all shadow-lg overflow-hidden
                                        ${status === 'submitting' ? 'bg-brand-primary/70 cursor-not-allowed text-transparent' : 'bg-brand-primary hover:bg-brand-dark shadow-brand-primary/30 hover:-translate-y-1'}`}
                                >
                                    {status === 'submitting' && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        </div>
                                    )}
                                    Submit Registration
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TournamentRegistration;
