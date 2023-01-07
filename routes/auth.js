const express = require("express");
const router = express.Router();
const { login, signUp } = require("../controller/auth");

const {  
  isRequestValidated,
  validateSignUpRequest,
  validateLoginRequest,
} = require("../validators/auth");


router.route("/login").post(validateLoginRequest, isRequestValidated, login);


router.route("/signup").post(validateSignUpRequest, isRequestValidated, signUp);


module.exports = router;