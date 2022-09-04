const router = require("express").Router();
const User = require("../Models/user");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
    return;
  }
});

// LOGIN

router.post("/login", async (req, res) => {
  // console.log("hello");
  // console.log(req.body.password, req.body.email);
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.status(401).json("Wrong Email");
      return;
    }
    // console.log("isUser");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    console.log("originalPassword", originalPassword);
    if (originalPassword !== req.body.password) {
      res.status(401).json("Wrong Password ");
      return;
    }
    console.log("correct pass");

    const accessToken = jwt.sign(
      { id: user.id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    res.status(500).json(err);
    return;
  }
});

module.exports = router;
