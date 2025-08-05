// components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <a href="#about" style={styles.link}>About</a>
      <a href="#projects" style={styles.link}>Projects</a>
      <a href="#contact" style={styles.link}>Contact</a>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: 'bold',
  }
};
