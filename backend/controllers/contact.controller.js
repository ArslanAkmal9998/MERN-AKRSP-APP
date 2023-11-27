const Contact=require("../models/contact.model")

exports.store=async(req,res)=>{
    try{
        const payload=req.body;
        const contact=await Contact.create(payload)
        res.json({status:201,message:"Contact Created Successfully",success:true,contact})

    }
    catch(err){
console.log(err)
    }
}

exports.index=async(req,res)=>{
    try{
        const contacts=await Contact.find()
        res.json({status:200,message:"Contacts Fetched Successfully",success:true,contacts})

    }
    catch(err){
console.log(err)
    }
}

exports.get=async(req,res)=>{
    try{
        const {id}=req.params;
        const contact=await Contact.findOne({_id:id})
if(!contact){
    return res.json({status:404,message:"Couldn't find contact",success:false})
}



        res.json({status:200,message:"Contact Fetched Successfully",success:true,contact})

    }
    catch(err){
console.log(err)
    }
}

exports.destroy=async(req,res)=>{
    try{
const {id}=req.params;
const contact=await Contact.findOneAndDelete({_id:id})
if(!contact){
    return res.json({status:404,message:"Couldn't find contact",success:false})
}
res.json({status:200,message:"Contact deleted",success:true})
    }
    catch(err){
        console.log(err)
    }
}
exports.update=async(req,res)=>{
    try{
        const {id}=req.params;
        const payload=req.body;        
        const contact=await Contact.findOneAndUpdate({_id:id},payload,{new:true})
        if(!contact){
            return res.json({status:404,message:"Contact not found",success:false})
        }
        res.json({status:200,message:"Contact updated",success:true,contact})
    }
    catch(err){
        console.log(err)
    }
   

 }

