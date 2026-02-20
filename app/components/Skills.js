"use client";

import { motion } from "framer-motion";

const skills = {
  Frontend: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
  Backend: ["Node.js", "MongoDB", "Mongoose", "REST APIs"],
  Tools: ["Git", "Vercel", "Stripe", "JWT/Auth"],
};

export default function Skills() {
  return (
    <section className="py-24 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 p-8 rounded-xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-500">
                {category}
              </h3>

              <ul className="space-y-2 text-gray-400">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}