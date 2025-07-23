import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const LoadingDots = () => (
  <div className="loading">
    <span className="inline-block w-2 h-2 bg-dark-bg/60 rounded-full"></span>
    <span className="inline-block w-2 h-2 bg-dark-bg/60 rounded-full"></span>
    <span className="inline-block w-2 h-2 bg-dark-bg/60 rounded-full"></span>
  </div>
);

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Halo, selamat datang di portofolio Reykal! Tanyakan apa saja tentang Reykal.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://gemininodejsaspri-production.up.railway.app/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat: input, history: [] })
      });
      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.response };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) { 
      console.error('Chat API error:', error);
      const errorMessage = { sender: 'bot', text: 'Maaf, terjadi kesalahan. Silakan coba lagi nanti.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[999]">
        <button onClick={() => setIsOpen(!isOpen)} className="chat-toggle w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
          {isOpen ? (
            <FaTimes className="text-background text-2xl" />
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-background">
                <circle cx="12" cy="7" r="2" fill="currentColor" />
                <circle cx="7" cy="12" r="2" fill="currentColor" />
                <circle cx="17" cy="12" r="2" fill="currentColor" />
                <circle cx="12" cy="17" r="2" fill="currentColor" />
                <path d="M12 7 L 7 12 M12 7 L 17 12 M7 12 L 12 17 M17 12 L 12 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="chat-modal"
          >
            <div className="chat-header">
              <span>Asisten AI</span>
            </div>
            <div ref={chatBodyRef} className="chat-body">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
              {isLoading && (
                <div className="chat-message bot">
                  <LoadingDots />
                </div>
              )}
            </div>
            <form onSubmit={handleSubmit} className="chat-footer">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="chat-input" 
                placeholder="Tanyakan sesuatu..." 
                autoComplete="off"
                disabled={isLoading}
              />
              <button type="submit" className="chat-send" disabled={!input.trim() || isLoading}>Kirim</button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
