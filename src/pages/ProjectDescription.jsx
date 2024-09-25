import { useParams } from 'react-router-dom';
import projectData from '../data/projectData';
import { useState } from 'react';

const ProjectDescription = () => {
  const { title } = useParams();
  const project = projectData.find(proj => proj.title === title);
  const [mainImg, setMainImg] = useState(project.imgArray[0]);

  if (!project) {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4 text-indigo-500">Project Not Found</h1>
        <p className="text-white">The project data is missing or you navigated here directly. Please go back to the projects list.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 bg-gray-900 shadow-lg">
      <h1 className="text-4xl font-extrabold mb-6 text-indigo-400">
        {project.title.toUpperCase()}
      </h1>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Main Image */}
        <div className="flex-1">
          <img
            src={mainImg}
            alt={project.title}
            className="w-full max-h-svh object-cover mb-4 rounded-lg shadow-md"
          />
        </div>
        
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-2 overflow-x-scroll">
          {project.imgArray.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-20 rounded-lg cursor-pointer ${img === mainImg ? 'border-4 border-indigo-500' : ''}`}
              onClick={() => setMainImg(img)}
            />
          ))}
        </div>
      </div>

      <p className="text-lg text-gray-300 mb-6">{project.description}</p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Technologies Used:</h2>
        <div className="flex flex-wrap">
          {project.Technology.map((tech, index) => (
            <span
              key={index}
              className="bg-indigo-200 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Features:</h2>
        <ul className="list-disc list-inside text-lg text-gray-300 font-light space-y-2">
          {project.Features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {project.githubLink && (
        <a
          href={project.githubLink}
          className="inline-block mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      )}
    </div>
    
  );
};

export default ProjectDescription;
