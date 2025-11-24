import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    year: '2025 - Present',
    title: 'Programming and AI Instructor',
    company: 'Bilim Güngören',
    description:
      'Delivered beginner-friendly programming lessons (variables, loops, conditionals) to middle school students through interactive and engaging sessions. Designed and created custom learning materials and mini-projects to explain core AI principles and real-world applications. Mentored students in hands-on activities to foster critical thinking, creativity, and problem-solving skills.',
    tags: ['Python', 'Machine Learning', 'Scratch'],
  },
  {
    year: '2024 - 2025',
    title: 'Software Engineering Student',
    company: 'Istanbul Health and Technology University',
    description:
      'Pursuing Bachelor\'s degree in Software Engineering (English program). Strengthening theoretical foundations in algorithms, data structures, and object-oriented programming while developing real-world projects. Active participation in coding competitions and hackathons.',
    tags: ['Java', 'C++', 'Algorithms', 'Data Structures'],
  },
  {
    year: '2023 - 2024',
    title: 'Full-Stack Developer',
    company: 'Freelance',
    description:
      'Developed mobile applications using Flutter with Firebase backend integration. Built responsive web applications using React and Node.js. Published open-source Dart packages on pub.dev. Created browser extensions and Unity-based games.',
    tags: ['Flutter', 'React', 'Node.js', 'Firebase', 'Unity'],
  },
  {
    year: '2020 - 2023',
    title: 'High School Student & Aspiring Developer',
    company: 'Kars Science High School',
    description:
      'Started coding journey during high school years. Participated in various coding workshops and online courses. Built first mobile applications and web projects. Developed strong interest in software development and technology.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Mobile Apps'],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-light text-center mb-16"
        >
          <span className="text-gradient font-medium">Experience</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative bg-dark-card border border-dark-lighter rounded-2xl p-6 md:p-8 hover:border-accent-cyan/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-accent-cyan text-lg">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-dark-lighter rounded-full text-sm text-gray-300 border border-accent-blue/30">
                      {exp.year}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-accent-blue/10 text-accent-cyan text-sm rounded-full border border-accent-cyan/30 hover:bg-accent-cyan/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
