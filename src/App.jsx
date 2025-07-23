import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ChatWidget from './components/ChatWidget';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects onProjectClick={openModal} />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
      <ProjectModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
