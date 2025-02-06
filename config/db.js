import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Conexión a base de datos exitosa');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        process.exit(1);
    }
}

export default dbConnect;