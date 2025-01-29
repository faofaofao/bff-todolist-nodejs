import mongoose from 'mongoose';

//Esquema para cada documento ingresado en la base de datos
const listSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        trim: true,
    },
    complete:{
        type: Boolean,
        default: false,
    }
});

//Modelo a instanciar en solicitudes HTTP. Coleccion creada.
const List = new mongoose.model("To-Do-List", listSchema);

export default List;