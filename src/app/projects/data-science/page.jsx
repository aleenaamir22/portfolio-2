"use client";

import Image from "next/image";
import Link from "next/link";

export default function DataScience() {
  const project = {
    title: "Data Analysis Project",
    image: "/projects/data-science/project.jpg",
    description:
      "A data science project demonstrating data cleaning, visualization, and analysis using Python and Pandas.",
  };

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold text-yellow-400 mb-10 text-center">
        Data Science Project
      </h1>

      {/* Single Project Box */}
      <div className="bg-gray-900 border-2 border-yellow-400 rounded-2xl overflow-hidden shadow-yellow-500/40 shadow-2xl hover:scale-105 hover:shadow-yellow-400/70 transition-transform duration-300 max-w-md w-full">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="object-cover w-full h-64"
        />
        <div className="p-6 text-center">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
            {project.title}
          </h2>
          <p className="text-gray-300 text-sm">{project.description}</p>
        </div>
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
