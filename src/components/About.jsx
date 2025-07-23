import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../components/SectionWrapper';
import { FaCode, FaBrain, FaUsers } from 'react-icons/fa';

const StatCard = ({ icon, title, text, delay }) => (
  <motion.div 
    variants={fadeIn("up", "spring", delay, 0.75)}
    className="glass-card text-center"
  >
    <div className="flex justify-center mb-4">
      <div className="p-3 bg-accent/20 rounded-full">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
    <p className="text-text-secondary text-sm">{text}</p>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className="section-subtitle">Perkenalan</p>
        <h2 className="section-title">Tentang Saya.</h2>
      </motion.div>

      <div className="mt-12 grid md:grid-cols-3 gap-10 items-center">
        <motion.div 
          variants={fadeIn("", "", 0.1, 1)}
          className="md:col-span-2 text-lg"
        >
          <p>
            Sebagai seorang AI Engineer dengan hasrat untuk pengembangan web, saya berspesialisasi dalam mengubah data kompleks menjadi solusi machine learning yang cerdas dan efisien. Dengan keahlian di Python, Scikit-learn, dan React, saya berfokus pada pengembangan aplikasi yang tidak hanya inovatif tetapi juga intuitif dan mudah digunakan.
            <br/><br/>
            Saya percaya pada kolaborasi dan pembelajaran berkelanjutan untuk menciptakan produk digital yang berdampak. Mari wujudkan ide-ide Anda menjadi kenyataan.
          </p>
        </motion.div>
        <motion.div 
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img src="/images/profile.png" alt="Foto Profil Reykal" className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg" />
          </div>
        </motion.div>
      </div>

      <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <StatCard 
          icon={<FaBrain className="text-accent text-3xl" />}
          title="AI & Machine Learning"
          text="Mengembangkan model prediktif dan sistem cerdas untuk memecahkan masalah dunia nyata."
          delay={0.2}
        />
        <StatCard 
          icon={<FaCode className="text-accent text-3xl" />}
          title="Full-Stack Development"
          text="Membangun aplikasi web yang responsif dan dinamis dari backend hingga frontend."
          delay={0.4}
        />
        <StatCard 
          icon={<FaUsers className="text-accent text-3xl" />}
          title="Fokus Pengguna"
          text="Menciptakan antarmuka yang intuitif dan pengalaman pengguna yang menyenangkan."
          delay={0.6}
        />
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
