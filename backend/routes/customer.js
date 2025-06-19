import express from 'express';
const router = express.Router();
import { flagItem } from '../controllers/flag.js'

router.post('/flagItem', flagItem);