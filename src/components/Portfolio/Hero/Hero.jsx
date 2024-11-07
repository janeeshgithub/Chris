
import { Typewriter } from "react-simple-typewriter";
import Profile from "./chris1.png";
  
const Hero = () => {
  return (
    <section className="relative flex items-center justify-center py-20">
      <div className="hero-bg absolute inset-0 z-0"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-semibold text-white mb-4">
              <Typewriter
                words={["Hey ! Guys, Welcome To my Portfolio. . ."]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={115}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </h1>

            <h1 className="text-2xl text-white mb-8">
              <Typewriter
                words={[
                  "Flutter Designer",
                  "Coder",
                  "Pentester",
                  "Ethical Hacker",
                  "Bug Bounty Analyzer",
                  "Linux(Debian)",
                  "React Js"
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={900}
              />
            </h1>
          </div>

          <div className="md:w-1/2 md:ml-6 flex justify-center">
            <div className="w-72 h-72 border-2 border-blue-100 flex items-center justify-center overflow-hidden">
              <img
                src={Profile}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-out hover:scale-110"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
