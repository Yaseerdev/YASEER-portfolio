import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-10 sm:px-10 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate developer with a focus on creating user-friendly, accessible, and performant web applications. 
              With over 3 years of experience, I've worked with various technologies and delivered projects for clients worldwide.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              My expertise includes React, Next.js, Node.js, and modern CSS frameworks. I'm always eager to learn new technologies 
              and take on challenging projects that push me out of my comfort zone.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Let's Talk
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                className="px-6 py-3 border-2 border-green-900 text-blue-800 dark:text-blue-green dark:border-blue-900 rounded-lg font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-900 dark:hover:text-white transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Download Resume
              </motion.a>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden">
              {/* Replace with your image */}

              <img 
                src="/images/avater.png"
                alt="Yaseer Dauda"
                className="w-full h-full object-cover"/>


              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-white text-lg">Your Image</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}