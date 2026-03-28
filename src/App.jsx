import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventsListing from './components/EventsListing';
import EventCategories from './components/EventCategories';
import AboutPlatform from './components/AboutPlatform';
import FeaturedEvent from './components/FeaturedEvent';
import BookingSection from './components/BookingSection';
import Testimonials from './components/Testimonials';
import ContactNewsletter from './components/ContactNewsletter';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={loading} />
      
      {!loading && (
        <div className="app-container">
          <Navbar />
          <main>
            <Hero />
            <EventCategories />
            <EventsListing />
            <FeaturedEvent />
            <AboutPlatform />
            <BookingSection />
            <Testimonials />
            <ContactNewsletter />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
