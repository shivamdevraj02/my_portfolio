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

module.exports = exports;
