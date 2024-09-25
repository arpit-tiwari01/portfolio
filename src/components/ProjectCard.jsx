import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// ProjectCard component
const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <Link
      to={`/projects/${encodeURIComponent(title)}`} // Encode the title for safe URL
      className="group relative border p-4 mx-4 rounded-lg shadow-lg bg-white transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 text-white bg-black p-2 rounded-full border-4 border-white z-10 drop-shadow-2xl"
          onClick={(e) => e.stopPropagation()} // Prevent the anchor tag from triggering the Link click
        >
          <FaGithub />
        </a> */}
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-semibold mt-4 group-hover:text-indigo-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

// PropTypes for type-checking
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default ProjectCard;
