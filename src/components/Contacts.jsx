import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const ConnectWithMe = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-800 via-indigo-700 to-indigo-600 py-16 px-4 md:px-10 text-white h-screen content-center">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">Connect With Me</h2>
        <p className="text-lg mb-10">I would love 😍 to hear from you! Feel free to reach out through any of the following platforms 🤗 : </p>
        
        <div className="flex justify-center space-x-6 mb-8">
          {/* GitHub Link */}
          <a 
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-4xl" />
          </a>
          
          {/* LinkedIn Link */}
          <a 
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-4xl" />
          </a>
          
          {/* WhatsApp Link */}
          <a 
            href="https://wa.me/8451857410"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp className="text-4xl" />
          </a>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mx-auto max-w-md">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-300 mb-6 font-Pompiere text-2xl">
          &quot; Hi, I&apos;m <b>Arpit tiwari</b>. I&apos;m a passionate developer who loves building innovative solutions. Feel free to connect with me or drop me a message if you&apos;d like to collaborate or just have a chat.&quot;
          </p>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <MdOutlineMail className="text-2xl text-gray-300" />
              <a href="mailto:your-email@example.com" className="text-indigo-200 hover:underline">arpittiwari0811@gmail.com</a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectWithMe;
