import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  { id: 1, name: 'Sarah Jenkins', role: 'Music Enthusiast', content: 'The booking process was so smooth! I easily grabbed tickets to my favorite concert without any hassle.', rating: 5 },
  { id: 2, name: 'Ahmed Hassan', role: 'Event Organizer', content: 'An incredibly well-designed platform. I highly recommend it for discovering and managing events in the city.', rating: 5 },
  { id: 3, name: 'Emily Chen', role: 'Workshop Attendee', content: 'I love the UI and the animated sections. Finding tickets for workshops here is intuitive and very fast.', rating: 4 }
];

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>{t('testimonials.title')}</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testi, index) => (
            <motion.div 
              key={testi.id} 
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testi.rating ? 'star-filled' : 'star-empty'} 
                    fill={i < testi.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <p className="testi-content">"{t(`testimonialsItems.${testi.id}.content`)}"</p>
              <div className="testi-author">
                <div className="avatar">{t(`testimonialsItems.${testi.id}.name`).charAt(0)}</div>
                <div className="author-info">
                  <h4>{t(`testimonialsItems.${testi.id}.name`)}</h4>
                  <span>{t(`testimonialsItems.${testi.id}.role`)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
