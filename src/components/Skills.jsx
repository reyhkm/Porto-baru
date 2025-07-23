import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from './SectionWrapper';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaFlask } from 'react-icons/fa';
import { SiScikitlearn, SiPandas, SiTailwindcss, SiNumpy, SiTensorflow, SiGooglecloud } from 'react-icons/si';

const skillsData = {
  "AI & Machine Learning": [
    { icon: FaPython, name: 'Python' },
    { icon: SiScikitlearn, name: 'Scikit-learn' },
    { icon: SiTensorflow, name: 'TensorFlow' },
    { icon: SiPandas, name: 'Pandas' },
    { icon: SiNumpy, name: 'NumPy' },
  ],
  "Web Development": [
    { icon: FaJs, name: 'JavaScript' },
    { icon: FaReact, name: 'React' },
    { icon: FaFlask, name: 'Flask' },
    { icon: SiTailwindcss, name: 'Tailwind CSS' },
    { icon: FaHtml5, name: 'HTML' },
    { icon: FaCss3Alt, name: 'CSS' },
  ],
  "Cloud & Tools": [
    { icon: SiGooglecloud, name: 'Google Cloud' },
  ]
};

const SkillIcon = ({ icon: Icon, name }) => (
  <motion.div
    whileHover={{ scale: 1.1, y: -5 }}
    transition={{ type: 'spring', stiffness: 300 }}
    className="w-full p-4 flex flex-col items-center justify-center gap-2 glass-card"
  >
    <Icon className="text-4xl text-accent" />
    <p className="text-sm text-text-primary text-center font-medium">{name}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className="section-subtitle">Apa yang saya kuasai</p>
        <h2 className="section-title">Teknologi & Keterampilan.</h2>
      </motion.div>

      <div className="mt-16 space-y-12">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <motion.div 
            key={category}
            variants={fadeIn("up", "spring", categoryIndex * 0.2, 0.75)}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-6 text-center md:text-left">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((skill) => (
                <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, 'skills');
