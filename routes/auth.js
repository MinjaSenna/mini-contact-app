const express = require("express"); 
const router = express.Router(); 
const jwt = require("jsonwebtoken"); 
const config = require("config"); 
const { check, validationResult } = require("express-validator"); 
const bcrypt = require("bcryptjs"); 

const User = require("../models/User"); 

// @router         GET api/auth
// @desc           Get logged in user  
// @access         Private 
router.get("/", (req, res) => {
    res.send("Get logged in user"); 
}); 

// @router         POST api/auth
// @desc           Auth user and get token   
// @access         Public  
router.post("/", [
    check("email", "Please include a valid email address").isEmail(), 
    check("password", "Please enter a password with 6 or more characters").exists()
],
 async (req, res) => {
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() }); 
    }

    const { email, password } =  req.body; 

    try { 
        let user = await User.findOne({email }); 

        if(!user) {
            return res.status(400).json({msg: "Invalid Crendentials"})
        }
    } catch (err) {

    }
    }); 

module.exports = router; 