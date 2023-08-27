const exp=require("express") 

const router=exp.Router()
const Cat=require("../model/Category_db");
const { Connection } = require("mongoose");

router.post("/add",async (req,res)=>{

// DataBase Connection start

var inscat={
    categoryname:req.body.cname
};

await Cat.create(inscat);

//End DataBase connection

console.log(req.body)
   res.json({msg:"Add Category"});
});


router.post("/upd",async (req,res)=>{
    
    var inscat={
        categoryname:req.body.cname
    };
    
    await Cat.findByIdAndUpdate(req.body.id,inscat);
    
       res.json({msg:"upd Category"});
    });
    

router.get("/sel",async(req,res)=>{
    
    var data = await Cat.find();
    res.json(data);
});

router.post("/del",async(req,res)=>{
    var id = req.body.id;

    await Cat.findByIdAndDelete(id);
    res.json({msg:"Deleted"});
  
});

router.post("/edit",async (req,res)=>{
  
    var data=await Cat.findById(req.body.id);
    
    res.json(data);
    
    
    });

module.exports=router;
