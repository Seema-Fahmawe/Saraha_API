import { Router } from "express";
import * as userController from "./user.controller.js";
import auth from "../../middleware/auth.middleware.js";
import fileUpload from "../../utils/multer.js";
const router = Router();

router.post(
  "/",
  auth(),
  fileUpload().single('image'),
  userController.profilePic
);

router.get("/", userController.getUsers);
export default router;
