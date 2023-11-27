const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{
        type:String,
        default:"",
        required:true,
    },
    email:{
        type:String,
        default:"",
        required:true,
        unique:true
    },
    phone:{
        type:String,
        default:"",

    },
    password:{
        type:String,
        default:false,
        required:true
    }
},
{timestamp:true}

)
module.exports=mongoose.model("User",userSchema)