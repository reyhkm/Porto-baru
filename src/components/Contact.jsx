import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const Notification = ({ message, type, on-close }) => {
  if (!message) return null;
  const bgColor = type === 'success' ? 'bg-accent' : 'bg-red-500';
  const textColor = type === 'success' ? 'text-dark-bg' : 'text-white';

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed top-24 left-1/2 -translate-x-1/2 p-4 rounded-lg shadow-lg ${bgColor} ${textColor} font-semibold z-50`}
    >
      {message}
    </motion.div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [notification, setNotification] = useState({ message: '', type: '' });

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showNotification('Harap isi semua kolom!', 'error');
      return;
    }
    setStatus('sending');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwOnpojIrcb8FSlxQcswDYuRqTQ1qMGfyBZEsL72OCf9Bh23MF0d9Hex4PoF7WRAC_0/exec';

    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(() => {
      setStatus('success');
      showNotification('Pesan berhasil dikirim!', 'success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 2000);
    })
    .catch((error) => {
      console.error('Error!', error.message);
      setStatus('error');
      showNotification('Terjadi kesalahan, pesan tidak terkirim.', 'error');
      setTimeout(() => setStatus('idle'), 2000);
    });
  };

  return (
    <SectionWrapper id="contact" className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <Notification message={notification.message} type={notification.type} />
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-white">Hubungi Saya</h2>
        <motion.div 
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nama</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full p-3 bg-dark-secondary text-text-light border border-gray-700 rounded-md focus:border-accent focus:ring focus:ring-accent/30 transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full p-3 bg-dark-secondary text-text-light border border-gray-700 rounded-md focus:border-accent focus:ring focus:ring-accent/30 transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Pesan</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className="mt-1 block w-full p-3 bg-dark-secondary text-text-light border border-gray-700 rounded-md focus:border-accent focus:ring focus:ring-accent/30 transition-colors"></textarea>
            </div>
            <button type="submit" disabled={status === 'sending'} className="w-full bg-accent hover:bg-accent-dark text-dark-bg font-bold py-3 rounded-md transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed">
              {status === 'sending' ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
