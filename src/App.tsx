import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TechnologySection } from './components/TechnologySection';
import { ProjectSection } from './components/ProjectSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-dark text-gray-100 relative overflow-hidden">
      <div className="fixed inset-0 bg-noise opacity-10 pointer-events-none"></div>

      <div className="fixed inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-cyan/5 pointer-events-none"></div>

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <TechnologySection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />

        <footer className="py-8 text-center text-gray-400 border-t border-dark-lighter">
          <p className="text-sm">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
          <p className="text-xs mt-2">
            2025 Yang (Andrew) Gao. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
