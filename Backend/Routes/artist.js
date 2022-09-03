const express=require("express");
const Artist = require("../Models/artist");

const router= express.Router();


router.post("/artist",async(req,res) =>{
    console.log(req.body)
    const data = new Artist({
        name:req.body.name,
        dob:req.body.dob,
        bio:req.body.bio
    });
try{ 

    const Artist =await data.save();
    res.status(201).json({
    status:"success",
    Artist
})
}
catch(err){
    res.status(501).json(err);
}
   
})

module.exports=router;