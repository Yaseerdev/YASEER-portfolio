import { motion } from 'framer-motion';

const experience = [
  {
    role: 'Founder & Lead Developer',
    company: 'Stable Bricks Engineering',
    date: '2025 - Present',
    description: 'Leading the frontend development of multiple projects using React and Next.js. Collaborating with designers and backend developers to deliver high-quality web applications that scale.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelance / Startups',
    date: '2020 - 2025',
    description: 'Developed and maintained user-facing features using modern JavaScript frameworks. Improved website performance and accessibility, driving higher user engagement.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 sm:px-10 lg:px-12 bg-white dark:bg-black">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-left text-gray-900 dark:text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div className="flex flex-col">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-t border-gray-200 dark:border-gray-800"
            >
            
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {job.date}
              </div>

            
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {job.role}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4 font-medium">
                  {job.company}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {job.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}