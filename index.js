import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';


//Guardar variables de entorno
dotenv.config();

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

//Conexión a base de datos
dbConnect();

//API prueba
app.get('/api',(req, res) => {
try {
    res.json({task:'Aprender NOSQL'});
    res.status(200);
    console.log('API prueba exitosa');
} catch (error) {
    console.error('API prueba falló:',error);
}
});


//Conexión servidor local
app.listen(PORT, () => {
    try {
        console.log(`Conexión exitosa al puerto ${PORT}`);
    } catch (error) {
        console.error('Error al conectar el servidor:', error);
    }
});
