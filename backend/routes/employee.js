import express from 'express'
const router = express.Router();

import { checkflags, closeflag, checkItemsDetails } from '../controllers/flag'

router.get('/checkflags', checkflags);
router.post('/closeflags', closeflag);
router.get('/getItemDetails', checkItemsDetails);