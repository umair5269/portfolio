"use client";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/60 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold tracking-wide">
          Muhammad Umair
        </h1>

        <div className="space-x-6 text-sm text-gray-300">
          <a href="#about" className="relative text-gray-400 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            About
          </a>
          <a href="#projects" className="relative text-gray-400 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Projects
          </a>
          <a href="#contact" className="relative text-gray-400 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}