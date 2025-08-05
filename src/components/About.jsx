import headshot from '../assets/HeadShot.jpg';
import '../App.css'; // you can keep this if you have global styles

function About() {
  return (
    <section className="max-w-4xl mx-auto p-6 text-center">
      {/* Centered content */}
      <div className="flex flex-col items-center gap-6 mb-6">
        <img
          src={headshot}
          alt="Headshot"
          className="rounded-full w-72 h-72 border-4 border-gray-300 object-cover"
        />
        <h2 className="text-3xl font-semibold">About Me</h2>
      </div>

      <p className="text-lg mb-6">
        I recently graduated with a degree in Computer Science and love building clean,
        practical software solutions. I'm currently looking for an entry-level developer
        role where I can grow and contribute to real-world projects.
      </p>

      <button
        onClick={() => window.open("/Resume2.pdf", "_blank")}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        View My Resume
      </button>
    </section>
  );
}

export default About;
