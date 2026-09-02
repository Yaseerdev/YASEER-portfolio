import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navigation({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-sm'
          : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-12 flex justify-between items-center">
        
 
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gray-900 dark:bg-white rounded-full flex items-center justify-center">
            <span className="text-white dark:text-gray-900 font-bold text-xl">Y</span>
          </div>
          <span className="font-bold tracking-widest text-xl text-gray-900 dark:text-white">
            YASEER
          </span>
        </a>

 
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">About</a>
          <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">Skills</a>
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">Projects</a>
          <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">Experience</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium">Contact</a>
          
          {/* Clean Dark/Light Toggle */}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
          </button>

          {/* The "Founder" Button - No more Blue! */}
          <a 
            href="/resume.pdf" 
            className="px-6 py-2.5 bg-gray-900 text-white rounded-md font-medium hover:bg-black dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors"
          >
            Resume
          </a>
        </div>

    
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 text-gray-600 dark:text-gray-300"
          >
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-900 dark:text-white"
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

    
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
            <a href="#skills" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Skills</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Experience</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
            <a 
              href="/resume.pdf" 
              className="mt-2 px-6 py-2 bg-gray-900 text-white rounded-md font-medium text-center hover:bg-black dark:bg-white dark:text-gray-900"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}