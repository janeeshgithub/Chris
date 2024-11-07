import project from "./Projects.json";
import spidey from "./spid.jpg";

const Projects = () => {
  return (
    <>
      <div className="text-center font-bold">
        <h1 className="text-2xl md:text-4xl lg:text-5xl">Projects</h1>
        <br />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {project.map((project, index) => (
          <div
            key={index}
            className="border border-cyan-200 rounded-lg p-10 text-center bg-[rgba(22,17,47,0.398)] backdrop-blur-lg relative cursor-pointer transition-all duration-300 ease-in-out"
          >
            <img
              src={project.imagesrc || spidey}
              alt={project.title}
              className="w-full h-auto rounded-lg border border-cyan-200"
            />
            <h1 className="mt-4 text-xl font-semibold text-white">
              {project.title}
            </h1>
            <p className="mt-2 text-white">{project.description}</p>
            <p className="mt-2 text-white">
              Skills: {project.skills.join(", ")}
            </p>
            <div className="mt-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline mr-4"
              >
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
