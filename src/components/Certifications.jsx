import { motion, useMotionValue, useTransform } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from './SectionWrapper';

const Certifications = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className="section-subtitle">Pembelajaran & Prestasi</p>
        <h2 className="section-title">Sertifikasi.</h2>
      </motion.div>

      <div className="mt-12 flex justify-center items-center" style={{ perspective: 2000 }}>
        <motion.div 
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          style={{ x, y, rotateX, rotateY, z: 100 }}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            x.set(e.clientX - rect.left - rect.width / 2);
            y.set(e.clientY - rect.top - rect.height / 2);
          }}
          onMouseLeave={() => {
            x.set(0);
            y.set(0);
          }}
          transition={{ type: "spring", stiffness: 350, damping: 35 }}
          className="w-full md:w-3/4 lg:w-2/3 rounded-2xl overflow-hidden glass-card p-2"
        >
          <a 
            href="https://coursera.org/verify/specialization/QG3SZH3EVR8L" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group block"
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
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, 'certifications');
