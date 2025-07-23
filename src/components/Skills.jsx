import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from './SectionWrapper';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaFlask } from 'react-icons/fa';
import { SiScikitlearn, SiPandas, SiTailwindcss, SiNumpy } from 'react-icons/si';

const skillsData = [
  { icon: FaPython, name: 'Python' },
  { icon: SiScikitlearn, name: 'Scikit-learn' },
  { icon: SiPandas, name: 'Pandas' },
  { icon: SiNumpy, name: 'NumPy' },
  { icon: FaFlask, name: 'Flask' },
  { icon: FaJs, name: 'JavaScript' },
  { icon: FaReact, name: 'React' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: FaHtml5, name: 'HTML' },
  { icon: FaCss3Alt, name: 'CSS' },
];

const SkillIcon = ({ icon: Icon, name, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="w-24 h-24 p-4 flex flex-col items-center justify-center gap-2 glass-card"
  >
    <Icon className="text-4xl text-accent" />
    <p className="text-sm text-text-primary text-center">{name}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-subtitle">Apa yang saya kuasai</p>
        <h2 className="section-title">Teknologi.</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {skillsData.map((skill, index) => (
          <SkillIcon key={skill.name} icon={skill.icon} name={skill.name} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, 'skills');
