const products = require('../data/products.json')
const Product = require('../models/productModel')
const dotenv = require('dotenv')
const connetDatabase = require('../configs/database')

dotenv.config({path:'backend/configs/configs.env'})
connetDatabase()
const seedProduct = async ()=>{
    try{
        await Product.deleteMany()
        console.log('All product are deleted');
        await Product.insertMany(products)
        console.log('All products are added');
    }catch(err){
        console.log(err.message);
    }
    process.exit()
}

seedProduct()