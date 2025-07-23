import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about', text: 'Tentang Saya' },
  { href: '#projects', text: 'Proyek' },
  { href: '#skills', text: 'Keterampilan' },
  { href: '#contact', text: 'Kontak' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, text) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
    setActive(text);
  };

  return (
    <header className={`fixed w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="#" onClick={() => { window.scrollTo(0, 0); setActive(""); }} className="flex items-center text-2xl font-bold text-accent">
          <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 10 C 18 8, 25 6, 35 10 C 45 14, 48 22, 45 30 C 42 38, 35 44, 25 45 C 20 45.5, 15 44, 12 40 L 18 35" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 45 L 40 55" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <span className="ml-2 font-sans text-xl font-bold text-text-primary">Reykal</span>
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-accent focus:outline-none">
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8 font-sans text-sm font-medium">
            {navLinks.map(link => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href, link.text)} 
                  className={`${active === link.text ? "text-white" : "text-text-secondary"} hover:text-white transition-colors`}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background-secondary"
          >
            <ul className="flex flex-col p-4">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href, link.text)} 
                    className={`${active === link.text ? "text-white bg-accent" : "text-text-primary"} hover:text-white hover:bg-accent/50 transition-colors block py-3 text-center rounded-lg`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
