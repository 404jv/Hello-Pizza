const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },

    mensagem: {
        type: String,
        required: true
    },

    createAt: {
        type: Date,
        default: Date.now
    }
})

mongoose.model("Product", ProductSchema)
