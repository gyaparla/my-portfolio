import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  const handleMenu = (menuId) => {
    setActiveSection(menuId);
    setIsOpen(false);
    const section = document.getElementById(menuId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  // 🔹 Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-transparent fixed w-full top-0 z-50">
      <div className="text-white py-5 flex justify-between items-center max-w-6xl mx-auto px-4">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">YGR</span>
          <span className="text-[#8245ec]">/&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`hover:text-[#8245ec] transition-colors ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenu(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/gyaparla" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec] transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/gangadhara-yaparla/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec] transition-colors">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-3xl text-[#8245ec] cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-blur-lg z-50 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`hover:text-[#8245ec] transition-colors ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenu(item.id)}>{item.label}</button>
              </li>
            ))}
            <li>
              <div className="flex space-x-4">
                <a href="https://github.com/gyaparla" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec] transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/gangadhara-yaparla/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec] transition-colors">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
