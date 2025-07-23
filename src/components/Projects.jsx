import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./SectionWrapper";

const projectData = {
  id: 'arum-ai',
  title: 'Arum - Barista AI',
  description: 'Asisten virtual untuk pemesanan kopi di kafe, memanfaatkan kekuatan Gemini Flash untuk interaksi yang natural dan cerdas.',
  tags: ['Python', 'Flask', 'Google Gemini', 'React'],
  image: '/images/project-arum.png',
  detailImage: '/images/project-arum-detail.png',
  demoLink: 'https://aicoffee.pages.dev/',
  details: [
    'Memahami bahasa alami pelanggan untuk pemesanan yang mudah.',
    'Memberikan rekomendasi menu yang dipersonalisasi.',
    'Menangani pertanyaan seputar menu dan kafe dengan cepat.',
    'Memproses pesanan dengan akurasi tinggi.',
    'Menyediakan antarmuka yang ramah dan efisien untuk meningkatkan pengalaman pelanggan.'
  ]
};

const ProjectCard = ({ project, onProjectClick, index }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={() => onProjectClick(project)}
      className="glass-card w-full sm:w-[360px] cursor-pointer"
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-full object-cover rounded-2xl'
        />
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{project.title}</h3>
        <p className='mt-2 text-text-secondary text-[14px]'>{project.description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {project.tags.map((tag) => (
          <p key={tag} className={`text-[14px] text-accent`}>
            #{tag}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = ({ onProjectClick }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-subtitle">Karya Saya</p>
        <h2 className="section-title">Proyek.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Proyek berikut menunjukkan keahlian dan pengalaman saya melalui contoh-contoh nyata dari pekerjaan saya. Setiap proyek dijelaskan secara singkat dengan tautan ke demo langsung. Ini mencerminkan kemampuan saya untuk memecahkan masalah yang kompleks, bekerja dengan teknologi yang berbeda, dan mengelola proyek secara efektif.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-7'>
        <ProjectCard project={projectData} onProjectClick={onProjectClick} index={0} />
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
