// components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav style={styles.nav}> 
      <NavLink href="#about" label="About" />
      <NavLink href="#projects" label="Projects" />
      <NavLink href="#hobbies/interests" label="Hobbies/Interests"/>
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
                color: hovered ? 'var(--link-color)' : 'var(--text-color)'
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
    backgroundColor: 'var(--accent-color)',
    position: 'sticky',
    top: -10,
    zIndex: 1000,
  },
  link: {
    transition: 'color .2s ease',
  }
};
