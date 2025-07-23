import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const socialLinks = [
  { href: 'https://github.com/reyhkm', icon: FaGithub, name: 'GitHub' },
  { href: 'https://www.linkedin.com/in/reykal-al-hikam-469956286/', icon: FaLinkedin, name: 'LinkedIn' },
  { href: 'https://www.instagram.com/reyhkm', icon: FaInstagram, name: 'Instagram' },
];

const Footer = () => {
  return (
    <footer className="bg-background-secondary text-text-secondary py-8 border-t border-slate-800">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center sm:text-left">
          &copy; {new Date().getFullYear()} Reykal Al Hikam. All rights reserved.
        </p>
        <div className="flex gap-6">
          {socialLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={link.name}
              className="group relative text-2xl hover:text-accent transition-transform duration-300 hover:scale-125"
            >
              <link.icon />
              <span className="absolute bottom-full mb-2 w-auto p-2 text-xs text-white bg-slate-800 rounded-md scale-0 group-hover:scale-100 transition-transform origin-bottom whitespace-nowrap">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
