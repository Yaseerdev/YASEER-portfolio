import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiNodedotjs, SiPrisma, SiPostgresql } from 'react-icons/si';

const skills = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Prisma', icon: SiPrisma },
  { name: 'PostgreSQL', icon: SiPostgresql },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-12 bg-white dark:bg-black">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-left text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h2>
        
        <div className="grid grid-cols-4 md:grid-cols-8 gap-8 border-t border-gray-200 dark:border-gray-800 pt-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              title={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
            >
              <skill.icon className="w-8 h-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}