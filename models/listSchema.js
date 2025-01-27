import mongoose from 'mongoose';

//Esquema para cada dato ingresado en la base de datos
const listSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    complete:{
        type: Boolean,
        default: false,
    }
});

//Modelo a instanciar en solicitudes HTTTP. Coleccion creada.
const List = new mongoose.model("To-Do-List", listSchema);

export default List;