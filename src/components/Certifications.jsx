import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const Certifications = () => {
  return (
    <SectionWrapper id="certifications" className="py-20 md:py-24 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-white">Sertifikasi</h2>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <a href="https://coursera.org/verify/specialization/QG3SZH3EVR8L" target="_blank" rel="noopener noreferrer" className="block w-full md:w-3/4 lg:w-2/3 rounded-lg overflow-hidden shadow-lg hover:shadow-accent/20 transition-shadow duration-300">
            <img src="/images/certificate.png" alt="Sertifikat Machine Learning" className="w-full h-auto" />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
