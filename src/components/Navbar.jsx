import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <div className="logo">
          <h2>Event<span className="gradient-text">Ticket</span></h2>
        </div>
        
        <nav className="nav-links">
          <a href="#hero">{t('navbar.home')}</a>
          <a href="#events">{t('navbar.events')}</a>
          <a href="#about">{t('navbar.about')}</a>
          <a href="#contact">{t('navbar.contact')}</a>
        </nav>

        <div className="nav-actions">
          <button onClick={toggleLanguage} className="lang-btn">
            <Globe size={18} />
            {i18n.language === 'en' ? 'AR' : 'EN'}
          </button>
          <a href="#booking" className="btn-primary">{t('navbar.bookTicket')}</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
