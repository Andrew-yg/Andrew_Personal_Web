import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

import aiStudyAssistantImg from '../src_pic/AI_STUDY_ASSISTANT.png';
import agentJobSearchImg from '../src_pic/Agent_JobSearch.png';

// Placeholder data based on the screenshot style
const projects = [
    {
        title: 'AI_Study_Assistant',
        description: 'AI-powered research document generator that creates comprehensive research papers using advanced AI models. Features include citation management and export options.',
        tags: ['Vue', 'Nuxt.js', 'RAG', 'FastAPI', 'Cloudflare', 'MongoDB', 'LlamaIndex', 'GraphQL', 'Kubernetes', 'Docker'],
        image: aiStudyAssistantImg,
        liveUrl: '#',
        githubUrl: 'https://github.com/Andrew-yg/AI-Study-Assistant',
    },
    {
        title: 'Agent_JobSearch',
        description: 'AI-powered job search assistant that automatically finds, analyzes, and recommends top job opportunities from LinkedIn tailored to your profile and preferences.',
        tags: ['ReAct', 'LangGraph', 'LangChain', 'FastAPI', 'Next.js', 'ChromaDB', 'RAG', 'SQLite'],
        image: agentJobSearchImg,
        liveUrl: '#',
        githubUrl: 'https://github.com/Andrew-yg/Agent_JobSearch',
    },
    {
        title: 'Coming Soon',
        description: 'Coming Soon',
        tags: ['React', 'Tailwind', 'Framer'],
        image: 'bg-gradient-to-br from-gray-400/20 to-gray-500/20',
        liveUrl: '#',
        githubUrl: '#',
    },
    {
        title: 'Coming Soon',
        description: 'Coming Soon',
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
                            className="group relative liquid-glass-box overflow-hidden hover:border-accent-cyan/50 transition-all duration-300 shadow-xl flex flex-col h-full"
                        >
                            {/* Project Image */}
                            <div className="h-48 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 flex-shrink-0">
                                {project.image.startsWith('bg-') ? (
                                    <div className={`absolute inset-0 ${project.image} flex items-center justify-center`}>
                                        <div className="text-gray-500/30 text-6xl font-bold">
                                            {project.title[0]}
                                        </div>
                                    </div>
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                )}
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex flex-col gap-3 mb-4">
                                    <h3 className="text-2xl font-semibold text-white group-hover:text-accent-cyan transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs font-medium px-3 py-1 liquid-glass-rounded text-accent-blue hover:scale-105 hover:shadow-lg hover:shadow-accent-blue/20 transition-all duration-300 cursor-default"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex gap-6 mt-auto">
                                    <a
                                        href={project.liveUrl}
                                        onClick={(e) => {
                                            if (project.liveUrl === '#') {
                                                e.preventDefault();
                                            }
                                        }}
                                        className={`flex items-center gap-2 text-sm transition-colors ${project.liveUrl === '#'
                                            ? 'text-gray-500 cursor-not-allowed hover:text-gray-500'
                                            : 'text-accent-cyan hover:text-accent-blue'
                                            }`}
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
