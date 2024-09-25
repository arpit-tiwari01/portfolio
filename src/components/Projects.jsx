// Import statements
import ProjectCard from "./ProjectCard.jsx";
import projectData from "../data/projectData.js";

const Projects = () => (
  <section
    id="projects"
    className="py-20 bg-gradient-to-r from-indigo-900 to-indigo-950"
  >
    <div className="container mx-auto text-center ">
      <h2 className="text-4xl font-bold mb-12 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 content-center">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl} // Access the imageUrl directly
            githubLink={project.githubLink}
          />
        ))}
      </div>
      <a
        href="https://github.com/arpit-tiwari01/React"
        className="text-white underline mt-8 inline-block"
      >
        Github Repo Link for all Projects
      </a>
    </div>
  </section>
);

export default Projects;
