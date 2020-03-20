const { Router } = require("express")
const path = require("path")
const UserController = require("./controllers/UserController")

const router = Router()

router.get("/", (req, res) => {
    return res.sendFile(path.resolve(__dirname + "/../sitePizza/pages/index.html"))
})

router.get("/cadastro", (req, res) => {
    return res.sendFile(path.resolve(__dirname + "/../sitePizza/pages/cadastro.html"))
})

router.post("/newcad", UserController.NewUser)

router.post("/show", UserController.NewUser)

module.exports = router
