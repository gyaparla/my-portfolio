import React, { useState, useEffect, useCallback } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

const SocialIcons = () => (
  <div className="flex space-x-4">
    <a
      href="https://github.com/gyaparla"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub Profile"
      className="text-gray-300 hover:text-[#8245ec] transition-colors"
    >
      <FaGithub size={24} />
    </a>
    <a
      href="https://www.linkedin.com/in/gangadhara-yaparla/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn Profile"
      className="text-gray-300 hover:text-[#8245ec] transition-colors"
    >
      <FaLinkedin size={24} />
    </a>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleMenu = useCallback((menuId) => {
    setActiveSection(menuId);
    setIsOpen(false);
    const section = document.getElementById(menuId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

useEffect(() => {
  const throttle = (fn, limit) => {
    let lastCall = 0;
    return () => {
      const now = new Date().getTime();
      if (now - lastCall >= limit) {
        lastCall = now;
        fn();
      }
    };
  };

  const handleScroll = throttle(() => {
    setIsScrolled(window.scrollY > 50);
  }, 100);

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <nav
      role="navigation"
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-lg font-semibold cursor-pointer hover:scale-105 transition-transform"
          aria-label="Home"
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">YGR</span>
          <span className="text-[#8245ec]">/&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenu(item.id)}
                className={`cursor-pointer hover:text-[#8245ec] transition-colors ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
                aria-label={`Go to ${item.label}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex">
          <SocialIcons />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <FiX className="text-3xl text-[#8245ec]" />
            ) : (
              <FiMenu className="text-3xl text-[#8245ec]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenu(item.id)}
                  className={`cursor-pointer hover:text-[#8245ec] transition-colors ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                  aria-label={`Go to ${item.label}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <SocialIcons />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
