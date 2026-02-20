"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-400 leading-relaxed text-lg"
        >
          I am a full-stack developer focused on designing and engineering
          scalable web applications using modern technologies such as Next.js,
          MongoDB, and the MERN stack. I recently built a production-ready
          e-commerce platform featuring role-based access control, secure
          payment integration with Stripe, stock validation logic, and
          administrative dashboards. With professional experience in software
          house environments and ongoing hands-on full-stack development, I am
          continuously refining my ability to build performant, maintainable,
          and user-centric applications.
          <br />
          <br />I have also worked in a professional software house environment,
          contributing to UI development and real-world client projects.
        </motion.p>
      </div>
    </section>
  );
}
