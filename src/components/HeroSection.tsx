import { motion } from 'framer-motion';
import { Download, Linkedin, Github, Eye } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

export const HeroSection = () => {
  const { text, cursor } = useTypewriter({
    words: ['Full-Stack Web Developer', 'AI Software Engineer'],
    typeSpeed: 100,
    deleteSpeed: 50,
    delayBetweenWords: 2000,
  });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-50"></div>

      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-cyan/10"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
            >
              <div className="text-4xl">{'</>'}</div>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-blue transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-accent-cyan transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
                <div className="text-gray-400 flex items-center gap-1">
                  <Eye size={20} />
                  <span className="text-sm">1.8K</span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-light mb-4 tracking-tight"
            >
              Sidar Adigüzel
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-2">
                <span className="text-white">Software</span>{' '}
                <span className="text-gradient font-medium">Engineer</span>
                <span className="text-accent-cyan animate-glow">{cursor}</span>
              </h2>
              <div className="h-8 text-xl md:text-2xl text-accent-cyan font-light">
                {text}
                <span className="animate-pulse">{cursor}</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-gray-400 text-lg mb-8 max-w-2xl leading-relaxed"
            >
              Software engineering student passionate about turning ideas into scalable digital
              products. Experienced in full-stack development with Flutter, Node.js, and React.
              Developed mobile apps, browser extensions, Unity games, and published a Dart package
              on pub.dev. Known for learning fast, collaborating effectively, and simplifying
              complex concepts through code and education.
            </motion.p>

            <motion.a
              href="/cv.pdf"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-accent-cyan text-accent-cyan rounded-full hover:bg-accent-cyan hover:text-white transition-all duration-300 group"
            >
              <span className="font-medium">CV</span>
              <Download
                size={20}
                className="group-hover:translate-y-1 transition-transform duration-300"
              />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="flex-shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Profile"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
