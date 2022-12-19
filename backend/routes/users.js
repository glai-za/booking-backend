import express from "express";
import {getUser} from '../controllers/users.js';
import {getAllUser} from '../controllers/users.js';
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// get user by id
router.get('/:id', verifyToken, getUser);

// get all user without verifyToken
router.get('/', getAllUser);

export default router;

