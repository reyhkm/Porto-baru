import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '#about', text: 'Tentang Saya' },
  { href: '#projects', text: 'Proyek' },
  { href: '#skills', text: 'Keterampilan' },
  { href: '#contact', text: 'Kontak' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="#" className="flex items-center text-2xl font-bold text-accent">
          <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 10 C 18 8, 25 6, 35 10 C 45 14, 48 22, 45 30 C 42 38, 35 44, 25 45 C 20 45.5, 15 44, 12 40 L 18 35" stroke="#2dd4bf" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 45 L 40 55" stroke="#2dd4bf" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-accent focus:outline-none">
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-8 font-sans">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="hover:text-accent transition-colors">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-bg/95 backdrop-blur-sm"
        >
          <ul className="flex flex-col space-y-4 p-4">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="hover:text-accent transition-colors block py-2">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
