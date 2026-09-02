import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 sm:px-10 lg:px-12 bg-gray-50 dark:bg-black">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Build Something <span className="text-gray-400">Impactful?</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's discuss your project and how I can help you turn your idea into a scalable, revenue-generating platform.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
      
          <motion.a
            href={`mailto:yaseerdaudagaya10@gmail.com?subject=${encodeURIComponent('Project Inquiry')}&body=${encodeURIComponent('Hi Yaseer, I would like to discuss a project with you.')}`}
            className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Start a Conversation
          </motion.a>
          
          
          <motion.a
            href="mailto:yaseerdaudagaya10@gmail.com"
            className="px-8 py-4 border-2 border-gray-300 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            Email Me Directly
          </motion.a>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row justify-center gap-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-gray-900 dark:text-white font-bold">✓</span>
            <span className="font-medium">24-Hour Response Guarantee</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-gray-900 dark:text-white font-bold">✓</span>
            <span className="font-medium">Free Initial Consultation</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-gray-900 dark:text-white font-bold">✓</span>
            <span className="font-medium">Direct Founder Access</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}