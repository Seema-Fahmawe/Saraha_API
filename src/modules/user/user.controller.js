import userModel from "../../../DB/models/User.model.js";
import { asyncHandler } from "../../utils/errorHandling.js";

export const profilePic = asyncHandler(async (req, res, next) => {
  
  return res.json({ message: "success" });
});

export const getUsers = asyncHandler(async (req, res, next) => {
  const users = await userModel.findAll({});
  return res.status(200).json({ message: "success", users });
});
