// /routes/AuthRouter.js

const express = require('express');
const router = express.Router();
const PostController = require('../Controllers/PostController');

// POST route for registering the post
router.post('/', PostController.create);
router.get('/', PostController.getPostById);
router.put('/', PostController.updatePostById);
router.delete('/', PostController.deletePostById);
router.get('/user', PostController.getPostByUserId);

module.exports = router;
