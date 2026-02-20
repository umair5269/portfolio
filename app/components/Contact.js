"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 border-t border-gray-800"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-400 text-lg"
        >
          I'm currently open to full-stack and MERN stack opportunities.
          If you're hiring or have a project in mind, feel free to reach out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col md:flex-row justify-center gap-6"
        >
          <a
            href="mailto:umair.dev.js@gmail.com"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/umaircodes/"
            target="_blank"
            className="px-6 py-3 border border-gray-700 hover:border-gray-500 rounded-lg transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/umair5269"
            target="_blank"
            className="px-6 py-3 border border-gray-700 hover:border-gray-500 rounded-lg transition"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}