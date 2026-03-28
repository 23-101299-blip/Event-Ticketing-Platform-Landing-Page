import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import './BookingSection.css';

const events = [
  { id: '1', title: 'Summer Music Fest' },
  { id: '2', title: 'Tech Innovation Summit' },
  { id: '3', title: 'Laugh Out Loud Comedy' },
  { id: '4', title: 'Digital Arts Workshop' },
  { id: '5', title: 'Community Green Day' },
  { id: '6', title: 'Classic Drama Theatre' }
];

const BookingSection = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tickets: '',
    event: ''
  });
  
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.tickets || !formData.event) {
      setStatus({ type: 'error', message: t('booking.errorMessage') });
      return;
    }

    if (parseInt(formData.tickets) < 1) {
      setStatus({ type: 'error', message: t('booking.errorMessage') });
      return;
    }

    setStatus({ type: 'loading', message: '' });
    setTimeout(() => {
      setStatus({ type: 'success', message: t('booking.successMessage') });
      setFormData({ name: '', email: '', tickets: '', event: '' });
    }, 1500);
  };

  return (
    <section id="booking" className="booking-section section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>{t('booking.title')}</h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div 
          className="booking-form-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence>
            {status.message && (
              <motion.div 
                className={`form-alert ${status.type}`}
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: 'auto', marginBottom: 20 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              >
                {status.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                <span>{status.message}</span>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleBookingSubmit} className="booking-form">
            <div className="form-group">
              <label htmlFor="name">{t('booking.namePlaceholder')} *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{t('booking.emailPlaceholder')} *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="tickets">{t('booking.ticketsPlaceholder')} *</label>
              <input 
                type="number" 
                id="tickets" 
                name="tickets" 
                min="1" 
                max="10" 
                value={formData.tickets}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="event">{t('booking.eventSelectPlaceholder')} *</label>
              <select 
                id="event" 
                name="event" 
                value={formData.event}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>--- {t('booking.eventSelectPlaceholder')} ---</option>
                {events.map(ev => (
                  <option key={ev.id} value={ev.id}>{ev.title}</option>
                ))}
              </select>
            </div>
            
            <div className="form-submit">
              <button 
                type="submit" 
                className={`btn-primary btn-large btn-block ${status.type === 'loading' ? 'loading' : ''}`}
                disabled={status.type === 'loading'}
              >
                {status.type === 'loading' ? '...' : t('booking.submit')}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
