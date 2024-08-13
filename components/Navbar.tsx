import React from 'react';
import styles from './Navbar.module.css'; // Create a corresponding CSS file for the Navbar

const Navbar: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* Logo and Sign In button outside the navbar */}
      <div className="flex items-center space-x-8">
        <img src="/logo.png" alt="Boostify Logo" className={styles.logo} />
      </div>

      {/* Navbar Container */}
      <div className="flex items-center space-x-4">
        <div className={styles.navbarContainer}>
          <a href="About" className={styles.navLink}>About</a>
          <a href="#" className={styles.navLink}>Our Team</a>
        <button className={styles.signIn}>Sign In</button>
        </div>
      </div>
    </header> 
    
  );
};

export default Navbar;
