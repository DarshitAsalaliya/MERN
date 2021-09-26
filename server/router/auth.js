const { response } = require("express");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();

require("../db/conn");

const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("From Router");
});

//  Using Promise

// router.post("/registration", (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "All Filed Are Required.." });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: "Email All Ready Exists.." });
//       }

//       const user = new User({ name, email, phone, work, password, cpassword });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User Created.." });
//         })
//         .catch((err) => res.status(500).json({ error: err }));
//     })
//     .catch((err) => console.log(err));
// });

//  Registration Using Async-Await

router.post("/registration", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "All Filed Are Required.." });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist)
      return res.status(422).json({ error: "Email All Ready Exists.." });
    else if (password != cpassword)
      return res.status(422).json({ error: "Password Are Not Matching.." });
    else {
      const user = new User({ name, email, phone, work, password, cpassword });

      const userRegister = await user.save();

      if (userRegister) {
        res.status(201).json({ message: "User Created.." });
      } else {
        res.status(500).json({ message: "Failed To Created.." });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

// Login

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({ error: "All Filed Are Required.." });
    }

    const userExist = await User.findOne({ email: email });

    if (!userExist)
      return res.status(422).json({ error: "Invalid Credentials.." });
    else {
      const isMatch = await bcrypt.compare(password, userExist.password);

      const token = await userExist.generateAuthToken();

      res.cookie("jwttoken", token, {
        expires: new Date(Date.now() + 60),
        httpOnly: true,
      });

      if (!isMatch)
        return res.status(422).json({ error: "Invalid Credentials.." });
      else return res.json({ message: "SignIn Successfully.." });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
