"use client";

import Image from "next/image";
import Link from "next/link";

export default function Chatbots() {
  const chatbots = [
    {
      id: 1,
      title: "Bakery(Rule-Based Chatbot)",
      image: "/projects/chatbot-bakeryimg.png",
      description:
        "A friendly Python-powered chatbot designed for bakeries — handles orders, FAQs, and delivery details through smart, rule-based responses.",
      link: "https://bakery-chatbot-1.streamlit.app/", // 🔗 project link
    },
    /*{
      id: 2,
      title: "Agentic AI Chatbot",
      image: "/projects/chatbots/agentic-ai.jpg",
      description:
        "An intelligent AI chatbot capable of understanding context and generating natural, human-like responses.",
      link: "https://github.com/yourusername/agentic-ai-chatbot", // 🔗 project link
    },*/
  ];

  return (
    <section className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-yellow-400 mb-8 text-center">
        Chatbot Projects
      </h1>

      {/* Chatbot Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {chatbots.map((bot) => (
          <div
            key={bot.id}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-400/40 transition-transform transform hover:-translate-y-2"
          >
            {bot.image && (
              <Image
                src={bot.image}
                alt={bot.title}
                width={400}
                height={300}
                className="object-cover w-full h-56"
              />
            )}
            <div className="p-5 flex flex-col justify-between h-56">
              <div>
                <h2 className="text-2xl text-yellow-400 font-semibold mb-2">
                  {bot.title}
                </h2>
                <p className="text-gray-300 text-sm mb-4">{bot.description}</p>
              </div>

              {/* 🔗 Project Link */}
              <a
                href={bot.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-black font-semibold bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg transition text-center"
              >
                🔗 View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Back Buttons */}
      <div className="mt-10 flex gap-4">
        <Link
          href="/projects"
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
        >
          ← Back to Projects
        </Link>
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
