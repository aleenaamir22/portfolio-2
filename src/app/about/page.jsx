"use client";
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";

export default function About() {
  const [activeBox, setActiveBox] = useState(null);

  const sections = [
    
    {
      id: "information",
      title: "Person Information",
      content: (
        <ul className="list-disc list-inside text-gray-300">
          <li><strong>Name:</strong>Aleena Amir</li>
          <li><strong>Father name:</strong>Amir Jamil</li>
          <li><strong>Age:</strong>19</li>
          <li><strong>City/Country:</strong>Karachi/Pakistan</li>
          <li><strong>Nationality:</strong>Pakistani</li>
          <li><strong>mail:</strong>aleenaamir2211@gmail.com</li>
        </ul>
      ),
    },
    
    {
      id: "about",
      title: "About Me",
      content: (
        <p className="text-gray-300 leading-relaxed">
          A passionate and detail-oriented frontend developer with a knack for
          designing user-friendly and performance-optimized websites and
          applications. I enjoy turning complex problems into clean and elegant
          solutions.
        </p>
      ),
    },
    {
      id: "languages",
      title: "Languages",
      content: (
        <ul className="list-disc list-inside text-gray-300">
          <li>English (fluent)</li>
          <li>Urdu (Native)</li>
        </ul>
      ),
    },
    {
      id: "skills",
      title: "Skills",
      content: (
        <div className="space-y-3 text-gray-300">
          <div>
            <strong className="text-yellow-400">Programming Languages:</strong>
            <p>HTML, CSS, JavaScript, TypeScript, Python</p>
          </div>
          <div>
            <strong className="text-yellow-400">Frameworks & Libraries:</strong>
            <p>Next.js, Node.js, Sanity</p>
          </div>
          <div>
            <strong className="text-yellow-400">Tools & Platforms:</strong>
            <p>Canva, Figma, GitHub, VS Code, Streamlit, Vercel</p>
          </div>
        </div>
      ),
    },
    {
      id: "education",
      title: "Education",
      content: (
        <ul className="list-disc list-inside text-gray-300">
          <li>(SSC)-Matriculation — (2023)</li>
          <li>(HSC)-Intermediate — (2025)</li>
          <li>University — (currently) </li>
        </ul>
      ),
    },
    {
      id: "courses",
      title: "Courses",
      content: (
        <div className="text-gray-300 space-y-2">
          <p>
            <strong className="text-yellow-400">Web development:</strong> Governor Sindh
            Initiative for GenAI, Web3, and Metaverse
          </p>
          <p>
            <strong className="text-yellow-400">Cybersecurity Essentials:</strong>{" "}
            from Virtual University (Cisco Networking Company)
          </p>
          <p>
            <strong className="text-yellow-400">Agentic-AI(ChatBots):</strong> Governor Sindh
            Initiative for GenAI, Web3, and Metaverse
          </p>
          <p>
            <strong className="text-yellow-400">Prompt engineering:</strong> Governor Sindh
            Initiative for GenAI, Web3, and Metaverse
          </p>
        </div>
      ),
    },
  ];

  const links = [
    {
      id: "github",
      title: "GitHub",
      icon: <FaGithub size={23} />,
      url: "https://github.com/aleenaamir22",
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      icon: <FaLinkedin size={23} />,
      url: "https://www.linkedin.com/in/aleena-amir-5995482b6/",
    },
    {
      id: "instagram",
      title: "Instagram",
      icon: <FaInstagram size={23} />,
      url: "https://www.instagram.com/code._.whispers/?e=0c8b2157-6300-4465-b643-bba23b44c850&g=5",
    },
    /*{
      id: "portfolio",
      title: "Portfolio",
      icon: <FaGlobe size={25} />,
      url: "https://yourportfolio.vercel.app",
    },*/
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-10 bg-black text-yellow-200">
      {/* Profile Header */}
      <div className="flex flex-col items-center mb-10 text-center">
        <Image
          src="/projects/profpic2.jpg"
          alt="Profile Picture"
          className="w-36 h-36 rounded-full border-4 border-yellow-400 shadow-lg mb-5 object-cover"
          width={36}
          height={36}
        />
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">Aleena Amir</h1>
        <p className="text-gray-400 max-w-2xl">
          Frontend Developer | Creative Technologist | Agentic-AI Chatbot Developer 
        </p>

        {/* 🔗 Social Links */}
        <div className="flex gap-5 mt-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-full border border-gray-700 hover:border-yellow-400 hover:shadow-yellow-400/50 hover:shadow-md transition"
            >
              {link.icon}
              <span>{link.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* 3D Info Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {sections.map((section) => (
          <div
            key={section.id}
            onClick={() => setActiveBox(section.id)}
            className={`cursor-pointer bg-gray-900 rounded-2xl p-6 border border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-yellow-400/40 hover:shadow-lg ${
              activeBox === section.id
                ? "scale-105 bg-gray-800 shadow-yellow-400/70 shadow-2xl"
                : ""
            }`}
          >
            <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
              {section.title}
            </h2>
            <div className="space-y-2">{section.content}</div>
          </div>
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
