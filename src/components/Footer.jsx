import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Vibe<span className="gradient-text">Pass</span></h2>
          </div>
          
          <div className="footer-links">
            <a href="#hero">{t('navbar.home')}</a>
            <a href="#events">{t('navbar.events')}</a>
            <a href="#about">{t('navbar.about')}</a>
            <a href="#contact">{t('navbar.contact')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
