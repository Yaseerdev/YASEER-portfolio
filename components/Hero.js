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
          
          <div className="text-2xl md:text-4xl text-blue-900 dark:text-blue-300 mb-8 font-bold">
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
            />
          </div>
          
    {/* Add after your TypeAnimation component */}
<div className="relative flex flex-col items-center justify-center mt-10 mb-16">
  <div className="relative">
    <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-lg font-medium mb-4 text-center">
      Scroll to discover
    </p>
    
    {/* Animated progress line */}
    <div className="w-24 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div className="h-full bg-purple-500 dark:bg-blue-400 animate-[progressBar_2s_ease-in-out_infinite]"></div>
    </div>
    
    {/* Animated chevron */}
    <div className="mt-3 animate-bounce">
      <svg 
        className="w-5 h-5 text-blue-500 dark:text-blue-400 mx-auto" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M19 14l-7 7m0 0l-7-7m7 7V3" 
        />
      </svg>
    </div>
  </div>
</div>

{/* Add to your global CSS */}
<style jsx>{`
  @keyframes progressBar {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`}</style>
          
        </motion.div>
      </div>
    </section>
  );
}