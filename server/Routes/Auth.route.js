const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../modal/User.modal");
const { authSchema } = require("../helper/validation_schema");
const { signAccessToken, signRefreshToken } = require("../helper/jwt_helper");

router.post("/register", async (req, res, next) => {
  try {
    const { email, password, firstname, lastname, user_role } = req.body;
    const result = await authSchema.validateAsync(req.body);
    const doesExist = await User.findOne({ email: result.email });
    if (doesExist) throw createError.Conflict(`${email} is already registered`);
    const user = new User({ email, password, firstname, lastname, user_role });
    const savedUser = await user.save();
    const accessToken = await signAccessToken(savedUser.email);
    const refreshToken = await signRefreshToken(savedUser.email);

    res.send({
      status: 200,
      accessToken,
      refreshToken,
      email,
      message: "User registered sucessfully",
    });
    // console.log("hello from register");
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
    console.log("Error", error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const result = await authSchema.validateAsync(req.body);
    const email = req.body.email;
    console.log(email);
    const user = await User.findOne({ email: email });
    if (!user) throw createError.NotFound("User not registered");
    const isMatch = await user.isValidPassword(result.password);
    console.log(isMatch);
    if (!isMatch) throw createError.Unauthorized("Username/password not valid");
    const accessToken = await signAccessToken(user.email);
    const refreshToken = await signRefreshToken(user.email);
    res.send({
      accessToken,
      refreshToken,
      message: "user login sucessfully",
      email,
    });
  } catch (error) {
    next(createError.BadRequest("Invalid email or password"));
  }
});

router.post("/refresh-token", async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) throw createError.BadRequest();
    const userId = await refreshToken;
    const accessToken = await signAccessToken(userId);
    const refToken = await signRefreshToken(userId);
    res.send({ accessToken: accessToken, refreshToken: refToken });
  } catch (error) {
    next(error);
  }
});

router.delete("/logout", async (req, res, next) => {
  res.send("logout route");
});

module.exports = router;
