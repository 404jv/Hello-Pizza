const mongoose = require("mongoose")

const CadSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },

    sexo: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    rua: {
        type: String,
        required: true
    },
    complemento: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    anuncio: {
        type: String,
        required: false
    },

    ofertas_no_email: {
        type: String,
        required: false
    },

    createAt: {
        type: Date,
        default: Date.now
    }
})

mongoose.model("NewCad", CadSchema)