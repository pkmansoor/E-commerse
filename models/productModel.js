const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'please enter product name'],
        trim : true,
        maxLength: [100,'product name cannot exceed 100 charector']
    },
    price:{
        type:Number,
        default: 0.00
    },
    description:{
        type:String,
        required:[true,'please enter product description']
    },
    ratings:{
        type:Number,
        default:0.00
    },
    images:[
        {
            filename:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,'please enter product category'],
        enum:{
            values:[
                'Electronucs',
                'Mobile Phones',
                'Laptops',
                'Fashion',
                'Home',
                'Furniture',
                'Sports',
                'Appliances',
                'Electronics',
                'Foods',
                'Watches',
                'Personal Care'
            ],
            method:'please select correct category'
        }
    },
    seller:{
        type:String,
        required:[true,'please enter product seller']
    },
    stock:{
        type:Number,
        required:[true,'please enter product stock'],
        maxLength:[20,'product stock cannot exceed 20 units']
    },
    numOfReviews:{
        type:String,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:String,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        }
    ],
    createAt:{
        type:Date,
        default:Date.now()
    }
})