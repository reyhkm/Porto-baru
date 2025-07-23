import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const ProjectModal = ({ isOpen, onClose }) => {
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-dark-secondary text-text-light rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10">
              <FaTimes size={24} />
            </button>
            <div className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4 text-white">Arum - Barista AI</h2>
              
              <div className="mb-6">
                <motion.div 
                  className="overflow-hidden rounded-lg border border-gray-700"
                  animate={{ height: isImageExpanded ? 'auto' : 300 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <img src="/images/project-arum-detail.png" alt="Arum - Mobile Screenshot" className="w-full h-auto object-cover object-top" />
                </motion.div>
                {!isImageExpanded && (
                  <p onClick={() => setIsImageExpanded(true)} className="text-center text-accent cursor-pointer hover:underline mt-2">
                    Lihat Selengkapnya
                  </p>
                )}
              </div>

              <p className="text-base md:text-lg text-text-gray mb-6">
                Arum adalah asisten virtual yang dirancang untuk meningkatkan pengalaman pemesanan di kafe virtual. Dengan integrasi Google Gemini Flash, Arum mampu:
              </p>
              <ul className="list-disc list-inside pl-2 mb-6 text-text-gray space-y-2">
                <li>Memahami bahasa alami pelanggan.</li>
                <li>Memberikan rekomendasi menu yang personal.</li>
                <li>Menangani pertanyaan seputar menu dan kafe.</li>
                <li>Memproses pesanan dengan akurat.</li>
                <li>Berinteraksi dengan ramah dan efisien.</li>
              </ul>
              <p className="text-base md:text-lg text-text-gray mb-4">
                Proyek ini dibangun menggunakan teknologi berikut:
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Flask</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Google Gemini Flash</span>
              </div>
              <a href="https://aicoffee.pages.dev" target="_blank" rel="noopener noreferrer" className="inline-block text-accent hover:underline text-base md:text-lg font-semibold">
                Lihat Demo Langsung
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
