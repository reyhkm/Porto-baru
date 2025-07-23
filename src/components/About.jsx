import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-white">Tentang Saya</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/images/profile.png" alt="Foto Profil" className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-lg shadow-accent/20" />
          </motion.div>
          <motion.div 
            className="md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-text-gray leading-relaxed">
              Saya adalah seorang <strong className="text-text-light">AI Engineer</strong> yang berfokus pada pengembangan solusi <strong className="text-accent">machine learning</strong> yang <strong className="text-accent">impactful</strong> dan <strong className="text-accent">scalable</strong>. Saya memiliki passion untuk menggabungkan teknologi terkini dengan pendekatan <strong className="text-text-light">problem-solving</strong> yang kreatif.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
