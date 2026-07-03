const mongoose = require('mongoose');
const Contact = require('../models/contact');

const states = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting'
};

exports.home = (req, res) => {
    const dbState = mongoose.connection ? mongoose.connection.readyState : 0;
    res.json({ message: 'Backend is running!', db: states[dbState] || dbState });
};

exports.submitContact = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const contact = new Contact({
            name,
            email,
            subject: 'Contact Form Submission',
            message
        });

        await contact.save();
        res.status(201).json({ success: true, message: 'Message saved successfully', data: contact });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({ error: 'Failed to save contact message' });
    }
};

exports.getSkills = (req, res) => {
    const skillCategories = [
        {
            label: "// Frontend",
            skills: [
                { name: "HTML & CSS", level: 90 },
                { name: "Tailwind CSS", level: 82 },
                { name: "Bootstrap", level: 80 },
                { name: "JavaScript", level: 78 },
                { name: "React", level: 70 },
            ],
        },
        {
            label: "// Backend",
            skills: [
                { name: "Node.js", level: 80 },
                { name: "Express.js", level: 80 },
                { name: "MongoDB", level: 75 },
                { name: "REST APIs", level: 78 },
            ],
        },
        {
            label: "// AI / ML",
            learning: true,
            skills: [
                { name: "Python", level: 35 },
                { name: "NumPy", level: 25 },
                { name: "Pandas", level: 15 },
                { name: "ML Fundamentals", level: 20 },
            ],
        },
    ];
    res.json(skillCategories);
};

exports.getProjects = (req, res) => {
    const projects = [
        {
            icon: "🛒",
            name: "E-Commerce Platform",
            badge: null,
            desc: "A full-stack e-commerce web application with product listings, cart management, user authentication, and order flow — built and deployed independently.",
            stack: ["Node.js", "Express", "MongoDB", "React", "Tailwind"],
            live: "https://e-commerce-16sa.onrender.com",
            github: null,
        },
        {
            icon: "📚",
            name: "PrepMate",
            badge: "Hackathon",
            desc: "Smart Exam Preparation & Revision Assistant — built during a hackathon with a team. Features personalized learning paths, course management, progress tracking, and a global student community.",
            stack: ["Node.js", "Express", "MongoDB", "Team Project"],
            live: "https://code-vir-sje5.onrender.com",
            github: null,
        },
    ];
    res.json(projects);
};

exports.chatbotResponse = async (req, res) => {
    try {
        const { message } = req.body;

        if (!message || typeof message !== 'string') {
            return res.status(400).json({ error: 'Message is required' });
        }

        const normalized = message.trim().toLowerCase();
        let responseText = "I'm here to help! Ask me about my projects, skills, AI/ML focus, or how to get in touch.";

        if (normalized.includes('project')) {
            responseText = "I have built a full-stack e-commerce platform and a hackathon project called PrepMate. Both use Node.js, Express, MongoDB, and React.";
        } else if (normalized.includes('skill') || normalized.includes('technology') || normalized.includes('stack')) {
            responseText = "My current strengths are backend development with Node.js, Express, MongoDB, and frontend development with React and Tailwind. I'm also learning AI/ML fundamentals with Python, NumPy, and Pandas.";
        } else if (normalized.includes('contact') || normalized.includes('email') || normalized.includes('linkedin')) {
            responseText = "You can reach me at devrajshivam02@gmail.com, connect on GitHub at github.com/shivamdevraj02, or visit linkedin.com/in/shivam-devraj.";
        } else if (normalized.includes('ai') || normalized.includes('ml') || normalized.includes('machine learning')) {
            responseText = "I am transitioning into AI/ML engineering, focusing on combining backend systems with data science and machine learning fundamentals.";
        } else if (normalized.includes('hello') || normalized.includes('hi') || normalized.includes('hey')) {
            responseText = "Hello! I'm the portfolio assistant. Ask me about projects, skills, contact info, or AI/ML work.";
        } else if (normalized.includes('portfolio') || normalized.includes('site')) {
            responseText = "This portfolio showcases my skills in full-stack development, backend APIs, and my path toward AI/ML engineering.";
        }

        res.json({ success: true, response: responseText });
    } catch (error) {
        console.error('Chatbot response error:', error);
        res.status(500).json({ error: 'Failed to generate chat response' });
    }
};

module.exports = exports;
