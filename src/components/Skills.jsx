import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { FaPython, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { AiOutlineRobot, AiOutlineLineChart } from 'react-icons/ai';

const skillsData = [
  { icon: FaPython, name: 'Python' },
  { icon: AiOutlineRobot, name: 'Machine Learning' },
  { icon: AiOutlineLineChart, name: 'Data Analysis' },
  { icon: FaHtml5, name: 'HTML' },
  { icon: FaCss3Alt, name: 'CSS' },
  { icon: FaJs, name: 'JavaScript' },
];

const SkillCard = ({ icon: Icon, name, index }) => (
  <motion.div 
    className="flex flex-col items-center p-4 bg-dark-secondary rounded-lg transition-all duration-300 hover:bg-accent/10 hover:-translate-y-2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Icon className="text-5xl text-accent mb-3" />
    <p className="text-base font-medium text-text-light">{name}</p>
  </motion.div>
);

const Skills = () => {
  return (
    <SectionWrapper id="skills" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-white">Keterampilan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} icon={skill.icon} name={skill.name} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
