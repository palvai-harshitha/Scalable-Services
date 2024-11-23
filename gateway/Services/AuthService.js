// /services/AuthService.js

const axios = require('axios');
const { logout } = require('../Controllers/AuthController');

// Function to send the request to the external API
const registerUser = async (userData) => {
  try {
    // Send the POST request to the external API
    const response = await axios.post('http://15.206.134.193:4005/api/auth/register', userData);
    console.log(response);
    // Return the external response
    return response.data;
  } catch (error) {
    //console.error('Error while registering:', error);
    //return error;
    throw new Error('Error in sending request to the external API: '+error.message);
  }
};

const loginUser = async (userData) => {
  try {
    // Send the POST request to the external API
    const response = await axios.post('http://15.206.134.193:4005/api/auth/login', userData);

    // Return the external response
    return response.data;
  } catch (error) {
    console.error('Error while registering:', error);
    throw new Error('Error in sending request to the external API: '+error.message);
  }
};

const logoutUser = async (userData) => {
  try {
    // Send the POST request to the external API
    const response = await axios.post('http://15.206.134.193:4005/api/auth/logout', userData);

    // Return the external response
    return response.data;
  } catch (error) {
    //console.error('Error while registering:', error);
    throw new Error('Error in sending request to the external API: '+error.message);
  }
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser
};
