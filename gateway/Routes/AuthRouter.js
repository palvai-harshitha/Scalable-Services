// /routes/AuthRouter.js

const express = require('express');
const router = express.Router();
const AuthController = require('../Controllers/AuthController');

// POST route for registering the user
router.post('/register', AuthController.register); //post
router.post('/login', AuthController.login); 
router.post('/logout', AuthController.logout); 


module.exports = router;
