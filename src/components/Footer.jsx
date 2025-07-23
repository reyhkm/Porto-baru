import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://www.linkedin.com/in/reykal-al-hikam-469956286/', icon: FaLinkedin, color: 'hover:text-blue-500' },
  { href: 'https://www.instagram.com/reyhkm', icon: FaInstagram, color: 'hover:text-pink-500' },
];

const Footer = () => {
  return (
    <footer className="bg-dark-secondary text-text-gray py-8">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="social-links flex gap-6 mb-4">
          {socialLinks.map(link => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={`text-2xl text-gray-400 transition-all duration-300 hover:transform hover:scale-125 ${link.color}`}>
              <link.icon />
            </a>
          ))}
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Reykal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
