import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-accent">AI Engineer</span> & Web Developer
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mt-6 font-sans"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Saya merancang dan membangun solusi cerdas berbasis data yang fungsional, elegan, dan memberikan pengalaman pengguna yang luar biasa.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10"
        >
          <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary">
            Jelajahi Lebih Lanjut
          </a>
        </motion.div>
      </div>

      <div className='absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center z-20'>
        <a href='#about' onClick={(e) => { e.preventDefault(); document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }); }}>
          <div className='w-[35px] h-[64px] rounded-3xl border-2 border-text-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-text-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
