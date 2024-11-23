// /services/UserService.js
const axios = require('axios');

// For GET request to fetch all users (no userId in URL)
const getUsers = async () => {
    try {
      // Send GET request to fetch all users
      const response = await axios.get('http://15.206.134.193:4005/api/Users');
      console.log("hi");  // Check response
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Error fetching data from external API');
    }
  };
  

// Function to get user data by userId from the external API
// Function to get user data by userId from the external API
const getUserById = async (userId) => {
  try {
    // Construct the URL with the dynamic userId
    const url = `http://15.206.134.193:4005/api/Users/${userId}`;
    console.log(url);  // Log the final URL for debugging
    
    // Send GET request with the constructed URL (no body/data required in GET requests)
    const response = await axios.get(url);
    
    // Log the response to check the returned data
    console.log(response.data);
    
    // Return the data from the response
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Error fetching data from external API');
  }
};


const updateUserById = async (userId,userData) => {
  try {
    // Construct the URL with the dynamic userId
    const url = `http://15.206.134.193:4005/api/Users/${userId}`;
    console.log('In service uel'+url);  // Log the final URL for debugging
    console.log('In service userl'+userId);
    // Send GET request with the constructed URL (no body/data required in GET requests)
    const response = await axios.put(url,userData);
    
    // Log the response to check the returned data
    console.log(response.data);
    
    // Return the data from the response
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Error fetching data from external API: '+error.message);
  }
};

const deleteUserById = async (userId) => {
  try {
    // Construct the URL with the dynamic userId
    const url = `http://15.206.134.193:4005/api/Users/${userId}`;
    console.log(url);  // Log the final URL for debugging
    
    // Send GET request with the constructed URL (no body/data required in GET requests)
    const response = await axios.delete(url);
    
    // Log the response to check the returned data
    console.log(response.data);
    
    // Return the data from the response
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Error fetching data from external API'+error.message);
  }
};

const followersByUserId = async (userId) => {
  try {
    // Construct the URL with the dynamic userId
    const url = `http://15.206.134.193:4005/api/Users/${userId}/followers`;
    console.log(url);  // Log the final URL for debugging
    
    // Send GET request with the constructed URL (no body/data required in GET requests)
    const response = await axios.get(url);
    
    // Log the response to check the returned data
    console.log(response.data);
    
    // Return the data from the response
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Error fetching data from external API'+error.message);
  }
};


module.exports = {
  getUserById,
  getUsers,
  updateUserById,
  deleteUserById,
  followersByUserId
};
