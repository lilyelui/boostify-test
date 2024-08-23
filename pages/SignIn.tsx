import React from 'react';
import styles from './SignIn.module.css';

const SignIn: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Boostify Logo" />
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Sign In to Your Account</h2>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" className={styles.input} placeholder="Email" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" id="password" className={styles.input} placeholder="Password" />
          </div>
        </form>
          <a href ="/HomePage" >
            <button type="submit" className={styles.signInButton}>Sign In</button>
          </a>
      </div>
    </div>
  );
};
export default SignIn;
