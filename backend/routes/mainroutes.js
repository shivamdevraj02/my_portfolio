const express = require('express');
const router = express.Router();
const mainController = require('../controller/main_controller');

// Health check
router.get('/', mainController.home);

// Contact form
router.post('/contact', mainController.submitContact);

// Skills endpoint
router.get('/skills', mainController.getSkills);

// Projects endpoint
router.get('/projects', mainController.getProjects);

// Chatbot endpoint
router.post('/chat', mainController.chatbotResponse);

module.exports = router;
