import { motion } from 'framer-motion';

const Hero = () => {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      
      <motion.div 
        className="relative z-10 px-4 flex flex-col items-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.p 
          className="text-lg text-accent font-sans font-medium mb-2"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        >
          Halo, saya
        </motion.p>
        <motion.h1 
          className="text-5xl md:text-7xl font-serif font-bold mb-4 text-text-primary"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } } }}
        >
          Reykal Al Hikam
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-text-secondary max-w-2xl mb-8 font-sans"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } } }}
        >
          Seorang <strong className="text-text-primary">AI Engineer</strong> dengan hasrat untuk membangun solusi machine learning yang inovatif dan berdampak.
        </motion.p>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } } }}
        >
          <a 
            href="#projects" 
            onClick={handleScrollToProjects}
            className="btn-primary"
          >
            Lihat Proyek Saya
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
