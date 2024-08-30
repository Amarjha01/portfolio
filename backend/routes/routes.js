import express from 'express';
const router = express.Router();

// import controller functions
import resumeDownload from '../controller/ResumeDownload.js';

// set up routes
router.get('/resume', resumeDownload);

export default router;