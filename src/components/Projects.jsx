import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
      <ul className="space-y-6 list-disc list-inside text-lg">
        <li>
          <strong>Portfolio Website</strong> – My personal portfolio site showcasing my projects and skills. Built with React and Vite.{" "}
          <a
            href="https://github.com/jpfeifer02/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:underline"
            aria-label="Portfolio Website GitHub"
          >
            <FaGithub /> GitHub
          </a>
        </li>
        <li>
          <strong>Macro Tracker</strong> – A full-stack app to track calories. Built with React, Node.js, PostgreSQL.{" "}
          <a
            href="https://github.com/jpfeifer02/foodlogger"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:underline"
            aria-label="Macro Tracker GitHub"
          >
            <FaGithub /> GitHub
          </a>
        </li>
        <li>
          <strong>Piano</strong> – A personal music project focused on piano compositions and practice.
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <iframe
              src="https://www.youtube.com/embed/j99GrEE-Ybw"
              className="w-full h-64 rounded-lg shadow-md"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/RUW4UWliAtg"
              className="w-full h-64 rounded-lg shadow-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
