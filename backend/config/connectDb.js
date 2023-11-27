const mongoose=require("mongoose");

const connectDatabase=async()=>{
    const data=await mongoose.connect("mongodb+srv://Arslan:Abc12345@cluster0.znjxcfh.mongodb.net/mernakrsp")
    console.log("Mongodb connected successfully")
}

module.exports=connectDatabase;