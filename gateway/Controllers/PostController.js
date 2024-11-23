// /controllers/PostController.js

const PostService = require('../Services/PostService');

// Controller function for create route
const create = async (req, res) => {
  const postData = req.body;  // Get user data from request body

  try {
    
    console.log("controller"+postData);
    // Call the service to send the data to the external API
    const response = await PostService.createPost(postData);

    // Return the external response
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function for getting post by postId
const getPostById = async (req, res) => {
    const postId = req.query.postId;
    console.log('in controller',+req.query.postId);  // Access postId from path parameters
  
    try {
      // Call the service to fetch post data from the external API
      const post = await PostService.getPostById(postId);
  
      // Return the external API response data
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Controller function for updating post by postId
const updatePostById = async (req, res) => {
  const postId = req.query.postId;
  const postData= req.body;
  console.log('In Controller'+req.body);  // Access postId from path parameters

  try {
    // Call the service to fetch post data from the external API
    const post = await PostService.updatePostById(postId,postData);

    // Return the external API response data
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function for deleting post by postId
const deletePostById = async (req, res) => {
  const postId = req.query.postId;
  console.log(req.query.postId);  // Access postId from path parameters

  try {
    // Call the service to fetch post data from the external API
    const post = await PostService.deletePostById(postId);

    // Return the external API response data
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPostByUserId = async (req, res) => {
    const userId = req.query.userId;
    console.log('in controller',+req.query.userId);  // Access userId from path parameters
  
    try {
      // Call the service to fetch user data from the external API
      const post = await PostService.getPostByUserId(userId);
        
      // Return the external API response data
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

module.exports = {
  create,
  getPostById,
  updatePostById,
  deletePostById,
  getPostByUserId
};
