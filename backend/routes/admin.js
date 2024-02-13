const express = require("express");
const router = express.Router();
const User = require("../models/users.js");
const fetchuser = require("../middleware/fetchuser.js");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { urlencoded } = require("body-parser");
const JWT_SECRET = "Niranjan";
var nodemailer = require('nodemailer');
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));


//Route 1: Create a admin account using POST "/admin". No login required
router.post('/admin',[
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isLength({ min: 3 }),
    body("contact", "Enter a valid contact").isLength({ min: 10 }),
    body("password", "Enter a password").isLength({ min: 6 }),
  ], async (req, res) => {
    let success = false;
    try {
        const { name, email, contact, password } = req.body;
        // If the user with this email exists then throw an error
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: "Sorry, a user with this email already exists." });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(password, salt);
        // Create a new user
        user = await User.create({
            name, email, contact, password: secPass, role: "admin"
        });
        success = true;
        res.json({ success });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});




//Route 2: Authenticate a admin using POST "/admin/login". No login required
router.post('/admin/login', [
    body("email", "Enter a valid email").isLength({ min: 8 }),
    body("password", "Enter a password").isLength({ min: 8 }),
  ],async (req, res)=> {
    const { email, password } = req.body;
    let success = false;
    try {
        const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry, a user with this email already exists." });
      }
    
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }



    });

module.exports = router;