const express = require("express")
const bodyParse = require("body-parser")
const mongoose = require("mongoose")
const requireDir = require("require-dir")


//Iniciando o app
const app = express()

//Mostrando para o express que na pasta "sitePizza" possuem arquivos staticos ou seja css
//imagens (png, jpg, jpeg e etc...)
app.use(express.static("sitePizza"))

//Usando body parse para pega informações do form, pois o express não pega sozinho
app.use(bodyParse.urlencoded({ extended: true }))

//Iniciando o DB
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/pizza", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Pegando tipos do model
requireDir("./src/models")

const Product = mongoose.model("Product")
const NewCad = mongoose.model("NewCad")
//Rotas
app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/sitePizza/pages/index.html")
})

app.get("/cadastro", (req, res) => {
    return res.sendFile(__dirname + "/sitePizza/pages/cadastro.html")
})

//Leitura dos models no banco de dados
app.post("/newcad", (req, res) => {
    NewCad.create({
        email: req.body.email,
        senha: req.body.senha,
        nome: req.body.nome,
        telefone: req.body.tel,
        sexo: req.body.sexo,
        data: req.body.data,
        rua: req.body.rua,
        complemento: req.body.complemento,
        numero: req.body.num,
        city: req.body.city,
        estado: req.body.estado,
        anuncio: req.body.anuncio,
        ofertas_no_email: req.body.ofertas_no_email
    })
    res.redirect("/")
})

app.post("/show", (req, res) => {
    Product.create({
        nome: req.body.nome,
        email: req.body.email,
        mensagem: req.body.mensagem
    })
    res.redirect("/")
})

app.listen(8081, () => {
    console.log("Servidor rodando em: http://localhost:8081")
})