import Link from "next/link";

export default function Projects() {
  const categories = [
    { name: "Web Development", path: "/projects/web-dev" },
    { name: "Graphic Designing", path: "/projects/graphic-design" },
    { name: "Chatbots", path: "/projects/chatbot" },
    /*{ name: "Data Science", path: "/projects/data-science" },*/
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-16">
      <h1 className="text-5xl font-extrabold text-yellow-400 mb-12 text-center tracking-wide">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {categories.map((cat, i) => (
          <Link
            key={i}
            href={cat.path}
            className="bg-gray-900 text-gray-300 font-semibold flex items-center justify-center text-2xl h-64 w-full shadow-yellow-500/50 shadow-2xl rounded-2xl hover:scale-105 hover:shadow-yellow-400/70 transition-transform duration-300 border-2 border-yellow-400"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
