import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const projectData = {
  title: 'Arum - Barista AI',
  description: 'Asisten virtual untuk pemesanan kopi di kafe, memanfaatkan kekuatan Gemini Flash.',
  tags: ['Python', 'Flask', 'Google Gemini Flash'],
  image: '/images/project-arum.png',
  demoLink: 'https://aicoffee.pages.dev/'
};

const Projects = ({ onProjectClick }) => {
  return (
    <SectionWrapper id="projects" className="py-20 md:py-24 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-white">Proyek Unggulan</h2>
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-accent/20 transition-all duration-300 cursor-pointer"
            onClick={onProjectClick}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
          >
            <img src={projectData.image} alt={projectData.title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold font-serif mb-2">{projectData.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{projectData.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {projectData.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-700/80 text-gray-200 rounded-full text-xs font-semibold">{tag}</span>
                ))}
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-accent font-semibold">Klik untuk detail</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
