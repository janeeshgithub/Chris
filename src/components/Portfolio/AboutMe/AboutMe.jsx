import Aboutmeinfocard from "./Aboutmeinfocard/Aboutmeinfocard";
import github from "./github.svg";
import linkedin from "./LinkedIN.png";
import instagram from "./Instagram.png";
import AboutForm from "./AboutForm";

const AboutMe = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="text-center font-bold mb-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">Follow Me</h1>
      </div>

      <div className="flex flex-wrap justify-center mb-8">
        {/* Centering social media cards */}
        <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-4 flex justify-center">
          <a
            href="https://www.instagram.com/._chris_royce._?igsh=aWJpd3c5ZmVnN3Nq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Aboutmeinfocard iconUrl={instagram} text="ChrisOfficial" />
          </a>
        </div>

        
        <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-4 flex justify-center">
          <a
            href="https://github.com/CHRIS-7777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Aboutmeinfocard iconUrl={github} text="Chrisgithub" />
          </a>
        </div>
        <div className="w-1/3 sm:w-1/4 lg:w-1/6 mb-4 flex justify-center">
          <a
            href="https://www.linkedin.com/in/chris-2oo4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Aboutmeinfocard iconUrl={linkedin} text="Christopher A" />
          </a>
        </div>
      </div>

      <div className="text-center font-bold mb-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">
          Send a Direct Message
        </h1>
      </div>
      <div className="mb-8 flex justify-center">
        <AboutForm />
      </div>
    </section>
  );
};

export default AboutMe;
