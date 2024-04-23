const express = require("express")
const app = express()

app.use(express.json()) // this allow to get the json data from request
const products = require('./routes/product')
app.use('/api/v1',products)

module.exports=app