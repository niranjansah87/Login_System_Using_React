const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const bcryptSalt = process.env.BCRYPT_SALT;

const userSchema = new mongoose.Schema(
  {
   
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
);

// mongoose.model('User', userSchema);
// 
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     return next();
//   }
//   const hash = await bcrypt.hash(this.password, Number(bcryptSalt));
//   this.password = hash;
//   next();
// });


// const validate = (user) => {
//   const schema = Joi.object({
//     name: Joi.string().required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().required(),
//   });
//   return schema.validate(user);
// };
const User = mongoose.model("User", userSchema);
module.exports = User;
// module.exports = {
//   User: User,
//   validate: validate,
// };
