"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function GraphicDesign() {
  // your designs
  const designs = [
    {
      id: 0,
      image: "/projects/sparklinggd.png",
      title: "Book Cover Design",
      desc: "A modern and minimal Book cover designed using Canva.",
    },
    {
      id: 1,
      image: "/projects/greeting1.png",
      title: "Greeting Design",
      desc: "An eye-catching greeting design using canva.",
    },
    {
      id: 2,
      image: "/projects/bytemindbotimg.png",
      title: "Thumbnail",
      desc: "Thumbnail designed to visualize topics.",
    },
    {
      id: 3,
      image: "/projects/greeting 3.png",
      title: "Greeting Design",
      desc: "Simple yet elegant greeting design",
    },
    {
      id: 4,
      image: "/projects/pak1img.png",
      title: "Sports Design",
      desc: "A high-quality sports celebration visualizing design",
    },
    {
      id: 5,
      image: "/projects/greeting4.png",
      title: "Greeting Design",
      desc: "Simple yet elegant greeting design",
    },
    {
      id: 6,
      image: "/projects/IMG-20251017-WA0004.jpg",
      title: "Business or Visiting Cards",
      desc: "A modern, professional design that captures your brand identity and leaves a lasting impression.",
    },
    {
      id: 7,
      image: "/projects/IMG-20251017-WA0010.jpg",
      title: "Advertisement Design",
      desc: "A creative and eye-catching design made to promote your brand and attract customers instantly.",
    },
    {
      id: 8,
      image: "/projects/IMG-20251017-WA0007.jpg",
      title: "Business or Visiting Cards",
      desc: "A modern, professional design that captures your brand identity and leaves a lasting impression.",
    },
    {
      id: 9,
      image: "/projects/IMG-20251017-WA0009.jpg",
      title: "Advertisement Design",
      desc: "A creative and eye-catching design made to promote your brand and attract customers instantly.",
    },
    {
      id: 10,
      image: "/projects/IMG-20251017-WA0005.jpg",
      title: "Brand Design",
      desc: "A creative and eye-catching design made to promote your brand and attract customers instantly.",
    },
    {
      id: 11,
      image: "/projects/IMG-20251017-WA0006.jpg",
      title: "GreetingDesign",
      desc: "Simple yet elegant greeting design",
    },
    {
      id: 12,
      image: "/projects/IMG-20251017-WA0008.jpg",
      title: "Advertisement Design",
      desc: "A creative and eye-catching design made to promote your brand and attract customers instantly.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [showFull, setShowFull] = useState(false);

  // auto slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % designs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [designs.length]);

  // manual controls
  const nextSlide = () => setCurrent((prev) => (prev + 1) % designs.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + designs.length) % designs.length);

  const design = designs[current];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-yellow-400 mb-10 text-center">
        Graphic Designing Projects
      </h1>

      {/* Single Project Box */}
      <div className="relative bg-gray-900 border-4 border-yellow-400 rounded-2xl shadow-yellow-500/50 shadow-2xl p-6 w-full max-w-3xl flex flex-col items-center justify-center">
        <div
          className="relative cursor-pointer group"
          onClick={() => setShowFull(true)}
        >
          <Image
            src={design.image}
            alt={design.title}
            width={800}
            height={500}
            className="rounded-lg object-cover w-full h-[400px] transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-lg font-semibold text-yellow-400">
            Click to view full image
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-yellow-400 mt-4">
          {design.title}
        </h2>
        <p className="text-gray-300 mt-2 text-center max-w-2xl">
          {design.desc}
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center w-full mt-4">
          <button
            onClick={prevSlide}
            className="bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-500 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-500 transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Back Buttons */}
      <div className="mt-8 flex gap-4">
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

      {/* Full Image Popup */}
      {showFull && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-yellow-400 text-3xl hover:text-white transition"
            onClick={() => setShowFull(false)}
          >
            <FaTimes />
          </button>
          <Image
            src={design.image}
            alt={design.title}
            width={1200}
            height={800}
            className="rounded-xl max-w-[90vw] max-h-[80vh] object-contain animate-zoomIn"
          />
        </div>
      )}
    </section>
  );
}
