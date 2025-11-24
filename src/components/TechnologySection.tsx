import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Import images
import reactLogo from '../src_pic/React-icon.svg.png';
import nextLogo from '../src_pic/nextjs-icon.svg';
import jsLogo from '../src_pic/Unofficial_JavaScript_logo_2.svg.png';
import tsLogo from '../src_pic/Typescript_logo_2020.svg.png';
import pythonLogo from '../src_pic/Python-logo-notext.svg.png';
import swiftLogo from '../src_pic/swift.svg';
import nodeLogo from '../src_pic/nodejs-icon.svg';
import expressLogo from '../src_pic/express-js-icon.webp';
import reduxLogo from '../src_pic/redux-logo.svg';
import tailwindLogo from '../src_pic/Tailwind_CSS_Logo.svg.png';
import vueLogo from '../src_pic/vue.svg';
import nuxtLogo from '../src_pic/Nuxt_logo.svg.png';
import swiftuiLogo from '../src_pic/swiftui.png';
import viteLogo from '../src_pic/Vitejs-logo.svg.png';
import graphqlLogo from '../src_pic/GraphQL_Logo.svg.png';
import fastapiLogo from '../src_pic/FastAPI_logo.svg.png';
import postgresLogo from '../src_pic/Postgresql_elephant.svg.png';
import redisLogo from '../src_pic/redis-logo.svg';
import mongoLogo from '../src_pic/mongodb-logo.svg';
import dockerLogo from '../src_pic/Docker-svgrepo-com.svg.png';
import k8sLogo from '../src_pic/Kubernetes_logo_without_workmark.svg.png';
import awsLogo from '../src_pic/Amazon_Web_Services_Logo.svg.png';
import alibabaLogo from '../src_pic/alibabacloud-color.png';

const technologiesRow1 = [
  { name: 'React', icon: reactLogo, color: '#61DAFB' },
  { name: 'Next.js', icon: nextLogo, color: '#000000' },
  { name: 'JavaScript', icon: jsLogo, color: '#F7DF1E' },
  { name: 'TypeScript', icon: tsLogo, color: '#3178C6' },
  { name: 'Python', icon: pythonLogo, color: '#3776AB' },
  { name: 'Swift', icon: swiftLogo, color: '#FA7343' },
  { name: 'Node.js', icon: nodeLogo, color: '#339933' },
  { name: 'Express.js', icon: expressLogo, color: '#000000' },
];

const technologiesRow2 = [
  { name: 'Redux', icon: reduxLogo, color: '#764ABC' },
  { name: 'Tailwind CSS', icon: tailwindLogo, color: '#06B6D4' },
  { name: 'Vue.js', icon: vueLogo, color: '#4FC08D' },
  { name: 'Nuxt.js', icon: nuxtLogo, color: '#00DC82' },
  { name: 'SwiftUI', icon: swiftuiLogo, color: '#FA7343' },
  { name: 'Vite', icon: viteLogo, color: '#646CFF' },
  { name: 'GraphQL', icon: graphqlLogo, color: '#E10098' },
];

const technologiesRow3 = [
  { name: 'FastAPI', icon: fastapiLogo, color: '#009688' },
  { name: 'PostgreSQL', icon: postgresLogo, color: '#4169E1' },
  { name: 'Redis', icon: redisLogo, color: '#DC382D' },
  { name: 'MongoDB', icon: mongoLogo, color: '#47A248' },
  { name: 'Docker', icon: dockerLogo, color: '#2496ED' },
  { name: 'Kubernetes', icon: k8sLogo, color: '#326CE5' },
  { name: 'AWS', icon: awsLogo, color: '#FF9900' },
  { name: 'Alibaba Cloud', icon: alibabaLogo, color: '#FF6A00' },
];

export const TechnologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const renderTechRow = (technologies: typeof technologiesRow1, rowIndex: number) => (
    <div className="flex flex-wrap justify-center items-center gap-6 mb-8 last:mb-0">
      {technologies.map((tech, index) => {
        const globalIndex = rowIndex * 10 + index;
        return (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: globalIndex * 0.05,
            }}
            whileHover={{ scale: 1.1, y: -5 }}
            className="group relative"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: globalIndex * 0.1,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <div
                className="absolute -inset-2 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                style={{ backgroundColor: tech.color }}
              ></div>

              <div className="relative bg-dark-card border border-dark-lighter rounded-2xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div
                  className="group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-12 h-12"
                >
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                </div>
              </div>

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <div className="bg-dark-card px-3 py-1 rounded-full text-sm whitespace-nowrap border border-dark-lighter shadow-lg">
                  {tech.name}
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-dark-lighter/30">
      <div className="absolute inset-0 bg-noise opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-light text-center mb-16"
        >
          <span className="text-gradient font-medium">Technologies</span>
        </motion.h2>

        <div className="max-w-7xl mx-auto space-y-12">
          {renderTechRow(technologiesRow1, 0)}
          {renderTechRow(technologiesRow2, 1)}
          {renderTechRow(technologiesRow3, 2)}
        </div>
      </div>
    </section>
  );
};
