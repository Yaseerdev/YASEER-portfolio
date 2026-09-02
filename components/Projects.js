import { motion } from 'framer-motion';

const projects = [
  {
    title: 'NPM-Packager AI',
    description: 'Create and deploy NPM packages with AI in minutes. Helps developers and businesses automate deployment workflows, saving hundreds of hours.',
    image: '/images/projects/project-1.jpg', 
    tech: ['React', 'Next.js', 'Tailwind', 'Stripe'],
    metric: 'Reduced manual deployment work by 80%',
    link: '',
    codeLink: 'https://github.com/Yaseerdev', 
  },
    {
    title: 'Nillar Pay',
    description: 'A suite of enterprise-grade payment and operational infrastructure solutions for Nigerian businesses. Built for compliance, reliability, and scale, processing high-volume transactions securely.',
    image: '/images/projects/project-2.jpg',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Node.js'],
    metric: '₦1.2M+ processed monthly | 99.9% uptime',
    link: 'https://nillar.com/', 
    codeLink: 'https://github.com/Yaseerdev', 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 sm:px-10 lg:px-12 bg-gray-50 dark:bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-left text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Recent Projects
        </motion.h2>

        <motion.p 
          className="text-left text-gray-600 dark:text-gray-300 max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Real platforms, real results for startups and businesses.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-4 mb-6">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {project.metric}
                  </p>
                </div>

                <div className="flex gap-4">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white font-medium hover:underline">
                    Live Demo ↗
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 font-medium hover:underline">
                    Code ↗
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