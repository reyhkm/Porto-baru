const SectionWrapper = ({ children, id, className }) => {
  return (
    <section
      id={id}
      className={className}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
