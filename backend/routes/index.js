const express=require("express");
const router=express.Router();
const contactRoute=require("./contact.route")
const userRoute=require("./user.route")




router.use("/contact",contactRoute)
router.use("/user",userRoute)




module.exports=router;