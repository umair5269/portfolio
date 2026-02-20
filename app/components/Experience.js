"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="py-24 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Experience
        </motion.h2>

        <div className="mt-16 border-l border-gray-700 pl-8 space-y-16">
          
          {/* Voltic Inc */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold">
              Frontend Developer — Voltic Inc
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              March 2025 — September 2026
            </p>

            <ul className="mt-4 space-y-2 text-gray-400 list-disc list-inside">
              <li>
                Developed and deployed the company homepage with responsive,
                performance-optimized design.
              </li>
              <li>
                Designed UI components for an internal email campaign
                management tool.
              </li>
              <li>
                Collaborated with backend developers to integrate APIs
                and enhance user workflows.
              </li>
              <li>
                Improved layout consistency and overall user experience
                across multiple client-facing pages.
              </li>
            </ul>
          </motion.div>

          {/* DTeck Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold">
              Web Developer — DTeck Solutions
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              September 2026 — Present
            </p>

            <ul className="mt-4 space-y-2 text-gray-400 list-disc list-inside">
              <li>
                Develop and maintain WordPress-based websites for clients,
                focusing on performance and responsiveness.
              </li>
              <li>
                Customize themes and implement frontend improvements
                aligned with client requirements.
              </li>
              <li>
                Continuously expanding expertise in the MERN stack
                to transition into full-stack application development.
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}