"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Full-Stack E-Commerce Platform",
    description:
      "Engineered a production-ready e-commerce system with role-based authentication (customer, manager, admin), Stripe and COD payments, stock validation logic, order management dashboards, and invoice generation. Designed with scalability and real-world workflows in mind.",
    tech: [
      "Next.js",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "Tailwind",
    ],
    live: "https://next-store-xi-six.vercel.app/",
    github: "https://github.com/umair5269/Next-store.git",
    image: "/ecommerce.png",
    featured: true,
  },
  {
    title: "Full-Stack Blog Platform",
    description:
      "Developed a dynamic blog platform with CRUD functionality, API routes, and MongoDB integration. Implemented structured routing and clean UI with responsive design.",
    tech: ["Next.js", "MongoDB", "REST API"],
    live: "https://next-blog-rose-ten-83.vercel.app/",
    github: "https://github.com/umair5269/Next-Blog.git",
    image: "/blog.png",
  },
  {
    title: "Software House Experience",
    description:
      "Contributed to professional client projects in a software house environment. Developed company homepage and designed UI components for an internal email campaign management tool, focusing on responsive layouts and improved user experience.",
    tech: ["React", "Tailwind", "UI/UX"],
    live: "https://voltic.ai/",
    github: null,
    image: "/softwarehouse.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 border-t border-gray-800"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Projects
        </motion.h2>

        <div className="mt-16 space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                project.featured ? "md:gap-16 bg-gray-900/60 border border-gray-800" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl border border-gray-800 hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 text-left">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                {(project.live || project.github) && (
                  <div className="mt-6 flex gap-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                      >
                        Live Demo
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="px-5 py-2 border border-gray-700 hover:border-gray-500 rounded-lg transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}