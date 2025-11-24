import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Placeholder data based on the screenshot style
const projects = [
    {
        title: 'ResearchX',
        description: 'AI-powered research document generator that creates comprehensive research papers using advanced AI models. Features include citation management and export options.',
        tags: ['TS', 'Next.js', 'AI'],
        image: 'bg-gradient-to-br from-yellow-400/20 to-orange-500/20', // Placeholder gradient
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        title: 'Freshmart Store',
        description: 'Modern grocery store web application with a clean and responsive UI. Built with efficient state management using Redux, featuring cart functionality and user auth.',
        tags: ['React', 'Redux', 'Tailwind'],
        image: 'bg-gradient-to-br from-green-400/20 to-emerald-500/20',
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        title: 'Nike Reimagined',
        description: 'A sleek and modern Nike website redesign showcasing fully responsive design with smooth animations and clean UI inspired by the latest design trends.',
        tags: ['React', 'Tailwind', 'Framer'],
        image: 'bg-gradient-to-br from-gray-400/20 to-gray-500/20',
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        title: 'News Hub',
        description: 'Real time news application integrating News API to deliver headlines across various categories. Features a modern interface with category filtering and search.',
        tags: ['TS', 'React', 'API'],
        image: 'bg-gradient-to-br from-blue-400/20 to-indigo-500/20',
        liveUrl: '#',
        githubUrl: '#',
    },
];

export const ProjectSection = () => {
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
                    <span className="text-gradient font-medium">Featured Projects</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-dark-card border border-dark-lighter rounded-2xl overflow-hidden hover:border-accent-cyan/50 transition-all duration-300 shadow-xl"
                        >
                            {/* Project Image Placeholder */}
                            <div className={`h-48 ${project.image} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500/30 text-6xl font-bold">
                                    {project.title[0]}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-semibold text-white group-hover:text-accent-cyan transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-dark-lighter text-accent-blue border border-dark-lighter">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex gap-6">
                                    <a
                                        href={project.liveUrl}
                                        className="flex items-center gap-2 text-sm text-accent-cyan hover:text-accent-blue transition-colors"
                                    >
                                        <ExternalLink size={16} />
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Github size={16} />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
