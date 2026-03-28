import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import './FeaturedEvent.css';

const FeaturedEvent = () => {
  const { t } = useTranslation();

  return (
    <section className="featured-section section-padding">
      <div className="container">
        <motion.div 
          className="featured-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="featured-image">
             <div className="featured-badge">{t('featuredEvent.badge')}</div>
             <img src="https://loremflickr.com/800/800/night,stars,event" alt={t('featuredEvent.title')} className="featured-img-real" />
          </div>
          
          <div className="featured-content">
            <h2>{t('featuredEvent.title')}</h2>
            <p className="featured-desc">{t('featuredEvent.description')}</p>
            
            <div className="featured-info">
              <div className="info-block">
                <Calendar className="info-icon" />
                <div>
                  <span className="info-label">Date</span>
                  <span className="info-value">{t('featuredEvent.date')}</span>
                </div>
              </div>
              <div className="info-block">
                <MapPin className="info-icon" />
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">{t('featuredEvent.location')}</span>
                </div>
              </div>
            </div>
            
            <a href="#booking" className="btn-primary btn-large">{t('eventsListing.bookNow')}</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedEvent;
