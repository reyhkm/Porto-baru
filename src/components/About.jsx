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
        className='mt-4 text-text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Saya adalah seorang AI Engineer dengan keahlian dalam Python, Scikit-learn, dan framework web seperti Flask dan React. Saya memiliki pengalaman dalam mengubah data kompleks menjadi model machine learning yang efisien dan solusi AI yang inovatif. Saya cepat belajar, berkolaborasi erat dengan tim untuk menciptakan aplikasi yang cerdas, dapat diskalakan, dan ramah pengguna. Mari wujudkan ide-ide Anda menjadi kenyataan!
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
