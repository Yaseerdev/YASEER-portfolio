import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-16 px-6 sm:px-10 lg:px-12 bg-gray-50 dark:bg-black">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-left text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Yaseer Dauda
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
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I’m a full-stack developer and digital product builder focused on turning ideas into fast, scalable, and reliable web applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I build modern websites, business platforms, and custom digital solutions using React, Next.js, TypeScript, Node.js, APIs, databases, and third-party integrations.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I focus on building products that are clean, maintainable, secure, and built to scale — turning complex requirements into practical digital experiences.
            </p>

            
            <div className="flex gap-12 border-t border-gray-200 dark:border-gray-800 pt-6 mb-8">
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">5+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">40+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Projects Delivered</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Let's Talk
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                className="px-6 py-3 border-2 border-gray-300 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                Download Resume
              </motion.a>
            </div>
          </div>
          
          <div className="relative flex justify-center">
            <div className="w-64 h-64 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
              <img 
                src="/images/Yaseer.png"
                alt="Yaseer Dauda"
                className="w-full h-full object-cover"/>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}