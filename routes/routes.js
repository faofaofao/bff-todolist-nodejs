import express from 'express';
import List from '../models/listSchema.js';

// Instancia Router desde express
const router = express.Router();

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await List.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las tareas' });
    }
})

export default router;