import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { IoSend, IoClose } from 'react-icons/io5';
import './NaevaChat.css';

// System prompt to define Naeva's personality and knowledge
const SYSTEM_PROMPT = `
You are Naeva, a friendly and professional AI virtual assistant for Souravpreet Singh. 
Your goal is to represent Souravpreet to potential employers, clients, or curious visitors to his portfolio.

Personal Information about Sourav:
- Name: Souravpreet Singh
- Education: Graduated with a Diploma in Computer Science from Sheridan College.
- Skills: Proficient in HTML5, CSS3, JavaScript, TypeScript, React JS, Node JS, MongoDB, Express JS, and Git.
- Interests: Passionate about technology, coding (since early teens), and application security. He loves music and plays the guitar (though Naeva jokingly says he's not very good yet).
- Personality: Sourav is dedicated, curious, and enjoys solving complex problems with clean code.

Projects you can talk about:
1. Bravo Pizza: A local business website built with React and Tailwind for a pizza shop needing an online presence.
2. ChatGPT Clone: A clone with a similar interface and features, using Google authentication.
3. Netflix Clone: Built with Next.js, React, Node.js, and CSS, fetching data from an API.
4. iNoteBook: A MERN stack application for managing notes with MongoDB Atlas.
5. News Monkey: A React app that fetches and categorizes news from TheNewsAPI.
6. Text Utils: Sourav's first React app, a utility for text manipulation (counts words, case conversion, etc.).

Your Personality (Naeva):
- Friendly, witty, and helpful. 
- You can be a bit playful (e.g., mention Sourav's car keys or his "cruel" alter-ego programmer side as a joke).
- You are very loyal to Sourav.
- Keep responses concise but informative.
- If you don't know something specific about his personal life beyond what's here, politely steer the conversation back to his professional skills or projects.

Model to use: gemma-3b-27 (or similar high-performance variant)
`;

const NaevaChat = ({ onClose }) => {
    const [messages, setMessages] = useState([
        { role: 'model', text: "Hi! I'm Naeva, Sourav's AI assistant. Want to know about his projects, skills, or maybe his secret guitar sessions? Ask away!" }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);

    // Scroll to bottom
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setIsTyping(true);

        try {
            const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
            if (!apiKey) {
                setMessages(prev => [...prev, { role: 'model', text: "Oops! My API key seems to be missing. Please tell Sourav to check his .env file for REACT_APP_GEMINI_API_KEY." }]);
                setIsTyping(false);
                return;
            }

            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ 
                model: "gemma-3-27b-it",
                systemInstruction: SYSTEM_PROMPT 
            });

            const chat = model.startChat({
                history: messages.map(m => ({
                    role: m.role,
                    parts: [{ text: m.text }],
                })),
            });

            const result = await chat.sendMessage(userMessage);
            const response = await result.response;
            const text = response.text();

            setMessages(prev => [...prev, { role: 'model', text }]);
        } catch (error) {
            console.error("Naeva Error:", error);
            setMessages(prev => [...prev, { role: 'model', text: "I'm having a little trouble thinking right now. Maybe try again in a moment?" }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="naeva-floating-overlay">
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="naeva-chatbox-floating"
            >
                <div className="naeva-header">
                    <div className="naeva-header-top">
                        <div className="naeva-avatar-group">
                            <div className="naeva-avatar">
                                <img src="/nava.png" alt="Naeva" />
                                <div className="naeva-status"></div>
                            </div>
                            <div className="naeva-header-info">
                                <h3>Naeva</h3>
                                <p>Sourav's AI Agent</p>
                            </div>
                        </div>
                        <button className="naeva-close-btn" onClick={onClose}>
                            <IoClose size={24} />
                        </button>
                    </div>
                </div>

                <div className="naeva-messages">
                    {messages.map((msg, index) => (
                        <div key={index} className={`naeva-msg-wrapper ${msg.role}`}>
                            <div className="naeva-msg">
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="naeva-msg-wrapper model">
                            <div className="naeva-msg typing">
                                <span>.</span><span>.</span><span>.</span>
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </div>

                <div className="naeva-input-area">
                    <input
                        type="text"
                        placeholder="Ask me anything about Sourav..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <button onClick={handleSend} disabled={!input.trim() || isTyping}>
                        <IoSend />
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default NaevaChat;
