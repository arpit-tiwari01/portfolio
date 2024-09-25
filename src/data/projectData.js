import { images } from "../assets/project-img";

const projectData = [
  {
    title: "E-commerce Website",
    description:
      "A full-featured e-commerce web application built with React.js and Firebase. It includes dynamic routing, user authentication, and an admin dashboard for product management.",
    imageUrl: images.ecommerce[0], // Primary image
    githubLink: "https://github.com/arpit-tiwari01/e-commerce",
    imgArray: images.ecommerce, // Array of images
    Technology: [
      "React",
      "Context API",
      "Redux",
      "Firebase",
      "Tailwind CSS",
      "React-Router-Dom",
    ],
    Features: [
      "User authentication with Firebase",
      "Admin dashboard for adding, updating, and deleting products",
      "Dynamic routing and protected routes for admin and users",
      "Cart and order management for users",
      "Category-based product filtering",
      "Responsive design for all devices",
    ],
  },
  {
    title: "URL Shortener",
    description:
      "A simple URL shortening app built with React and Tailwind CSS. It uses the shrtco.de API to shorten URLs. It also creates a QR code for the shortened URL and tracks all click data.",
    imageUrl: images.urlShortener[0], // Primary image
    githubLink: "https://github.com/arpit-tiwari01/url_shortener",
    imgArray: images.urlShortener, // Array of images
    Technology: [
      "React",
      "Supabase",
      "Tailwind CSS",
      "JavaScript",
      "API",
      "Shadcn",
    ],
    Features: [
      "Shorten a URL",
      "Copy the shortened URL to the clipboard",
      "View the number of clicks on the shortened URL",
      "Create a QR code for the shortened URL",
    ],
  },
  {
    title: "ToDo App",
    description: "A simple ToDo app built with React and Tailwind CSS.",
    imageUrl: images.todoApp[0], // Primary image
    githubLink:
      "https://github.com/arpit-tiwari01/React/tree/main/09todoContextLocal",
    imgArray: images.todoApp, // Array of images
    Technology: ["React", "Tailwind CSS", "JavaScript"],
    Features: [
      "Add a new task",
      "Delete a task",
      "Mark a task as completed",
      "Filter tasks by status",
    ],
  },
  {
    title: "Password Generator",
    description:
      "A password generator app using React's useState and Math.random() function to generate passwords.",
    imageUrl: images.passwordGenerator[0], // Primary image
    githubLink:
      "https://github.com/arpit-tiwari01/React/tree/main/05passwordGenerator",
    imgArray: images.passwordGenerator, // Array of images
    Technology: ["React", "JavaScript"],
    Features: [
      "Generate a random password",
      "Copy the password to the clipboard",
      "Select the length of the password",
      "Include/exclude uppercase, lowercase, numbers, and symbols",
    ],
  },
];

export default projectData;
