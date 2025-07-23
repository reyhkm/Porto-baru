import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-background text-text-primary rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-text-secondary hover:text-white transition-colors z-10">
              <FaTimes size={24} />
            </button>
            
            <div className='w-full h-[250px] md:h-[300px]'>
                <img src={project.detailImage} alt={project.title} className="w-full h-full object-cover object-top rounded-t-2xl" />
            </div>

            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-2 text-white">{project.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className={`text-[14px] text-accent`}>#{tag}</span>
                ))}
              </div>

              <p className="text-base text-text-secondary mb-4 leading-relaxed">
                {project.description}
              </p>
              <h3 className="font-bold text-lg text-text-primary mb-2 mt-6">Fitur Utama:</h3>
              <ul className="list-disc list-inside pl-2 mb-6 text-text-secondary space-y-2">
                {project.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-6">
                Lihat Demo Langsung <FaExternalLinkAlt className="inline ml-2" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
