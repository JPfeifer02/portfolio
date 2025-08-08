import headshot from '../assets/HeadShot.jpg';
import '../index.css'; // or wherever your variables are

function About() {
  return (
    <section className="max-w-3xl mx-auto p-8 text-center animate-fadeIn">
      {/* Centered image + title */}
      <div className="flex flex-col items-center gap-6 mb-8">
        <img
          src={headshot}
          alt="Headshot"
          className="rounded-full w-48 h-48 border-2 border-[var(--accent-color)] object-cover shadow-lg"
        />
        <h1 className="text-4xl font-bold" style={{ color: 'var(--text-color)' }}>
          About Me
        </h1>
      </div>

      {/* Bio */}
      <p className="text-lg mb-8" style={{ color: 'var(--text-color)' }}>
        I recently graduated with a degree in Computer Science and love building clean,
        practical software solutions. I'm currently looking for an entry-level developer
        role where I can grow and contribute to real-world projects.
      </p>

      {/* Resume button */}
      <button
        onClick={() => window.open("/Resume2.pdf", "_blank")}
        className="px-6 py-3 rounded transition duration-300"
        style={{
          backgroundColor: 'var(--accent-color)',
          color: 'var(--alt-color)',
        }}
        onMouseEnter={e => e.target.style.opacity = '0.5'}
        onMouseLeave={e => e.target.style.opacity = '1'}
      >
        View My Resume
      </button>
    </section>
  );
}

export default About;
