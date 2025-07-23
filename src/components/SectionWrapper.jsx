import { motion } from "framer-motion";

const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

const SectionWrapper = (Component, idName, extraClasses = "") =>
  function HOC(props) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`relative z-0 container mx-auto py-10 md:py-16 px-4 sm:px-8 ${extraClasses}`}
      >
        <span className='hash-span' id={idName}>
           
        </span>
        <Component {...props} />
      </motion.section>
    );
  };

export default SectionWrapper;
