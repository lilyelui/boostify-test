import React from 'react';
import HomeNav from '../components/HomeNav'; 
import Footer from '../components/footer';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
    return (
        <div className={styles.container}>
            <HomeNav />
            
            <main className={styles.main}>
                <div className={styles.profile}>
                    <div className={styles.avatar}>
                        <img src="/user.png" alt="User" className={styles.avatarImage} />
                    </div>
                    <h1 className={styles.name}>Citra Kusumadewi Sribawono</h1>
                </div>
                <section className={styles.attendanceHistory}>
                    <h2>Attendance history</h2>
                    <div className={styles.historyItem}>
                        <span>Today, 8 August 2024</span>
                        <span>14:34</span>
                    </div>
                    <div className={styles.historyItem}>
                        <span>Today, 8 August 2024</span>
                        <span>14:34</span>
                    </div>
                    <div className={styles.historyItem}>
                        <span>Today, 8 August 2024</span>
                        <span>14:34</span>
                    </div>
                    <div className={styles.historyItem}>
                        <span>Today, 8 August 2024</span>
                        <span>14:34</span>
                    </div>
                    <div className={styles.historyItem}>
                        <span>Today, 8 August 2024</span>
                        <span>14:34</span>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Profile;