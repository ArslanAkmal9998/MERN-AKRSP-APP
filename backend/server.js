const express=require("express");
const app=express();
const PORT=8000;
const connectDatabase=require("./config/connectDb")
const adminRoutes=require("./routes/index")
var bodyParser = require('body-parser')
const cors=require("cors")

connectDatabase();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors("*"));
app.use("/",adminRoutes)


app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`)
})