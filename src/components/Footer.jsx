// components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 John Pfeifer</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: '4rem',
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: 'var(--accent-color)',
    color: 'var(--text-color)',
  }
};
