import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const AboutSection = () => {
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
          About <span className="text-gradient font-medium">Me</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: -3 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-cyan rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <img
                src="https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="About profile"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-2 border-dark-lighter"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1"
          >
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Hello! I was born on December 25, 2001, in Kars, Turkey. I graduated from Kars
                Science High School, where my interest in software development began. I started
                coding during my high school years, and over time, it turned into a true passion.
              </p>
              <p>
                I'm currently pursuing a Bachelor's degree in Software Engineering (English program)
                at Istanbul Health and Technology University. During my academic journey, I've been
                strengthening my theoretical background while developing real-world projects to gain
                hands-on experience.
              </p>
              <p>
                I have a strong interest in modern web and mobile technologies. I've developed
                mobile apps using Flutter, built user interfaces with React, and integrated backend
                services with Firebase. I also continue to deepen my knowledge in core topics such
                as algorithms, data structures, and object-oriented programming.
              </p>
              <p>
                I am a fast learner, a good team player, and always open to new technologies.
                Beyond software development, I'm also passionate about artificial intelligence, game
                development, and entrepreneurship. In my free time, I explore new tech tools and
                study open-source projects. My ultimate goal is to create sustainable and creative
                digital solutions that make people's lives easier.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
