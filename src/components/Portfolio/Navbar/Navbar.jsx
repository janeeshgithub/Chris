import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const openLink = (url) => {
    window.open(url, "_blank");
    setMenuOpen(false);
  };

  const buttonClasses =
    "cursor-pointer text-white font-bold relative text-[16px] w-[7em] h-[2.5em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[15px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700";

  return (
    <nav className="bg-opacity-25 bg-black backdrop-blur-lg sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <div className="flex items-center">
          <h2>CHRISTOPHER A</h2>
        </div>
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-4">
            <li>
              <a
                className="text-white text-xl p-1 font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                onClick={() => scrollToSection("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white text-xl p-1 font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="text-white text-xl p-1 font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-white text-xl p-1 font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
          <button
            className={buttonClasses}
            onClick={() => openLink("https://unisonreactjs.web.app/")}
          >
            Hit Me!
          </button>

          <button
            className={buttonClasses}
            onClick={() =>
              openLink(
                "https://drive.google.com/file/d/1JMo3W0WH0GAwf8KkoVl1vgDoYOAQxEt5/view?usp=sharing"
              )
            }
          >
            My CV
          </button>
        </div>
        <button
          className="md:hidden bg-gradient-to-r from-purple-400 to-blue-500 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-black hover:text-blue-500 transition duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-opacity-25 bg-black backdrop-blur-lg absolute top-0 left-0 w-full py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a
                className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                onClick={() => scrollToSection("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="text-white text-lg font-medium cursor-pointer transition duration-300 hover:text-blue-500"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </a>
            </li>
            <li>
              <button
                className={buttonClasses}
                onClick={() => openLink("https://unisonreactjs.web.app/")}
              >
                Hit Me!
              </button>
            </li>

            <li>
              <button
                className={buttonClasses}
                onClick={() =>
                  openLink(
                    "https://drive.google.com/file/d/1JMo3W0WH0GAwf8KkoVl1vgDoYOAQxEt5/view?usp=sharing"
                  )
                }
              >
                MY CV
              </button>
            </li>
            <li>
              <button
                className="bg-gradient-to-r from-red-400 to-red-500 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-black hover:text-red-500 transition duration-300 w-full"
                onClick={() => setMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
