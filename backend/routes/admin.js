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





//Route 2: Authenticate a admin using POST "/admin/login". No login required





module.exports = router;