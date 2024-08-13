import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import Footer from '../components/footer'; // Adjust the path as necessary
import styles from './LandingPage.module.css';

const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Text Section */}
        <div className={styles.textSection}>
          <h1 className={styles.title}>Capture Your Smile, Capture Your Presence</h1>
          <p className={styles.description}>
            This device is an attendance system based on facial recognition technology that requires users to smile as a sign of presence. With just a smile, your attendance is automatically recorded, enhancing the positive atmosphere in the workplace or school. Additionally, this device aims to boost people's enthusiasm and motivation to start their day with a smile, creating a more positive and productive environment.
          </p>
          <div>
            <button className={styles.attendanceButton}>See Your Attendance</button>
          </div>
        </div>

        {/* Image Section */}
        <div className={styles.imageSection}>
          <img src="/smile-image.png" alt="Smiling Face" className={styles.smileImage} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
