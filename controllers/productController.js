const Product = require('../models/productModel')
exports.getProducts=(req,res, next)=>{
    res.status(200).json({
        success:true,
        message:"this route will show all the product indatabase"
    })
}

//to create a product - api = {{base-url}}/api/v1/product/new
exports.newProduct=async (req,res,next)=>{
    const product =await Product.create(req.body)
    res.status(201).json({
        success:true,
        product
    })

}

