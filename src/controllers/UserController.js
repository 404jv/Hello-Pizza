const FeedBack = require("../models/FeedBack")
const NewCad = require("../models/NewCad")

module.exports = {

    async NewUser(req, res) {
        const { 
            email, senha, nome, telefone, sexo, data, rua, 
            complemento, numero, city, 
            estado, anuncio, ofertas_no_email
        } = req.body
    
        await NewCad.create({
            email,
            senha,
            nome,
            telefone,
            sexo,
            data,
            rua,
            complemento,
            numero,
            city,
            estado,
            anuncio,
            ofertas_no_email,
        })
        res.redirect("/")
    },

    async Feed(req, res) {
        const { nome, email, mensagem } = req.body

        await FeedBack.create({
            nome,
            email,
            mensagem,
        }).then(() => {
            console.log("Criado no banco")
        })
        
        res.redirect("/")
    },
}