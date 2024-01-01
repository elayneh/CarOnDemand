import express, { Response, Request } from "express";
const { userVerification } = require("./../middlewares/authorizeUser");

const router = express.Router();
const {
  register,
  login,
  logout,
} = require("./../controllers/userAuthenticationController");
router.post("/user/register", register);
router.post("/user/login", login);
router.post("/user/logout", logout);
router.post("/", userVerification);

module.exports = router;
