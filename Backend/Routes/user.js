const express = require("express");
const User = require("../Models/user");

const router = express.Router();

router.post("/", async(req, res)=> {
    console.log(req.body);
    const data = new User({
        name:req.body.name,
        email:req.body.email
    });
    try{ 

        const user =await data.save();
        res.status(201).json({  
        status:"success",
        user
    })
    }
    catch(err){
        res.status(501).json(err);
    }
})

module.exports = router;