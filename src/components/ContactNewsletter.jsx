import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import './ContactNewsletter.css';

const ContactNewsletter = () => {
  const { t } = useTranslation();

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Subscribed to the newsletter successfully!');
  };

  return (
    <section id="contact" className="newsletter-section section-padding">
      <div className="container">
        <motion.div 
          className="newsletter-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="newsletter-bg shape-1"></div>
          <div className="newsletter-bg shape-2"></div>
          
          <div className="newsletter-content">
            <h2>{t('contact.title')}</h2>
            <p>Subscribe to our newsletter and be the first to know about new events, special offers, and platform updates.</p>
            
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input 
                type="email" 
                placeholder={t('contact.emailPlaceholder')} 
                required 
              />
              <button type="submit" className="btn-primary">
                <span>{t('contact.subscribe')}</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactNewsletter;
