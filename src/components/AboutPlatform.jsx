import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './AboutPlatform.css';

const AboutPlatform = () => {
  const { t } = useTranslation();

  const benefits = [
    'Secure Checkout',
    'Instant E-Tickets',
    '24/7 Support',
    'Exclusive Offers'
  ];

  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>{t('about.title')}</h2>
            <div className="title-underline-left"></div>
            <p>{t('about.description')}</p>
            
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <CheckCircle className="check-icon" size={20} />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="about-visuals"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="stats-card card-1">
              <h3>10K+</h3>
              <p>Tickets Sold</p>
            </div>
            <div className="stats-card card-2">
              <h3>500+</h3>
              <p>Events</p>
            </div>
            <div className="stats-card card-3">
              <h3>100%</h3>
              <p>Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPlatform;
