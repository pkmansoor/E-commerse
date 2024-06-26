const Product = require('../models/productModel')

// GET product - /api/v1/products
exports.getProducts=async(req,res, next)=>{
     const products = await Product.find()
    res.status(200).json({
        success:true,
        count:products.length,
        products
    })
}


//to create a product -  /api/v1/product/new
exports.newProduct=async (req,res,next)=>{
    const product =await Product.create(req.body)
    res.status(201).json({
        success:true,
        product
    })

}

