import express from 'express';
import { getAllProjects, getProjectById, createProject, updateProject, deleteProject } from '../controllers/projectController.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.post('/', upload.single('image'), createProject);
router.put('/:id', upload.single('image'), updateProject);
router.delete('/:id', deleteProject);

export default router;