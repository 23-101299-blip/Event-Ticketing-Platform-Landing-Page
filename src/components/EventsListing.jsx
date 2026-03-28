import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import './EventsListing.css';

const events = [
  { id: 1, title: 'Summer Music Fest', date: 'Aug 15', location: 'City Arena', category: 'Music', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80', delay: 0 },
  { id: 2, title: 'Tech Innovation Summit', date: 'Sep 10', location: 'Convention Center', category: 'Talks', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80', delay: 0.1 },
  { id: 3, title: 'Laugh Out Loud Comedy', date: 'Oct 05', location: 'Comedy Club', category: 'Comedy', image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?auto=format&fit=crop&w=600&q=80', delay: 0.2 },
  { id: 4, title: 'Digital Arts Workshop', date: 'Nov 12', location: 'Creative Hub', category: 'Workshops', image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=600&q=80', delay: 0.3 },
  { id: 5, title: 'Community Green Day', date: 'Dec 01', location: 'Central Park', category: 'Community', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80', delay: 0.4 },
  { id: 6, title: 'Classic Drama Theatre', date: 'Jan 20', location: 'Grand Theatre', category: 'Theatre', image: 'https://loremflickr.com/600/400/theatre', delay: 0.5 },
];

const EventsListing = () => {
  const { t } = useTranslation();

  return (
    <section id="events" className="section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>{t('eventsListing.title')}</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="events-grid">
          {events.map((event) => (
            <motion.div 
              key={event.id} 
              className="event-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: event.delay }}
              whileHover={{ y: -10 }}
            >
              <div className="event-image-container">
                <div className="event-placeholder-img">
                  <img src={event.image} alt={event.title} className="event-img-real" />
                </div>
                <div className="event-category-badge">{t(`eventsItems.${event.id}.category`)}</div>
              </div>
              <div className="event-details">
                <h3>{t(`eventsItems.${event.id}.title`)}</h3>
                <div className="event-info">
                  <div className="info-item">
                    <Calendar size={16} className="icon" />
                    <span>{event.date}</span>
                  </div>
                  <div className="info-item">
                    <MapPin size={16} className="icon" />
                    <span>{t(`eventsItems.${event.id}.location`)}</span>
                  </div>
                </div>
                <div className="event-actions">
                  <a href={`#event-${event.id}`} className="btn-outline">
                    {t('eventsListing.viewDetails')}
                  </a>
                  <a href="#booking" className="btn-primary-small">
                    {t('eventsListing.bookNow')}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsListing;
