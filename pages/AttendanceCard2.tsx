import React from 'react';
import HomeNav from '../components/HomeNav';
import Footer from '../components/footer';
import styles from './AttendanceCard.module.css';

const AttendanceCard = () => {
  const attendanceData = [
    { code: 'CIT', name: 'Citra Kusumadewi Sribawono', time: '15:30' },
    { code: 'LIA', name: 'Aulia Ramadhani', time: '15:30' },
    { code: 'KNP', name: 'Rizki Nugroho Firdaus', time: '15:30' },
    { code: 'MMA', name: 'Mitchel Mohamad Affandi', time: '15:30' },
    { code: 'LIA', name: 'Aulia Ramadhani', time: '15:30' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <HomeNav />
      <main className={styles.main}>
      <h2 className={styles.h2}>ATTENDANCE</h2>
        <div className={styles.attendanceList}>
          {attendanceData.map((attendance, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.left}>
                <h3>{attendance.code}</h3>
                <p>{attendance.name}</p>
              </div>
              <div className={styles.right}>
                <p>TODAY, {attendance.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.pagination}>
          <button>PAGE 1</button>
          <button>▶</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AttendanceCard;
