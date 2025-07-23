import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from './SectionWrapper';

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-subtitle">Pembelajaran & Prestasi</p>
        <h2 className="section-title">Sertifikasi.</h2>
      </motion.div>

      <motion.div 
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-12 flex justify-center"
      >
        <a 
          href="https://coursera.org/verify/specialization/QG3SZH3EVR8L" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group block w-full md:w-3/4 lg:w-2/3 rounded-2xl overflow-hidden glass-card p-0"
        >
          <div className="overflow-hidden rounded-lg">
            <img 
              src="/images/certificate.png" 
              alt="Sertifikat Machine Learning" 
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
          <p className="text-center p-4 text-text-secondary group-hover:text-accent transition-colors">
            Lihat Verifikasi di Coursera
          </p>
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Certifications, 'certifications');
