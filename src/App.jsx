import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />

      <section id="about" style={{ padding: '1rem 2rem' }}>
        <About />
      </section>

      <section id="projects" style={{ padding: '1rem 2rem' }}>
        <Projects />
      </section> 

      <section id="contact" style={{ padding: '1rem 2rem' }}>
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
