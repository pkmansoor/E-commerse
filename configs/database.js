const mongoose = require("mongoose")

const connectDatabse= ()=>{
    mongoose.connect(process.env.DB_LOCAL_URI,{
        useUnifiedTopology : true

    }).then(con=>{
        console.log(`Mongo db is connected to host  : ${con.connection.host}`);
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports=connectDatabse