import profileImage from '../assets/new_arpit.png';
import { FaLinkedin, FaGithub, FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gray-950 text-gray-200 overflow-hidden"
    >
      {/* Main content area */}
      <div className="flex flex-col md:flex-row items-center justify-center z-10 space-y-6 md:space-y-0 md:space-x-10">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold font-DmSerif text-white">
            Hello👋, I'm Arpit Tiwari
          </h1>
          <p className="text-xl md:text-2xl font-semibold mt-4 mb-2 font-PoiretOne text-white">
            Frontend Developer
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a
              href="https://www.linkedin.com/in/arpit-tiwari-744820231"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl md:text-4xl text-blue-700 hover:text-indigo-500 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/arpit-tiwari01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl md:text-4xl text-gray-400 hover:text-gray-500 transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <img
          src={profileImage}
          alt="Arpit Tiwari - Frontend Developer"
          className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-lg"
        />
      </div>

      {/* Background Technology Icons */}
      <div className="absolute w-full h-full">
        <FaReact
          className="text-indigo-500 opacity-20 text-8xl md:text-9xl absolute"
          style={{ top: '10%', left: '20%' }}
        />
        <FaHtml5
          className="text-red-500 opacity-20 text-8xl md:text-9xl absolute"
          style={{ top: '50%', left: '10%' }}
        />
        <FaCss3Alt
          className="text-blue-500 opacity-20 text-8xl md:text-9xl absolute"
          style={{ bottom: '20%', right: '15%' }}
        />
        <FaJsSquare
          className="text-yellow-500 opacity-20 text-8xl md:text-9xl absolute"
          style={{ bottom: '10%', left: '40%' }}
        />
      </div>
    </section>
  );
};

export default Home;
