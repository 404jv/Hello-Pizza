const mongoose = require("mongoose")

const FeedBackSchema = new mongoose.Schema({
    nome: String,
    
    email: String,

    mensagem: String,

    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("FeedBack", FeedBackSchema)
