import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Music, Mic, Film, Briefcase, Speech, Users } from 'lucide-react';
import './EventCategories.css';

const categories = [
  { id: 'music', icon: <Music size={24} />, key: 'categories.music' },
  { id: 'comedy', icon: <Mic size={24} />, key: 'categories.comedy' },
  { id: 'theater', icon: <Film size={24} />, key: 'categories.theater' },
  { id: 'workshops', icon: <Briefcase size={24} />, key: 'categories.workshops' },
  { id: 'talks', icon: <Speech size={24} />, key: 'categories.talks' },
  { id: 'community', icon: <Users size={24} />, key: 'categories.community' },
];

const EventCategories = () => {
  const { t } = useTranslation();

  return (
    <section className="categories-section section-padding">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>{t('categories.title')}</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="categories-container">
          <motion.div 
            className="category-card active"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <span>{t('categories.all')}</span>
          </motion.div>

          {categories.map((cat, index) => (
            <motion.div 
              key={cat.id} 
              className="category-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, borderColor: 'var(--primary)' }}
            >
              <div className="category-icon">{cat.icon}</div>
              <span>{t(cat.key)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCategories;
