import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="http://github.com/yaseerdev"
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/yaseergaya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="https://x.com/YaseerDev?t=W9OfSBqCSxbzSJHomp2leQ&s=09"
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Twitter
            </motion.a>
            <motion.a
              href="https://www.instagram.com/yaseerdev"
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              Instagram
            </motion.a>
            <motion.a
              href="https://wa.me/+2348147384048"
              className="text-gray-300 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              WhatsApp
            </motion.a>
          </div>
          
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Yaseerdev. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}