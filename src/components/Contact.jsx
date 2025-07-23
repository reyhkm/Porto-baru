import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';

const Notification = ({ message, type }) => {
  if (!message) return null;
  const successStyles = 'bg-accent text-background';
  const errorStyles = 'bg-red-500 text-white';

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed top-24 left-1/2 -translate-x-1/2 p-4 rounded-lg shadow-lg font-semibold z-50 ${type === 'success' ? successStyles : errorStyles}`}
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

    fetch(scriptURL, { method: 'POST', body: new FormData(e.target)})
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
    <SectionWrapper id="contact">
      <div className="container mx-auto px-4">
        <AnimatePresence>
          {notification.message && <Notification message={notification.message} type={notification.type} />}
        </AnimatePresence>
        <h2 className="section-title">Hubungi Saya</h2>
        <motion.div 
          className="max-w-2xl mx-auto card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-center text-text-secondary mb-8">
            Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk mengirim pesan.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Nama</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="input-field" placeholder="Nama Anda" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="input-field" placeholder="Email Anda" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Pesan</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required className="input-field" placeholder="Pesan Anda..."></textarea>
            </div>
            <div className="text-center">
              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full md:w-auto disabled:bg-slate-500 disabled:shadow-none disabled:cursor-not-allowed">
                {status === 'sending' ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
