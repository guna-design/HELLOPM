import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import './inquiry.css';

const InquiryBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 350, height: 500 });
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const botRef = useRef(null);
  const botHeaderRef = useRef(null);

  const handleToggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      const newWidth = e.clientX - botRef.current.getBoundingClientRect().left;
      const newHeight = e.clientY - botRef.current.getBoundingClientRect().top;
      setDimensions({ width: newWidth, height: newHeight });
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, type: 'user' };
    setMessages([...messages, userMessage]);

    const botResponse = getBotResponse(input);
    setMessages([...messages, userMessage, { text: botResponse, type: 'bot' }]);
    setInput('');
    speak(botResponse);
  };

  const getBotResponse = (userInput) => {
    const responses = {
      "hi": "Hello! How can I assist you today?",
      "how are you": "I'm just a bot, but I'm doing great! How can I help?",
      "what is your name": "I'm your inquiry bot. How can I assist you?",
      "default": "I'm sorry, I didn't understand that. Could you ask something else?"
    };
    return responses[userInput.toLowerCase()] || responses["default"];
  };

  const speak = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.pitch = 1;
      utterance.rate = 1;
      utterance.volume = 1;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <Draggable>
      <div className="bot-wrapper">
        <div 
          className={`bot-header ${isOpen ? 'active' : ''}`}
          onClick={handleToggleOpen}
          aria-label="Toggle Chat"
          ref={botHeaderRef}
        >
          <div className="bot-avatar" />
          <div className="bot-status"></div>
          <div className={`bot-indicator ${isOpen ? 'active' : ''}`} />
        </div>
        <div
          ref={botRef}
          className={`bot-body ${isOpen ? 'open' : ''}`}
          style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
        >
          <div className="chat-content">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.type === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              aria-label="Message Input"
            />
            <button className="send-button" onClick={handleSend} aria-label="Send Message">
              Send
            </button>
          </div>
          <div
            className="resize-handle"
            onMouseDown={handleMouseDown}
            aria-label="Resize Chat"
          />
        </div>
      </div>
    </Draggable>
  );
};

export default InquiryBot;
