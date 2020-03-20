const express = require("express")
const mongoose = require("mongoose")
const routes = require("./src/routes")

const app = express()

app.use(express.static("sitePizza"))
app.use(express.json())

app.use(routes)

mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://root:<password>@cluster0-cyb56.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err => {console.log(err)})


app.listen(8080, () => {
    console.log("Servidor rodando em: http://localhost:8080")
})