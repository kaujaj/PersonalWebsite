import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../src/App.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Contact - Kaustubh's Website</title>
        <meta name="description" content="Get in touch with Kaustubh - Contact form and information" />
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

      <div className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <h1 className={styles.contactTitle}>Get In Touch</h1>
          <p className={styles.contactSubtitle}>
            Have a question or want to work together? I'd love to hear from you!
          </p>
          
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.formInput}
                placeholder="Your name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.formInput}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.formLabel}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.formInput}
                placeholder="What's this about?"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.formTextarea}
                placeholder="Tell me more about your project or question..."
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>

          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              Or reach out directly:
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="mailto:kaustubh@example.com" 
                style={{ 
                  color: '#667eea', 
                  textDecoration: 'none', 
                  fontWeight: '600',
                  padding: '0.5rem 1rem',
                  border: '2px solid #667eea',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#667eea';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#667eea';
                }}
              >
                📧 Email
              </a>
              <a 
                href="https://linkedin.com/in/kaustubh" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  color: '#667eea', 
                  textDecoration: 'none', 
                  fontWeight: '600',
                  padding: '0.5rem 1rem',
                  border: '2px solid #667eea',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#667eea';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#667eea';
                }}
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 