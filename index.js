import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

//Guardar variables de entorno
dotenv.config()

const app = express()

//Middlewares
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    try {
        console.log('Conexion exitosa')
    } catch (error) {
        console.error('Error al conectar el servidor', error)
    }
})
