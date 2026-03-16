import React from 'react';
import Hero from '../components/sections/Hero';
import AboutTeaser from '../components/sections/AboutTeaser';
import Achievements from '../components/sections/Achievements';
import Testimonials from '../components/sections/Testimonials';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import GalleryPreview from '../components/sections/GalleryPreview';
import UpcomingEvents from '../components/sections/UpcomingEvents';
import FAQ from '../components/sections/FAQ';
import HomeCenters from '../components/sections/HomeCenters';
import HomeCurriculum from '../components/sections/HomeCurriculum';
import FeaturedVideo from '../components/sections/FeaturedVideo';

const Home = () => {
    return (
        <div className="bg-white">
            <Hero />
            <AboutTeaser />
            <WhyChooseUs />
            <HomeCurriculum />
            <FeaturedVideo />
            <UpcomingEvents />
            <GalleryPreview />
            <HomeCenters />
            <FAQ />
            {/* <Achievements /> */}
            {/* <Testimonials /> */}
        </div>
    );
};

export default Home;
