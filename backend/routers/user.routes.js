import express from "express";
import upload from "../middlewares/multer.middlewares.js";
import {
  ping,
  register,
  login,
  loginOrRegister,
  editProfile,
} from "../controllers/user.controllers.js";
import isLoggedIn from "../middlewares/isLoggedIn.middlewares.js";

const userRoute = express.Router();

userRoute.get("/ping", ping);
userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.post("/loginOrRegister", loginOrRegister);
userRoute.post(
  "/edit-profile",
  isLoggedIn,
  upload.single("avatar"),
  editProfile
);

export default userRoute;
