import { motion } from 'framer-motion';

const Hero = () => {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-bg.jpg')", filter: 'brightness(0.6)' }}></div>
      <motion.div 
        className="relative z-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-white">Reykal</h1>
        <p className="text-lg md:text-xl text-text-gray mb-8 font-sans">Pengembang AI & Machine Learning</p>
        <a 
          href="#projects" 
          onClick={handleScrollToProjects}
          className="inline-block bg-accent hover:bg-accent-dark text-dark-bg font-bold px-8 py-3 rounded-full transition-colors duration-300 transform hover:scale-105"
        >
          Lihat Proyek
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
