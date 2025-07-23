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
      setTimeout(() => setStatus('idle'), 3000);
    })
    .catch((error) => {
      console.error('Error!', error.message);
      setStatus('error');
      alert('Terjadi kesalahan, pesan tidak terkirim.');
      setTimeout(() => setStatus('idle'), 3000);
    });
  };

  return (
    <div className='flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] glass-card'
      >
        <p className="section-subtitle">Tertarik Bekerja Sama?</p>
        <h3 className="section-title">Hubungi Saya.</h3>

        <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <div className="relative">
            <input
              type='text'
              name='name'
              id='name'
              value={formData.name}
              onChange={handleChange}
              className='input-field peer'
              placeholder=" "
              required
            />
            <label htmlFor='name' className='absolute text-sm text-text-secondary duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background-secondary px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'>
              Nama Anda
            </label>
          </div>
          <div className="relative">
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              className='input-field peer'
              placeholder=" "
              required
            />
            <label htmlFor='email' className='absolute text-sm text-text-secondary duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background-secondary px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'>
              Email Anda
            </label>
          </div>
          <div className="relative">
            <textarea
              rows={7}
              name='message'
              id='message'
              value={formData.message}
              onChange={handleChange}
              className='input-field peer'
              placeholder=' '
              required
            />
            <label htmlFor='message' className='absolute text-sm text-text-secondary duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background-secondary px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'>
              Pesan Anda
            </label>
          </div>

          <button
            type='submit'
            className='btn-primary py-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md'
            disabled={status === 'sending' || status === 'success'}
          >
            {status === 'sending' ? "Mengirim..." : status === 'success' ? "Terkirim!" : "Kirim"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
