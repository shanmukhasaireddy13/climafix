import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SummitHighlights from '../components/SummitHighlights';
import AboutSection from '../components/AboutSection';
import KeySessions from '../components/KeySessions';
import FeaturedSpeakers from '../components/FeaturedSpeakers';
import SuccessStories from '../components/SuccessStories';
import PastEventsGallery from '../components/PastEventsGallery';
import CallToAction from '../components/CallToAction';
import SiteFooter from '../components/SiteFooter';

const Home = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Navbar />
      <Hero />
      <SummitHighlights />
      <AboutSection />
      <KeySessions />
      <FeaturedSpeakers />
      <SuccessStories />
      <PastEventsGallery />
      <CallToAction />
      <SiteFooter />
    </div>
  );
};

export default Home;
