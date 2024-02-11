const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const fetchuser = require('../middleware/fetchuser.js');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Niranjan';

//Route 1: Create a User using POST "api/auth/signup". No login required
router.post('/signup', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isLength({ min: 3 }),
  body('contact', 'Enter a valid contact').isLength({ min: 10 }),
  body('password', 'Enter a password').isLength({ min: 6 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: "Validation error. Please check your input." });
    }

    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry, a user with this email already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      contact: req.body.contact,
      password: secPass,
    });

    const data = {
      user: {
        id: user.id,
      }
    };

    const authToken = jwt.sign(data, JWT_SECRET);
    console.log(authToken);
    res.json({ authToken });

  } catch (error) {
    console.error(error);
    res.status(500).send("Some error occurred");
  }
});


// Route 2: Authenticate a User using POST "api/auth/login". No login required
router.post('/login', [
  body('email', 'Enter a valid email').isLength({ min: 8 }),
  body('password', 'Enter a password').isLength({ min: 8 })
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const data = {
      user: {
        id: user.id,
      }
    };

    const authToken = jwt.sign(data, JWT_SECRET);
    console.log(authToken);
    res.json({ authToken });
  } catch (error) {
    console.error(error);
    res.status(500).send("Some error occurred");
  }
});



//Route 3:Log out a User using GET "api/auth/logout". Login required
router.post('/logout', (req, res) => {
  res.clearCookie('authToken'); // Clear the authentication token cookie
  res.json({ message: 'Logged out successfully' });
});



//Route 4:Fetch the user details using GET "api/auth/getuser". Login required
router.get('/getuser', fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//Route 5:Check whether user is logged in or not using POST "api/auth/checklogin". No login required

// backend/routes/auth.js
router.get('/checklogin', fetchuser, (req, res) => {
  try {
    console.log('Decoded Token:', req.user); // Verify if the decoded token is printed correctly
    res.status(200).json({ isLoggedIn: true, user: req.user, message: 'User logged in' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ isLoggedIn: false, error: 'Internal Server Error' });
  }
});

//Route 6:ForgotPassword using POST "api/auth/forgotpassword". No login required

router.post('/forgotpassword', async (req, res) => {
  try {
    const { email } = req.body;
    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ error: "User with this email does not exist." });
    }
    else {
      const secret = JWT_SECRET + user.password;
      const token = jwt.sign({ email: user.email, id: user.id }, secret, { expiresIn: '30m' });

      
      const link= `http://localhost:5000/resetpassword/${token}`;
      console.log(link);
      
      res.send("Password reset link sent to your email account");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Some error occurred");
  }
});

//Route 7:ResetPassword using GET "/api/auth/resetpassword/:id/:token". No login required

// router.get('/api/auth/resetpassword/:id/:token', async (req, res) => {
//   try {

//     const { id, token } = req.params;
//     console.log(req.params);
//     if (!token) {
//       return res.status(400).json({ error: "Invalid token" });
//     }
//     else {
//       const { email, id } = jwt.verify(token, JWT_SECRET + user.password);
//       res.send("Password reset link sent to your email account");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Some error occurred");
//   }
// });




router.get('/api/auth/resetpassword/:id/:token', async (req, res) => {
  try {


    const token = req.params;
    console.log(req.params);
    res.send(token);
    res.send("done");
    // if (!token) {
    //   return res.status(400).json({ error: "Invalid token" });
    // }
    // else {
    //   const { email, id } = jwt.verify(token, JWT_SECRET + user.password);
    //   res.send("Password reset link sent to your email account");
    // }
  } catch (error) { console.error(error); res.status(500).send("Some error occurred"); }
});


module.exports = router;