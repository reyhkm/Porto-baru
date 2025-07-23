import { motion } from 'framer-motion';
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

const SkillCard = ({ icon: Icon, name, index }) => (
  <motion.div 
    className="card flex flex-col items-center justify-center p-6 text-center hover:border-accent/50 hover:-translate-y-2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
  >
    <Icon className="text-5xl text-accent mb-4" />
    <p className="text-base font-medium text-text-primary">{name}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Keterampilan & Teknologi</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} icon={skill.icon} name={skill.name} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
