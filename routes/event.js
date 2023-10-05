import express from 'express'
import { isAuthenticated } from '../middleWares/auth.js';
import { getAllEvents, newEvent } from '../controllers/event.js';

const router = express.Router();

router.post("/addEvent",isAuthenticated,newEvent);
router.get("/getAllEvents",isAuthenticated,getAllEvents);

export default router;
