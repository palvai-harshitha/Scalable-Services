// /controllers/AuthController.js

const AuthService = require('../Services/AuthService');

// Controller function for register route
const register = async (req, res) => {
  const userData = req.body;  // Get user data from request body

  try {
    // Call the service to send the data to the external API
    const response = await AuthService.registerUser(userData);

    // Return the external response
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const userData = req.body;  // Get user data from request body

  try {
    // Call the service to send the data to the external API
    const response = await AuthService.loginUser(userData);

    // Return the external response
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  const userData = req.body;  // Get user data from request body

  try {
    // Call the service to send the data to the external API
    const response = await AuthService.logoutUser(userData);

    // Return the external response
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  register,
  login,
  logout
};
