import React from 'react';
import styles from './Footer.module.css'; // Pastikan Anda sudah membuat file CSS untuk Footer

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer} container mx-auto px-4`}>
      <div className={styles.footerLinks}>
        <a href="/about" className={styles.footerLink}>About</a>
        <a href="/team" className={styles.footerLink}>Team</a>
        <a href="mailto:info@boostify.com" className={styles.footerLink}>
          <img src="/email-icon.png" alt="Email Icon" className={styles.footerIcon} />
        </a>
        <a href="https://www.linkedin.com/company/boostify" className={styles.footerLink}>
          <img src="/linkedin-icon.png" alt="LinkedIn Icon" className={styles.footerIcon} />
        </a>
      </div>
      <div className={styles.footerContent}>
        <img src="/logofooter.png" alt="Logo" className={styles.footerLogo} />
        <p className={styles.footerText}>© 2021 All Rights Reserved</p>
      </div>
      <div className="py-6 bg-red-600 text-white text-center">
    
      </div>
    </footer>
  );
};

export default Footer;
