"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link"

export default function Certificate() {
  const certificates = [
    {
      title: "Cybersecurity Essentials",
      org: "Virtual University (Cisco Networking Company)",
      year: "2025",
      image: "/projects/cybersecurity.jpg",
      desc: "Learned the fundamentals of online safety, data protection, and ethical security principles.",
    },
    /*{
      title: "Agentic AI",
      org: "Governor Sindh Initiative for GenAI, Web3 & Metaverse",
      year: "2025",
      image: "/certificates/agenticai.jpg",
      desc: "Gained hands-on experience with AI-driven chatbot systems capable of intelligent, autonomous interactions.",
    },*/
    /*{
      title: "Rule-Based Chatbot",
      org: "IBM",
      year: "2024",
      image: "/certificates/chatbot.jpg",
      desc: "Developed a chatbot to manage user concerns using a rule-based conversational model.",
    },*/
    /*{
      title: "Data Science",
      org: "NED University",
      year: "2025",
      image: "/certificates/datascience.jpg",
      desc: "Explored data analysis, visualization, and predictive modeling using Python and AI tools.",
    },*/
  ];

  return (
    <section className="min-h-screen bg-black text-white py-16 px-8">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-12">
        My Certificates 🏆
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:border-yellow-400 hover:shadow-yellow-400/30 transition"
          >
            <div className="relative w-full h-52">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
                {cert.title}
              </h2>
              <p className="text-gray-300 text-sm mb-1">
                <strong>From:</strong> {cert.org}
              </p>
              <p className="text-gray-400 text-sm mb-3">
                <strong>Year:</strong> {cert.year}
              </p>
              <p className="text-gray-400 text-sm">{cert.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Back Buttons */}
      <div className="mt-10 flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-gray-800 text-yellow-400 font-semibold rounded-lg hover:bg-gray-700 transition"
        >
          ⮌ Home
        </Link>
      </div>
    </section>
  );
}
