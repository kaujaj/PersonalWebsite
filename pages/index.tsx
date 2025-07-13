import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../src/App.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaustubh's Website</title>
        <meta name="description" content="Kaustubh's Personal Website - Developer, Creator, and Innovator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.navLogo}>
            Kaustubh
          </Link>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className={styles.App}>
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Welcome to <span className={styles.highlight}>Kaustubh's</span> Website
            </h1>
            <p className={styles.heroSubtitle}>
              Developer • Creator • Innovator
            </p>
            <p className={styles.heroDescription}>
              Hello! I'm Kaustubh, and I'm passionate about building amazing digital experiences. 
              Welcome to my personal corner of the internet where I share my journey, projects, and ideas.
            </p>
            <div className={styles.ctaButtons}>
              <button className={`${styles.ctaButton} ${styles.primary}`}>Explore My Work</button>
              <Link href="/contact" className={`${styles.ctaButton} ${styles.secondary}`}>
                Get In Touch
              </Link>
            </div>
          </div>
          <div className={styles.heroDecoration}>
            <div className={styles.floatingShapes}>
              <div className={`${styles.shape} ${styles.shape1}`}></div>
              <div className={`${styles.shape} ${styles.shape2}`}></div>
              <div className={`${styles.shape} ${styles.shape3}`}></div>
            </div>
          </div>
        </div>
        
        <div className={styles.featuresSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What I Do</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💻</div>
                <h3>Web Development</h3>
                <p>Creating responsive and modern web applications with cutting-edge technologies.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎨</div>
                <h3>UI/UX Design</h3>
                <p>Designing beautiful and intuitive user experiences that users love.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🚀</div>
                <h3>Innovation</h3>
                <p>Exploring new technologies and pushing the boundaries of what's possible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 