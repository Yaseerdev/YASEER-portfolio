import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-5 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
            Hi, I'm <span className="text-green-800">Yaseer Dauda </span>
          </h1>
          
          <div className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300 mb-8 font-bold">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1000,
                'Creative Developer',
                1000,
                'Creative Freelancer',
                1000,
                'Creative Designer|',
                1000,
              ]}
              wrapper="span"
              repeat={Infinity}
              speed={50}
            />
          </div>
          
          {}
        </motion.div>
      </div>
    </section>
  );
}