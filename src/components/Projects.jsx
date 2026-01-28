import Lottie from "lottie-react";
import projectsAnim from "../assets/project-launching.json";

const projects = [
  {
    title: "WhyNot — Social Event Hosting & Discovery Platform",
    desc: "Built a full-stack platform where users can host real-world events and discover events hosted by others. Implemented authentication, event feeds, and secure backend APIs with a clean frontend UX.",
    tech: "React · Vite · Tailwind CSS · Node.js · Express · MongoDB · Prisma · JWT",
    github: "https://github.com/ArghyaSantra/WhyNot",
  },
  {
    title: "Approvify",
    desc: "A freelance reviews and approvals platform that streamlines client feedback, revision tracking, and approval workflows for freelance projects.",
    tech: "React · Node.js · MongoDB",
    github: "https://github.com/ArghyaSantra/Approvify",
  },
  {
    title: "PLT Research Lab, Jaipur",
    desc: "Designed and developed the official website for PLT Research Lab, focusing on research communication, scalability, responsive design, and modern UI for a scientific organization.",
    tech: "React · Tailwind CSS · Vercel",
    link: "https://plt-india.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12 text-white">
          Featured Projects
        </h2>

        {/* Main layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Projects */}
          <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col justify-between hover:border-gray-700 transition"
              >
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-400">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <span className="text-xs sm:text-sm text-gray-500">
                    {project.tech}
                  </span>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-gray-300 hover:text-white transition"
                      >
                        GitHub →
                      </a>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition"
                      >
                        View Website →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Animation */}
          <div className="flex justify-center md:justify-end">
            <div className="w-[360px] md:w-[520px] opacity-90">
              <Lottie animationData={projectsAnim} loop autoplay />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
