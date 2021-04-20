const PATH = "./server/fruitsData.json"
const fs = require('fs')

class Fruit {
    readFruitData(){
        let rawData = fs.readFileSync(PATH)
        let fruits = JSON.parse(rawData)
        // console.log(fruits)
        return fruits
    }

    getFruit(){
        return this.readFruitData()
    }

    getOneFruit(fruitId){
        const fruits = this.readFruitData()
        const foundFruit = fruits.find(fruit => fruit.id == fruitId)
        console.log(foundFruit)
        return foundFruit
    }
}
module.exports = Fruit