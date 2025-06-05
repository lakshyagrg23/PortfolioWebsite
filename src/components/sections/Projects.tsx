import React from 'react';
import '../../assets/projectAnimations.css';

interface ProjectProps {
  title: string;
  description: string[];
  technologies: string;
  timeframe: string;
  githubLink?: string;
  demoLink?: string;
  imageUrl?: string;
  imagePlaceholder: string;
}

const Project = ({ 
  title, 
  description, 
  technologies, 
  timeframe,
  githubLink,
  demoLink,
  imageUrl,
  imagePlaceholder
}: ProjectProps) => {
  return (
    <div className="project-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all hover:shadow-xl">
      <div className="flex flex-col lg:flex-row">
        {/* Project image - left side on desktop, top on mobile */}
        <div className="project-image-container lg:w-2/5 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 min-h-[200px] lg:min-h-full flex items-center justify-center">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={imagePlaceholder} 
              className="w-full h-full object-cover" 
            />
          ) : (
            <div className="text-center p-4">
              <p className="text-gray-500 dark:text-gray-400 mb-2">{imagePlaceholder}</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">Image will be placed here</p>
            </div>
          )}
        </div>
        
        {/* Content - right side on desktop, bottom on mobile */}
        <div className="lg:w-3/5 p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {title}
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2 whitespace-nowrap">
              {timeframe}
            </span>
          </div>
          
          <div className="mb-4">
            {description.map((paragraph, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-400 mb-2">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Technologies Used:
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.split(', ').map((tech, index) => (
                <span 
                  key={index} 
                  className="tech-tag px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4">
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub Repository
              </a>
            )}
            
            {/* {demoLink && (
              <a 
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-link inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                View Demo
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </a>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "MailWise: AI-Powered Email Management System",
      description: [
        "Built MailWise, an AI-powered email management platform that fetches and categorizes Gmail messages using Gmail API, Gemini AI, and OAuth authentication, reducing manual email sorting efforts by ~60%.",
        "Developed a React.js frontend with features like hover-based email previews and AI-assisted email drafting, cutting down email reading and composition time by ~40%.",
        "Improved backend efficiency by implementing child processes in Node.js, achieving more than 3 times speedup in email fetching and classification, and managed structured data via PostgreSQL, demonstrating strong backend design and scalable processing."
      ],
      technologies: "ReactJS, Tailwind CSS, NodeJS, ExpressJS, PostgreSQL, Google Gemini AI, Gmail API",
      timeframe: "Jan 2025 – Present",
      githubLink: "https://github.com/lakshyagrg23/MailWise-v5",
      demoLink: "https://mailwise-demo.vercel.app",
      imageUrl: "../../public/mailwise.png", // Add image path here
      imagePlaceholder: "MailWise Dashboard"
    },
    {
      title: "CrowdScope: AI-powered Market Insights Platform",
      description: [
        "Developed CrowdScope, an AI-powered platform that analyzes data from over 1 million Reddit posts to extract actionable market insights using Google Gemini AI and PRAW, enhancing decision-making for businesses.",
        "Designed the frontend using React.js and Tailwind CSS, and built the backend with Node.js, Express.js, and Python, ensuring a great optimization in data retrieval and analysis over previous manual methods.",
        "Integrated automated data processing and AI-driven insights, generating real-time reports across industries like product ideation, audience research, and competitor tracking, reducing manual research time by a great extent."
      ],
      technologies: "ReactJS, Tailwind CSS, NodeJS, ExpressJS, Python, Google Gemini API, Reddit PRAW API",
      timeframe: "Feb 2025 – Present",
      githubLink: "https://github.com/lakshyagrg23/CrowdScope",
      demoLink: "https://crowdscope-demo.vercel.app",
      imageUrl: "../../public/crowdscope.png", // Add image path here
      imagePlaceholder: "CrowdScope Analytics Dashboard"
    },
    {
      title: "Deepfake Detection System Using CNN and FFT",
      description: [
        "Developed a deepfake detection system using Convolutional Neural Networks (CNN) and Fast Fourier Transform (FFT) for enhanced accuracy of 85% in image and video classification.",
        "Implemented a dual-input model combining spatial image features with frequency-domain representations, improving precision from 75% to 85% and achieving high accuracy in distinguishing real and fake media.",

      ],
      technologies: "Python, TensorFlow, CNN, FFT, ReactJS",
      timeframe: "Aug 2024 – Dec 2024",
      githubLink: "https://github.com/lakshyagrg23/DeepfakeDetection",
      demoLink: "https://qft-deepfake-demo.vercel.app",
      imageUrl: "../../public/deepfake.png", // Add image path here
      imagePlaceholder: "Deepfake Detection System"
    }
  ];

  return (
    <section id="projects" className="modern-section py-16 px-4 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Projects</span>
        </h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Here are some of my recent projects that showcase my skills in full stack development, AI integration, and problem-solving.
        </p>
        
        <div className="grid grid-cols-1 gap-10">
          {projects.map((project, index) => (
            <Project 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              timeframe={project.timeframe}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              imageUrl={project.imageUrl}
              imagePlaceholder={project.imagePlaceholder}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
