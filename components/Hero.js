import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram} from 'react-icons/fa6';

export default function Hero() {
  return (
   <section id="hero" className="pt-28 md:pt-20 min-h-[65vh] flex items-center justify-center px-5 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight">
            I turn ambitious ideas into <span className="text-gray-400">scalable, revenue-generating</span> platforms.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            I partner with startups and content creators to architect high-performance web platforms that turn bold ideas into predictable, scalable revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Start a Project
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-4 border-2 border-gray-300 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              View My Work
            </motion.a>
          </div>

    
          <div className="mt-10 flex justify-center gap-6">
            <a 
              href="https://github.com/Yaseerdev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/yaseer-dauda-09062b433?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/Yaseerdev?=11" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
             <a 
              href="https://www.instagram.com/yaseerdev?igsi=MWFiNzVsNGN4dGZrbw%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}