import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import './inquiry.css';

const InquiryBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 300, height: 400 });
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const botRef = useRef(null);
  const botHeaderRef = useRef(null);

  const handleToggleOpen = () => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      botHeaderRef.current.classList.add('bounce');
      setTimeout(() => botHeaderRef.current.classList.remove('bounce'), 1000);
    }
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
    speak(botResponse); // Call speak function to voice the bot's response
  };

  const getBotResponse = (userInput) => {
    // Replace with your own logic or API call
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
      utterance.pitch = 1; // Adjust pitch if needed
      utterance.rate = 1; // Adjust rate if needed
      utterance.volume = 1; // Adjust volume if needed
      speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis not supported in this browser.');
    }
  };

  return (
    <Draggable>
      <div className="bot-wrapper">
        <div 
          className={`bot-header ${isOpen ? 'fade-in' : ''}`}
          onClick={handleToggleOpen}
          ref={botHeaderRef}
        >
          <div className="bot-character rounded-full" />
          <span></span>
        </div>
        <div
          ref={botRef}
          className={`bot-body ${isOpen ? 'open slide-in' : ''}`}
          style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
        >
          <div className="chat-content">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start mb-4 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-3 rounded-lg max-w-xs ${msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-4 p-2 border-t border-gray-200">
            <input
              type="text"
              className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
            />
            <button
              className="bg-blue-500 text-white p-3 rounded-r-lg hover:bg-blue-600 transition duration-300 ease-in-out"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
          <div
            className="bot-resize-handle"
            onMouseDown={handleMouseDown}
          />
        </div>
      </div>
    </Draggable>
  );
};

export default InquiryBot;
