const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const config = require('../config');
const jwt = require('jsonwebtoken');
const  fetchuser = require('../middleware/fetchuser');
const bcrypt = require('bcryptjs');


// Route:1 Create a user : POST "/api/auth/createuser"No login required.
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password').isLength({ min: 5 }),
], async (req, res) => {
    let success = false;
    // if there are errors return Bad req or the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors : errors.array()});
    }
try {
//check weather the user email  exists already
      let user = await  User.findOne({email:req.body.email});
    if (user) {
        return res.status(400).json({ success,errors :"Sorry email already exists"});
    }
    const salt =  bcrypt.genSaltSync(10);
     const secPass = await bcrypt.hash(req.body.password, salt);

    //creat a new user
          user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });

const  data = {user:{id: user.id}}
    const token = jwt.sign(data, config.JWT_SECRET);
success=true;
res.json({success,token});

}catch(error) {
console.error(error.message);
res.status(500).send("Internal Server Error");
}
});
// Route:2 Authenticate  a user : POST "/api/auth/login"No login required.
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password','Password cannot blank').exists(),
], async (req, res) => {
    let success = false;
    // if there are errors return Bad req or the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors : errors.array()});
    }
    const {email, password} = req.body;
    try {
       let user = await User.findOne({email: req.body.email});
       if (!user) {
           success=false;
          return res.status(400).json({errors : "Please try to login with correct credentials"});
       }
       const passwordCompare = await bcrypt.compare(password,  user.password);
       if (!passwordCompare) {
           success=false;
           return res.status(400).json({success, errors : "Please try to login with correct credentials"});
       }
        const  data = {user:{id: user.id}}
        const token = jwt.sign(data, config.JWT_SECRET);
       success=true;
        res.json({success, token});

    }catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
// Route:3 Get login user details: POST "/api/auth/getuser".login required.
router.get('/getuser', fetchuser, async (req, res) => {
    try {
      const userId = req.user.id;
      console.log("User ID from token:", userId); 
  
      const user = await User.findById(userId).select("-password");
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      res.send(user);
    } catch (error) {
      console.error("Error in /getuser route:", error.message);
      res.status(500).send("Internal Server Error");
    }
  });
  
  
module.exports = router;

