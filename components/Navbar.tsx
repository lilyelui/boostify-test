import React from 'react';
import styles from './Navbar.module.css';
import { useTheme } from '../pages/ThemeContext';
// import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

const Navbar: React.FC = () => {
  const { isDarkMode, toggleMode } = useTheme();

  return (
    <header className={`${styles.header} ${isDarkMode ? styles['dark-mode'] : styles['light-mode']}`}>
      <div className={styles.logoContainer}>
        <a href="/">
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </a>
      </div>
      <nav className={styles.navbarContainer}>
        <button onClick={toggleMode} className={styles.modeToggle}>
          <img
            src={isDarkMode ? "/light-mode-icon.png" : "/path-to-darkmode-icon.png"}
            alt={isDarkMode ? "Light Mode Icon" : "Dark Mode Icon"}
          />
        </button>
        <ul className={styles.navLinks}>
          <li><a href="/About" className={styles.navLink}>About</a></li>
          <li><a href="/Team" className={styles.navLink}>Our Team</a></li>
          <li><a href="/SignIn" className={`${styles.navLink} ${styles.signIn}`}>Sign In</a></li>
        </ul>
        <button className={styles.profileButton}></button>
      </nav>
    </header>
  );
};

export default Navbar;