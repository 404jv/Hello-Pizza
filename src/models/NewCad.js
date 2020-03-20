const mongoose = require("mongoose")

const CadSchema = new mongoose.Schema({
    email: String,
    senha: String,
    nome: String,
    telefone: String,
    sexo: String,
    data: String,
    rua: String,
    complemento: String,
    numero: Number,
    city: String,
    estado: String,
    anuncio: String,
    ofertas_no_email: String,
    
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("NewCad", CadSchema)
