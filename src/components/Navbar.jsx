// components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav style={styles.nav}> 
      <NavLink href="#about" label="About" />
      <NavLink href="#projects" label="Projects" />
      <NavLink href="#contact" label="Contact" />
    </nav>
  );
}

function NavLink({ href, label }) {
    const [hovered, setHovered] = React.useState(false);
    return (
        <a
            href={href}
            style={{ 
                ...styles.link, 
                color: hovered ? 'blue' : '#333',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {label}
        </a>
    );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '4rem',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  link: {
    color: '#333',
    fontWeight: 'bold',
    transition: 'color .2s ease',
  }
};
