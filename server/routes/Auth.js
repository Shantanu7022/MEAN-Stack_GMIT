require('dotenv').config();
const exp=require("express"); 
const bcrypt=require("bcrypt");  //npm install bcrypt
const Admin=require("../model/Admin");
const jwt=require("jsonwebtoken")
const router=exp.Router()

router.get("/reg",async (req,res)=>{

    var name="Shantanu";
    var email="s@gmail.com";
    var pass="1234";

   const salt=await bcrypt.genSalt(10);
   const hp=await bcrypt.hash(pass,salt);

//    await Admin.create({
//    name:name,
//    email:email,
//    password:hp
//    })


  res.send(hp);
});


router.post("/login",async (req,res)=>{
    var e=req.body.email;
    var p=req.body.pass;
 
    var ldata=await Admin.findOne({email:e})
 
    if(ldata!=null){
 
     bcrypt.compare(p,ldata.password,(err,result)=>{
         if(err){
             throw err
         }else{
             if(result==true){
 
                 var udata={
                     aid:ldata._id,
                     aname:ldata.name
                 };
 
                 var jtoken=jwt.sign(udata, process.env.SECRET_KEY);
 
 
                 res.json({token:jtoken})
             }else{
                 res.json({msg:"Invalid Login"});
             }
         }
     })
 
    }else{
     res.json({msg:"Invalid Login"});
    }
 
 
 });

module.exports=router;