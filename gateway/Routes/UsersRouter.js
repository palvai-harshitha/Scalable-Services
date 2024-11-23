// /routes/UserRouter.js
const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UsersController'); // Ensure path is correct

// GET route for fetching users
router.get('/', UserController.getUsers);  // This handles the /user route
// GET route to fetch a user by userId
router.get('/userId', UserController.getUserById);
router.put('/', UserController.updateUserById);
router.delete('/', UserController.deleteUserById);

router.get('/followers', UserController.followersByUserId);

module.exports = router;
