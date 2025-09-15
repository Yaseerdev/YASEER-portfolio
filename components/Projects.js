// components/Projects.js
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';


const projects = [
  {
    id: 1,
    title: 'NPM-Packager AI',
    description: 'Create and deploy NPM packages with AI in minutes. NPM-Packager helps you build, document, and publish NPM packages using AI. Features AI package generation, one-click publishing to NPM and GitHub, and comprehensive package management with analytics.',
    image: '/images/projects/project-1.jpg',
    tags: ['React', 'Next.js', 'Tailwind', 'Stripe'],
    github: '#',
    live: 'https://npm.doudgaya.xyz/',
  },
  {
    id: 2,
    title: 'Nillar Magazines',
    description: 'Modern digital magazine platform with subscription management, content delivery, and analytics for financial and business publications..',
    image: '/images/projects/project-2.jpg',
    tags: ['React', 'Next.js', 'Tailwind', 'Stripe'],
    github: '',
    live: 'https://nillar.com/',
  },
  {
    id: 3,
    title: 'Nexthink Exchange',
    description: 'Next-generation cryptocurrency trading and exchange platform that provides a seamless experience for buying, selling, and swapping digital assets. The platform focuses on security, speed, transparency, and accessibility, making it suitable for beginners and professional traders alike..',
    image: '/images/projects/crypto-project-3.jpg',
    tags: ['TypeScript',  'Web3.js / Ethers.js' ,'Solidity / Smart Contracts' , 'React', 'Next.js', 'Tailwind', ],
    github: '#',
    live: '#',
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id="projects" className="py-25 px-12 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Here are some of the projects I've worked on. Each one represents a unique challenge and solution.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                {/* Project image with fallback */}
                <Image
                  src={project.id === 2 ? (document.documentElement.classList.contains('dark') ? '/images/project-black-2.png' : '/images/project-white-2.png') : project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Hide the broken image and show gradient overlay
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.github} 
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <CodeBracketIcon className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  
                  <a 
                    href={project.live} 
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}