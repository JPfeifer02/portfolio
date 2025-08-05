import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <ul className="space-y-6 list-disc list-inside text-lg">
        <li>
          <strong>Portfolio Website</strong> – My personal portfolio site showcasing my projects and skills. Built with React.{" "}
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
          {/* You can add links or details here later */}
        </li>
      </ul>
    </section>
  );
}

export default Projects;
