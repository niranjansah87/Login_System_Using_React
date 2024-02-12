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
router.post('/admin', async (req, res) => {
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





module.exports = router;