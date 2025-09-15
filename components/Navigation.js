// components/Navigation.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';



export default function Navigation({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);

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
    ? 'py-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-lg' 
    : 'py-4 bg-transparent'
}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
      


      <motion.a 
        href="#" 
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
      >
      
<Image
          src="/images/logo-black.png"
          alt="Yaseer Dauda"
          width={40}
          height={40}
          className="mr-2 rounded-full dark:hidden" // Show only in light mode
        />

        <Image
          src="/images/logo-white.png"
          alt="Your Name Logo"
          width={40}
          height={40}
          className="mr-2 rounded-full hidden dark:block" // Show only in dark mode
        />
        <span className="text-xl font-bold text-gray-800 dark:text-white">
          YASEERDEV
        </span>
</motion.a>

        
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-gray-700" />
            )}
          </motion.button>
          
          <motion.a
            href="/resume.pdf"
            download
            className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Resume
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}