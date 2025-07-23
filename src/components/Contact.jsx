import { useState } from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import SectionWrapper from './SectionWrapper';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Harap isi semua kolom!');
      return;
    }
    setStatus('sending');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwOnpojIrcb8FSlxQcswDYuRqTQ1qMGfyBZEsL72OCf9Bh23MF0d9Hex4PoF7WRAC_0/exec';

    fetch(scriptURL, { method: 'POST', body: new FormData(e.target)})
    .then(() => {
      setStatus('success');
      alert('Pesan berhasil dikirim! Terima kasih.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 2000);
    })
    .catch((error) => {
      console.error('Error!', error.message);
      setStatus('error');
      alert('Terjadi kesalahan, pesan tidak terkirim.');
      setTimeout(() => setStatus('idle'), 2000);
    });
  };

  return (
    <div className='flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] glass-card'
      >
        <p className="section-subtitle">Hubungi saya</p>
        <h3 className="section-title">Kontak.</h3>

        <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Nama Anda</span>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder="Siapa nama Anda?"
              className='input-field'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email Anda</span>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder="Apa alamat email Anda?"
              className='input-field'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Pesan Anda</span>
            <textarea
              rows={7}
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Apa yang ingin Anda sampaikan?'
              className='input-field'
              required
            />
          </label>

          <button
            type='submit'
            className='btn-primary py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md'
            disabled={status === 'sending'}
          >
            {status === 'sending' ? "Mengirim..." : "Kirim"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
