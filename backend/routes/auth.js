const express = require('express');
const router = require('router');
const User= require('../models/Users');
const {body,validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "Niranjanisagoodb$oy";




module.exports =router;