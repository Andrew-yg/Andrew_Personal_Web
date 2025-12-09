import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail } from 'lucide-react';

export const ContactSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-30"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-light mb-8">
                        <span className="text-gradient font-medium">Get In Touch</span>
                    </h2>

                    <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                        I'm always open to Internship &Jobs opportunities.
                    </p>

                    <motion.a
                        href="mailto:andrewyg1101@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 px-8 py-4 liquid-glass-rounded text-white hover:bg-white/10 transition-all duration-300"
                    >
                        <Mail className="w-6 h-6" />
                        <span>andrewyg1101@gmail.com</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};
