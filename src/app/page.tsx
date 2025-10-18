"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const skills = [
    { title: "Web Development", desc: "Building responsive and high-performing websites using modern frameworks like Next.js and Tailwind CSS." },
    { title: "Frontend Development", desc: "Designing sleek and interactive UIs that provide smooth user experiences across all devices." },
    { title: "Graphic Designing", desc: "Creating stunning visuals and brand designs using Canva to bring ideas to life." },
    { title: "Cybersecurity Essentials", desc: "Trained in security principles to keep web applications safe from potential threats." },
    { title: "Rule-Based Chatbots", desc: "Developing Python-based chatbots for handling user concerns and FAQs efficiently." },
    { title: "Agentic AI Chatbots", desc: "Exploring AI-driven chatbot systems capable of autonomous reasoning and smart interactions." },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white p-10">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-yellow-400 mb-4"
        >
          Hi, I'm <span className="text-orange-400">Aleena Amir</span> 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto"
        >
          Welcome to my portfolio! I'm a passionate frontend developer and creative designer who loves blending design, technology, and AI to craft meaningful digital experiences.
        </motion.p>

        <Link
          href="/projects"
          className="mt-6 inline-block bg-yellow-400 text-black font-medium px-6 py-2 rounded-full hover:bg-yellow-500 transition"
        >
          Explore My Work
        </Link>
      </div>

      {/* Skill Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/30 transition"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">{skill.title}</h3>
            <p className="text-gray-400 text-sm">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
