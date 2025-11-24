import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '../src_pic/Gemini_Generated_Image_5jhmvr5jhmvr5jhm.png';

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
                src={profileImage}
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
                I'm currently pursuing a Master of Engineering in ECE (Software Engineering) at Duke
                University, after completing my Computer Science degree at the University of Michigan.
                I've gained hands-on industry experience through internships at MiniMax, Microsoft, and
                DiDi, where I worked across full-stack web development, mobile engineering, and
                large-scale system design.
              </p>
              <p>
                These roles strengthened my skills in React/Next.js, Node.js, Swift, cloud-native
                architecture, and high-performance service development. I'm passionate about building
                scalable, well-designed systems—especially in full-stack engineering, distributed
                backend services, and AI-powered applications.
              </p>
              <p>
                I love turning complex technical ideas into real, user-focused products.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
