import express from 'express';
const router = express.Router();

import { login, signUp, changePassword, changeProfileImage } from '../controllers/Auth'

router.post("/signup", signUp);
router.post("/login", login);
router.post("/changePassword", changePassword);
router.post("/changeProfileImage", changeProfileImage);