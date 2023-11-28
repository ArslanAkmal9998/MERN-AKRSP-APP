const User=require("../models/user.model")
var bcrypt = require('bcryptjs');
const jwt=require("jsonwebtoken");
const SECRET_KEY="this-is-a-secret-key"



exports.store=async(req,res)=>{
    try{
        const payload=req.body;
const saltRounds=10;
const hashedPassword=await bcrypt.hash(payload.password,saltRounds);
payload.password=hashedPassword;
        const user=await User.create(payload)
        res.json({status:201,message:"User Created Successfully",success:true,user})
    }
    catch(err){
console.log(err)
    }
}
exports.login=async(req,res)=>{
    try{
      const {email,password}=req.body;
      const findUser=await User.findOne({email})
      if(!findUser){
        return res.json({message:"User not found"})
      }  
      await bcrypt.compare(password,findUser.password,(err,result)=>{
        if(err){
            return res.json({err})
        }
        else if(result){
          const payload={userId:findUser._id,email:findUser.email}
          jwt.sign(payload,SECRET_KEY,{expiresIn:600},(err,result)=>{
            if(err){
                return res.json({err})
            }
            else{
                res.json({message:"User signed successfully",token:result})
            }
          })

        }
        else{
            res.json({message:"Password does not match"})
        }
      })
    }
    catch(err){
        console.log(err)
    }
}





// exports.index=async(req,res)=>{
//     try{
//         const contacts=await Contact.find()
//         res.json({status:200,message:"Contacts Fetched Successfully",success:true,contacts})

//     }
//     catch(err){
// console.log(err)
//     }
// }

// exports.get=async(req,res)=>{
//     try{
//         const {id}=req.params;
//         const contact=await Contact.findOne({_id:id})
// if(!contact){
//     return res.json({status:404,message:"Couldn't find contact",success:false})
// }



//         res.json({status:200,message:"Contact Fetched Successfully",success:true,contact})

//     }
//     catch(err){
// console.log(err)
//     }
// }

// exports.destroy=async(req,res)=>{
//     try{
// const {id}=req.params;
// const contact=await Contact.findOneAndDelete({_id:id})
// if(!contact){
//     return res.json({status:404,message:"Couldn't find contact",success:false})
// }
// res.json({status:200,message:"Contact deleted",success:true})
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// exports.update=async(req,res)=>{
//     try{
//         const {id}=req.params;
//         const payload=req.body;        
//         const contact=await Contact.findOneAndUpdate({_id:id},payload,{new:true})
//         if(!contact){
//             return res.json({status:404,message:"Contact not found",success:false})
//         }
//         res.json({status:200,message:"Contact updated",success:true,contact})
//     }
//     catch(err){
//         console.log(err)
//     }
   

//  }

