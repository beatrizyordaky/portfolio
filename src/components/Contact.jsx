import React from 'react'
import { styles } from "../styles";

const Contact = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Footer Container */}
      <div className="bg-gray-900 rounded-3xl w-full max-w-6xl mx-4 p-8 shadow-2xl">
        <div className="flex flex-row justify-between items-center">
          {/* Left Section - Name and Copyright */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-2">Beatriz Yordaky</h2>
            <p className="text-white text-sm">© 2025 by Beatriz Yordaky</p>
          </div>

          {/* Right Section - Social Links */}
          <div className="text-right">
            <h3 className="text-white text-lg font-semibold mb-3">Social</h3>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/in/beatriz-yordaky/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-purple-300 hover:text-purple-200 transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/beatrizyordaky"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-purple-300 hover:text-purple-200 transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="mailto:byordaky@gmail.com"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contact via Email"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      </a>
    </div>
  );
};

export default Contact;