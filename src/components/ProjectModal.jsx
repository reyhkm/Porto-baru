import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-background-secondary text-text-primary rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-text-secondary hover:text-white transition-colors z-10">
              <FaTimes size={24} />
            </button>
            
            <div className="p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-2 text-white">{project.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-700 text-accent rounded-full text-xs font-semibold">{tag}</span>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-base text-text-secondary mb-4">
                    {project.description}
                  </p>
                  <h3 className="font-bold text-lg text-text-primary mb-2">Fitur Utama:</h3>
                  <ul className="list-disc list-inside pl-2 mb-6 text-text-secondary space-y-2">
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-6">
                    Lihat Demo Langsung <FaExternalLinkAlt className="inline ml-2" />
                  </a>
                </div>
                
                <div className="flex flex-col">
                  <motion.div 
                    className="overflow-hidden rounded-lg border border-slate-700 cursor-pointer"
                    onClick={() => setIsImageExpanded(!isImageExpanded)}
                    title={isImageExpanded ? "Klik untuk mengecilkan" : "Klik untuk memperbesar"}
                  >
                    <img 
                      src={project.detailImage} 
                      alt={`${project.title} screenshot`} 
                      className={`w-full h-auto object-cover object-top transition-transform duration-500 ${isImageExpanded ? 'scale-100' : 'scale-120'}`}
                    />
                  </motion.div>
                  <p className="text-center text-accent text-sm mt-2">
                    {isImageExpanded ? "Gambar diperbesar" : "Klik gambar untuk memperbesar"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
