import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    id: 1,
    role: 'Senior Frontend Developer',
    company: 'Tech Company',
    period: '2025 - Present',
    description: 'Led the frontend development of multiple projects using React and Next.js. Collaborated with designers and backend developers to deliver high-quality web applications.',
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'Startup',
    period: '2020 - 2025',
    description: 'Developed and maintained user-facing features using modern JavaScript frameworks. Improved website performance and accessibility.',
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 px-12">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience & Education
        </motion.h2>
        
        <div className="space-y-12" ref={ref}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative pl-8 border-l-2 border-green-900"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-green-900 rounded-full"></div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.role}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company} • {exp.period}</p>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}