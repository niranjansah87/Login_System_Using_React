const express = require("express");
const { Router } = require("express");
const router = Router();

const User = require("../models/Users");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Niranjanisagoodb$oy";

router.post(
  "/signup",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("contact", "Enter a contact number").isLength({ min: 10 }),
    body("password", "Password must be at least 8 characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const existingUser = await User.findOne({
        $or: [{ email: req.body.email }, { contact: req.body.contact }],
      });
      if (existingUser) {
        const conflictField =
          existingUser.email === req.body.email ? "email" : "contact";
        return res
          .status(400)
          .json({ error: `User with this ${conflictField} already exists` });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        password: hashedPassword,
      });

      const authToken = jwt.sign({ user: { id: newUser.id } }, JWT_SECRET);
      res.json({ authToken });
    } catch (error) {
      console.error(error.message);
      res
        .status(500)
        .json({ error: "Internal Server Error", details: error.message });
    }
  }
);

