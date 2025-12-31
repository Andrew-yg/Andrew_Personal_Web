import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Import company logos
import minimaxLogo from '../src_pic/minimax-color.png';
import microsoftLogo from '../src_pic/microsoft-logo.svg';
import didiLogo from '../src_pic/Didi_Chuxing.svg.png';

const experiences = [
  {
    year: 'Mar. 2025 – Jun. 2025',
    title: 'Software Engineer Intern',
    company: 'MiniMax (Hailuo AI Team) | Beijing, China',
    logo: minimaxLogo,
    logoSize: 'w-10 h-10',
    description: [
      'Architected a modular drag-and-drop upload system with end-to-end pipeline achieving 99%+ success rate. Resolved async race conditions in concurrent uploads using useRef and UUID-based callback filtering.',
      'Redesigned dual-layer JWT authentication system protecting 20+ RESTful endpoints:  real-time database session validation via PostgreSQL user lookup, preventing token reuse from deleted accounts.',
      'Engineered H5-to-App deep-linking using custom URL schemes with browser focus detection, driving a 23.3% DNU increase and an 8.5% DAU boost; also architected a layered state management system using Redux for UI state, LocalStorage for session persistence, and Reselect to prevent unnecessary re-renders.',
    ],
    tags: ['React', 'Next.js', 'Redux', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    year: 'Dec. 2024 – Mar. 2025',
    title: 'Software Engineer Intern',
    company: 'Microsoft (MAI Bing Monetization Team) | Beijing, China',
    logo: microsoftLogo,
    logoSize: 'w-16 h-16',
    description: [
      'Delivered SSR platforms using React Router and GraphQL Monorepo, integrating a type-safe schema with TypeScript and replacing three cascading REST endpoints with one nested GraphQL query, reducing fetch latency by 64%.',
      'Optimized performance through hybrid rendering (RSC + CSR) and SSR with CDN static asset optimization and WebP processing, achieving Core Web Vitals: LCP 0.83s, INP 30ms, CLS 0.04, sub-100ms TTFB.',
      'Delivered 6 MongoDB schemas with 3-level nested documents and 12+ compound indexes, reducing query latency by 30% and achieving 100+ concurrent operations via atomic updates (findOneAndUpdate) across Node.js API microservices',
    ],
    tags: ['React', 'JavaScript', 'GraphQL', 'Node.js', 'TypeScript', 'MongoDB'],
  },
  {
    year: 'Jun. 2024 – Sep. 2024',
    title: 'Software Engineer Intern',
    company: 'DiDi (E-Hailing Carpool Team) | Beijing, China',
    logo: didiLogo,
    logoSize: 'w-16 h-16',
    description: [
      'Created 10+ dynamic-rendering UI components using Masonry auto-layout and BIRD architecture, achieving complete UI/logic decoupling through a clear Interactor-Router-Presenter pattern.',
      'Enhanced performance by offloading image decoding with Core Animation and AsyncDisplayKit; built priority-based async task queues with GCD and NSOperationQueue, reducing image load time by 10%.',
    ],
    tags: ['Swift', 'Objective-C', 'Masonry', 'UIKit'],
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
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-purple rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative liquid-glass-box p-6 md:p-8 hover:border-accent-cyan/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-3">
                      <img src={exp.logo} alt={`${exp.company} logo`} className={`${exp.logoSize} object-contain`} />
                      <p className="text-accent-cyan text-lg">{exp.company}</p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-dark-lighter rounded-full text-sm text-gray-300 border border-accent-blue/30">
                      {exp.year}
                    </span>
                  </div>
                </div>

                <div className="text-gray-300 leading-relaxed mb-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <p key={i} className="flex items-start">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-accent-cyan rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 liquid-glass-rounded text-accent-cyan text-sm hover:bg-accent-cyan/20 transition-colors duration-300"
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
