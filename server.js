const app = require("./app")
const dotenv = require("dotenv")
const path = require("path")
const connectDatabse = require("./configs/database.js")


dotenv.config({path:path.join(__dirname,"configs/configs.env")})

connectDatabse()

app.listen(process.env.PORT,()=>{
    console.log(`server listening to port ${process.env.PORT}, in ${process.env.NODE_ENV}`);
})