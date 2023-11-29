import express, { Response, Request } from "express";
import { authenticateToken } from "../middlewares/authenticateToken";
import { authorizeUser } from "../middlewares/authorizeUser";

const router = express.Router();
const {
  register,
  login,
} = require("./../controllers/userAuthenticationController");
router.post("/user/register", register);
router.post("/user/login", login);
// router.get(
//   "/user/dashboard",
//   authenticateToken,
//   authorizeUser,
//   (req: Request, res: Response) => {
//     res.redirect("/user/dashboard");
//   }
// );

module.exports = router;
