import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "FoodTuck(Quik-commerce)",
      image: "/projects/food tuck.png",
      link: "https://ecommerce-figmah-3.vercel.app/",
      desc: "An elegant and modern food eCommerce platform built with Next.js and Tailwind CSS, designed for smooth browsing and fast delivery experiences.",
    },
    {
      title: "Resume Builder",
      image: "/projects/resumeimg.png",
      link: "https://resume-builder-plum-mu.vercel.app/",
      desc: "Create professional resumes effortlessly with this interactive HTML, CSS, and JavaScript tool that helps you stand out in style.",
    },
    {
      title: "Next.js Quiz App",
      image: "/projects/quizimg.png",
      link: "https://quiz-app-six-rust-96.vercel.app/",
      desc: "A sleek quiz platform for practicing Next.js concepts — featuring Easy, Medium, and Hard levels, crafted with Next.js and Tailwind CSS for a dynamic UI.",
    },
    {
      title: "Tic Tac Toe Game",
      image: "/projects/tic tac toe img.png",
      link: "https://tic-tac-toe-by-aleema-mjer.vercel.app/",
      desc: "A classic mind-refreshing game built using HTML, CSS, and JavaScript, offering a minimalist design and endless fun.",
    },
    {
      title: "Vegie.com(Quik-commerce)",
      image: "/projects/veggieimg.png",
      link: "https://veggie-com.vercel.app/",
      desc: "A fresh and fast quick-commerce web app for vegetables, powered by Next.js and Tailwind CSS — delivering a clean UI and smooth user experience.",
    },
    {
      title: "Simple Calculator",
      image: "/projects/simcalimg.png",
      link: "https://simple-calculator-three-orpin.vercel.app/",
      desc: "A simple yet stylish JavaScript-powered calculator designed with HTML and CSS for quick and reliable daily calculations.",
    },
    {
      title: "Pizza Paradise(Quiz-commerce)",
      image: "/projects/pizzaparaimg.png",
      link: "https://pizzaparadiseweb.vercel.app/",
      desc: "A tempting pizza quick-commerce site built with HTML, CSS, and JavaScript, offering mouthwatering designs and a smooth shopping flow.",
    },
    {
      title: "Unit Counter",
      image: "/projects/ucounterimg.png",
      link: "https://unit-counter-buiuwlmzz2ychswri5yevr.streamlit.app/",
      desc: "A handy Python script that counts and tracks different units or quantities effortlessly — perfect for data or inventory tasks.",
    },
    {
      title: "password generator",
      image: "/projects/pgimg.png",
      link: "https://passwordgenerator-hcbn9imvjjdfo5pf3v4opw.streamlit.app/",
      desc: "A secure Python tool that creates strong, random passwords instantly to enhance your online safety and privacy.",
    },
    {
      title: "Unit convertor",
      image: "/projects/uconvertor.png",
      link: "https://unit-convertor-d5xxynm4ryefzp5pu6naiz.streamlit.app/",
      desc: "A simple yet efficient Python program that converts between various units — quick, accurate, and easy to use.",
    },
    /*{
      title: "Portfolio Website",
      image: "/projects/portfolio.png",
      link: "https://yourportfolio.vercel.app",
      desc: "A modern personal portfolio built with Next.js & Tailwind CSS.",
    },*/
  ];

  return (
    <section className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold text-yellow-400 mb-10 text-center">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-yellow-400/40 transform hover:-translate-y-2 transition-all duration-300"
          >
            {/* ✅ Fix: Only render Image if valid src exists */}
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="object-cover w-full h-56"
              />
            ) : (
              <div className="w-full h-56 bg-gray-800 flex items-center justify-center text-gray-500 italic">
                No Image Available
              </div>
            )}

            <div className="p-5 text-center">
              <h2 className="text-2xl font-semibold text-yellow-400">
                {project.title}
              </h2>
              <p className="text-gray-400 text-sm mt-2">{project.desc}</p>

              {/* ✅ Safe link: only render if a real link exists */}
              {project.link ? (
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-block mt-4 text-sm font-medium text-black bg-yellow-400 px-5 py-2 rounded-lg hover:bg-yellow-500 transition"
                >
                  View Project
                </Link>
              ) : (
                <span className="inline-block mt-4 text-sm text-gray-500 italic">
                  Link coming soon
                </span>
              )}
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
