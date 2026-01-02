import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Salut ! Je suis développeur Full Stack 👋", sender: "me" }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage('');
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          text: "Merci pour votre message ! Je vous répondrai bientôt 🚀", 
          sender: "me" 
        }]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  
  return (
    <section id="Contact" className={styles.contact}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.titleNumber}>03.</span> Contact
      </h2>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h3>Restons en Contact ! 🚀</h3>
          <p>Vous avez un projet en tête ? N'hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles opportunités.</p>

          <div className={styles.contactLinks}>
            <a href="mailto:amani.bourekha@univ-constantine2.dz" className={styles.contactLink}>
              📧 amani.bourekha@univ-constantine2.dz
            </a>
            <a 
              href="https://www.linkedin.com/in/amani-bourekha-5278a8395" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactLink}
            >
              💼 LinkedIn Amani BOUREKHA
            </a>
            <a 
              href="https://github.com/amanibourekha-hash" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactLink}
            >
              💻 GitHub
            </a>

          </div>
        </div>
      </div>

      {!chatOpen && (
        <div className={styles.chatPrompt} onClick={() => setChatOpen(true)}>
          <span>Contactez-moi ici</span>
          <span className={styles.promptArrow}>→</span>
        </div>
      )}

      {chatOpen && (
        <div className={styles.chatContainer}>
          <div className={styles.chatHeader}>
            <div className={styles.chatHeaderInfo}>
              <div className={styles.statusDot}></div>
              <span>Discutons ensemble !</span>
            </div>
            <button className={styles.closeChat} onClick={() => setChatOpen(false)}>✕</button>
          </div>
          <div className={styles.chatMessages}>
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`${styles.message} ${msg.sender === 'me' ? styles.myMessage : styles.userMessage}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.chatInput}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Votre message..."
              className={styles.messageInput}
            />
            <button onClick={handleSendMessage} className={styles.sendButton}>➤</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;