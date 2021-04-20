const express = require('express')
const app = express()
const Fruit = require("./fruits")
const fruitData = new Fruit()


// app.get("/fruits", (req, res) => {
//     res.status(200).send(fruitData.getFruit())
// })



// app.get("/fruits/:fruit_id", (req, res) => {
//     const fruitId = req.params.fruit_id
//     const foundFruit = fruitData.getOneFruit(fruitId)
//     console.log(fruitId)
//     if(foundFruit){
//         res.status(200).send(foundFruit)
//     } else {
//         res.status(404).send("Fruit not found")
//     }
// })
// app.get("/fruits", (req, res) => {
//     let obj = req.query
//     obj.name = "Soursap"
//     obj.id = 4

//     res.status(200).send(obj)
// })
app.get("/fruits", (req, res) => {
    let obj = req.query
    obj.name = "Soursap"
    obj.id = 4

    res.status(200).send(obj)
})


app.listen(3000, () => console.log("server up on http://localhost:3000"))