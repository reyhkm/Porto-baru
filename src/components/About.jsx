import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-subtitle">Perkenalan</p>
        <h2 className="section-title">Tentang Saya.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-text-secondary text-[17px] max-w-3xl'
      >
        Sebagai seorang AI Engineer, saya memiliki spesialisasi dalam mengubah data kompleks menjadi solusi machine learning yang cerdas dan efisien. Dengan keahlian di Python, Scikit-learn, dan React, saya berfokus pada pengembangan aplikasi yang tidak hanya inovatif tetapi juga intuitif dan mudah digunakan. Saya siap berkolaborasi untuk mewujudkan ide-ide Anda.
      </motion.p>

      <div className='mt-20 flex justify-center'>
        <motion.div variants={fadeIn("up", "spring", 0.5, 0.75)}>
            <img src="/images/profile.png" alt="Foto Profil Reykal" className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-lg border-4 border-accent/50" />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
