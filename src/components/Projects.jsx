import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const projectData = {
  id: 'arum-ai',
  title: 'Arum - Barista AI',
  description: 'Asisten virtual untuk pemesanan kopi di kafe, memanfaatkan kekuatan Gemini Flash untuk interaksi yang natural dan cerdas.',
  tags: ['Python', 'Flask', 'Google Gemini', 'React'],
  image: '/images/project-arum.png',
  detailImage: '/images/project-arum-detail.png',
  demoLink: 'https://aicoffee.pages.dev/',
  details: [
    'Memahami bahasa alami pelanggan untuk pemesanan yang mudah.',
    'Memberikan rekomendasi menu yang dipersonalisasi.',
    'Menangani pertanyaan seputar menu dan kafe dengan cepat.',
    'Memproses pesanan dengan akurasi tinggi.',
    'Menyediakan antarmuka yang ramah dan efisien untuk meningkatkan pengalaman pelanggan.'
  ]
};

const Projects = ({ onProjectClick }) => {
  return (
    <>
      <h2 className="section-title text-center mb-12">Proyek Unggulan</h2>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="group grid md:grid-cols-2 gap-8 items-center card hover:border-accent/50 cursor-pointer p-6 md:p-8"
          onClick={() => onProjectClick(projectData)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -5 }}
        >
          <div className="overflow-hidden rounded-lg">
            <img src={projectData.image} alt={projectData.title} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-bold font-serif mb-3 text-text-primary">{projectData.title}</h3>
            <p className="text-base text-text-secondary mb-4">{projectData.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projectData.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-slate-700 text-accent rounded-full text-xs font-semibold">{tag}</span>
              ))}
            </div>
            <span className="text-accent font-semibold flex items-center gap-2">
              Klik untuk detail
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects", "bg-background-secondary");
