import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Tentang Saya</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          <motion.div 
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img src="/images/profile.png" alt="Foto Profil Reykal" className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg" />
              <div className="absolute inset-0 rounded-full border-4 border-accent/50 animate-pulse"></div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              Saya adalah seorang <strong className="font-semibold text-text-primary">AI Engineer</strong> yang berfokus pada pengembangan solusi <strong className="text-accent">machine learning</strong> yang efisien dan dapat diskalakan. Dengan latar belakang yang kuat dalam Python dan analisis data, saya bersemangat untuk mengubah data kompleks menjadi wawasan yang dapat ditindaklanjuti dan produk cerdas.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Saya percaya pada kekuatan teknologi untuk memecahkan masalah dunia nyata. Di luar coding, saya senang menjelajahi kemajuan terbaru dalam AI dan berkontribusi pada proyek-proyek yang memberikan dampak positif.
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
