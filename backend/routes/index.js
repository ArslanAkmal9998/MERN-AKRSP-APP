const express=require("express");
const router=express.Router();
const contactRoute=require("./contact.route")



router.use("/contact",contactRoute)




module.exports=router;