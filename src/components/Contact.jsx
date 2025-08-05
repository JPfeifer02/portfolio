import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section className="max-w-md mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <div className="flex justify-center gap-8 text-5xl text-gray-700">
        <a
          href="mailto:john02pf@gmail.com"
          aria-label="Email"
          className="hover:text-red-500 transition-colors duration-300"
        >
          <MdEmail />
        </a>
        <a
          href="https://github.com/jpfeifer02"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-black transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/johnpfeifer"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-700 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export default Contact;
