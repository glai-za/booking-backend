import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { createPost, deletePost, getUserPost, updatePost } from '../controllers/posts.js';

const router = express.Router();

// get all post

// get
router.get('/', verifyToken);
router.get('/:id', getUserPost, verifyToken);

// post post create
router.post('/', createPost);

// patch post edit
router.put('/:id', updatePost );

// delete post
router.delete('/:id', deletePost );


export default router;