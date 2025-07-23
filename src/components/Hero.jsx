import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto flex items-center">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-4 sm:px-8">
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-accent' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-accent' />
        </div>

        <div>
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary">
            Halo, saya <span className='text-accent'>Reykal</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mt-4 font-sans">
            Seorang AI Engineer yang bersemangat, mengubah ide menjadi solusi machine learning yang cerdas dan berdampak.
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about' onClick={(e) => { e.preventDefault(); document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }); }}>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-text-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-text-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
