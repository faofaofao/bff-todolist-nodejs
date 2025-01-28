import express from 'express';
import List from '../models/listSchema.js';

//Instancia Router desde express
const router = express.Router();

//Obtener todos los documentos
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await List.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las tareas' });
    }
})

//Ingresar un documento dato a la base de datos
router.post('/tasks', async (req, res) => {
    try {
        const newTask = new List(req.body);
        await newTask.save();
        res.status(201).json(newTask)
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
})

//Eliminar un documento de la base de datos con la ID
router.delete('/tasks:id', async (req, res) => {
    try {
        await List.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Tarea eliminada con éxito'});
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
})

//Actualizar documento a actualizado
router.patch('/tasks:id', async (req, res) => {
    try {
        const updateTask = await List.findByIdAndUpdate(req.params.id, req.body, {
            complete:true,
        })
        res.status(200).json({updateTask})
    } catch (error) {
        res.status(500).json({message: 'Error al actualizar el dato'})
    }
})

export default router;