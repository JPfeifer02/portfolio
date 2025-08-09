import React, { useState } from 'react';

import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';
import FullscreenModal from './components/FullscreenModal';

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      {!selected && <Navbar />}

      <section id="about" style={{ padding: '1rem 2rem' }}>
        <About />
      </section>

      <section id="projects" style={{ padding: '1rem 2rem' }}>
        <Projects />
      </section> 

      <section id="hobbies/interests" style={{ padding: '1rem 2rem' }}>
        <Hobbies />
      </section>

      <section id="contact" style={{ padding: '1rem 2rem' }}>
        <Contact />
      </section>

      {selected && <Footer />}  

      {selected && (
        <FullscreenModal selected={selected} setSelected={setSelected} />
      )}

    </div>
  );
}

export default App;
