"use client";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import Link from "next/link"

export default function Contact() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  // 🟡 Load comments from localStorage on mount
  useEffect(() => {
    const storedComments = localStorage.getItem("visitorComments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // 🟡 Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("visitorComments", JSON.stringify(comments));
  }, [comments]);

  // Add new comment
  const handleAddComment = () => {
    if (input.trim() === "") return;
    const newComment = { id: Date.now(), text: input };
    setComments([newComment, ...comments]);
    setInput("");
  };

  // Delete a comment
  const handleDelete = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center py-16 px-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-yellow-400 mb-3">Contact Me 📩</h1>
        <p className="text-gray-300 text-lg">
          I’d love to hear from you! Feel free to reach out or drop a comment below.
        </p>
      </div>

      {/* Contact Info */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-gray-300 mb-10 shadow-lg hover:shadow-yellow-400/30 transition w-full max-w-md">
        <ul className="space-y-2">
          <li>📧 <span className="text-yellow-400">Email:</span> aleenaamir2211@email.com</li>
          <li>🔗 <span className="text-yellow-400">LinkedIn:</span> Aleena Amir</li>
        </ul>
      </div>

      {/* Comment Section */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 w-full max-w-2xl shadow-lg hover:shadow-yellow-400/30 transition">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4 text-center">
          Visitor Comments 💬
        </h2>

        {/* Comment Input */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write your comment..."
            className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-yellow-400"
          />
          <button
            onClick={handleAddComment}
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Add
          </button>
        </div>

        {/* Display Comments */}
        {comments.length === 0 ? (
          <p className="text-gray-500 text-center">No comments yet. Be the first!</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment) => (
              <li
                key={comment.id}
                className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex justify-between items-center hover:border-yellow-400 transition"
              >
                <span className="text-gray-300">{comment.text}</span>
                <button
                  onClick={() => handleDelete(comment.id)}
                  className="text-red-400 hover:text-red-500 font-semibold text-sm"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        )}
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
