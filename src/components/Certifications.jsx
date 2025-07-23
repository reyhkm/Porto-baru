import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const Certifications = () => {
  return (
    <SectionWrapper id="certifications" className="bg-background-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Sertifikasi & Pencapaian</h2>
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <a 
            href="https://coursera.org/verify/specialization/QG3SZH3EVR8L" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group block w-full md:w-3/4 lg:w-2/3 rounded-xl overflow-hidden card p-4 hover:border-accent/50"
          >
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/images/certificate.png" 
                alt="Sertifikat Machine Learning" 
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <p className="text-center mt-4 text-text-secondary group-hover:text-accent transition-colors">
              Lihat Verifikasi di Coursera
            </p>
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
