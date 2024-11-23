// /controllers/UserController.js
const UserService = require('../Services/UserService');

// Controller function for getting users
const getUsers = async (req, res) => {
    
  try {
    // Call the service to fetch users from the external API
    const users = await UserService.getUsers();

    // Return the external response
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// /controllers/UserController.js



// Controller function for getting user by userId
const getUserById = async (req, res) => {
    const userId = req.query.userId;
    console.log(req.query.userId);  // Access userId from path parameters
  
    try {
      // Call the service to fetch user data from the external API
      const user = await UserService.getUserById(userId);
  
      // Return the external API response data
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Controller function for updating user by userId
const updateUserById = async (req, res) => {
  const userId = req.query.userId;
  const userData= req.body;
  console.log('In Controller'+req.body);  // Access userId from path parameters

  try {
    // Call the service to fetch user data from the external API
    const user = await UserService.updateUserById(userId,userData);

    // Return the external API response data
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller function for deleting user by userId
const deleteUserById = async (req, res) => {
  const userId = req.query.userId;
  console.log(req.query.userId);  // Access userId from path parameters

  try {
    // Call the service to fetch user data from the external API
    const user = await UserService.deleteUserById(userId);

    // Return the external API response data
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const followersByUserId = async (req, res) => {
  const userId = req.query.userId;
  console.log(req.query.userId);  // Access userId from path parameters

  try {
    // Call the service to fetch user data from the external API
    const user = await UserService.followersByUserId(userId);

    // Return the external API response data
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUserById,
  getUsers,
  updateUserById,
  deleteUserById,
  followersByUserId
};


