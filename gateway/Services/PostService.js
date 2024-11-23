// /services/postService.js
const axios = require('axios');
const { response } = require('express');

const createPost = async (postData) => {
    try {
        console.log("services"+postData.userId)
      // Send the POST request to the external API
      const response = await axios.post('https://e84c-122-166-187-88.ngrok-free.app/api/Post', postData);
  
      // Return the external response
      return response.data;
    } catch (error) {
      //console.error('Error while registering:', error);
      throw new Error('Error in sending request to the external API: '+error.message);
    }
  };
  

// Function to get post data by postId from the external API
// Function to get post data by postId from the external API
const getPostById = async (postId) => {
  try {
    // Construct the URL with the dynamic postId
    const url = `https://e84c-122-166-187-88.ngrok-free.app/api/Post/${postId}`;
    console.log('in servie'+url);  // Log the final URL for debugging
    
    // Send GET request with the constructed URL (no body/data required in GET requests)
    const response = await axios.get(url);
    
    // Log the response to check the returned data
    console.log(response.data);
    
    // Return the data from the response
    return response.data;
  } catch (error) {
    console.error('Error fetching post:');
    throw new Error('Error fetching data from external API: '+error.message);
  }
};


const updatePostById = async (postId,postData) => {
  try {
    // Construct the URL with the dynamic postId
    const url = `https://e84c-122-166-187-88.ngrok-free.app/api/Post/${postId}`;
    console.log('In service uel'+url);  // Log the final URL for debugging
    console.log('In service postl'+postId);
    // Send GET request with the constructed URL (no body/data required in GET requests)
    const response = await axios.put(url,postData);
    
    // Log the response to check the returned data
    console.log(response.data);
    
    // Return the data from the response
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw new Error('Error fetching data from external API: '+error.message);
  }
};

const deletePostById = async (postId) => {
  try {
    // Construct the URL with the dynamic postId
    const url = `https://e84c-122-166-187-88.ngrok-free.app/api/Post/${postId}`;
    console.log(url);  // Log the final URL for debugging
    
    // Send GET request with the constructed URL (no body/data required in GET requests)
    const response = await axios.delete(url);
    
    // Log the response to check the returned data
    console.log(response.data);
    
    // Return the data from the response
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw new Error('Error fetching data from external API');
  }
};

const getPostByUserId = async (userId) => {
    try {
      // Construct the URL with the dynamic userId
      const url = `https://e84c-122-166-187-88.ngrok-free.app/api/Post/user/${userId}`;
      console.log('in servie'+url);  // Log the final URL for debugging
      
      // Send GET request with the constructed URL (no body/data required in GET requests)
      const response = await axios.get(url);
      
      // Log the response to check the returned data
      console.log(response.data);
      
      // Return the data from the response
      return response.data;
    } catch (error) {
      console.error('Error fetching user:'+error);
      throw new Error('Error fetching data from external API: '+error.message);
    }
  };


module.exports = {
    createPost,
    getPostById,
    updatePostById,
    deletePostById,
    getPostByUserId
};
