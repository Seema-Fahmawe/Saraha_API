import userModel from "../../../DB/models/User.model.js";
import { AppError } from "../../utils/AppError.js";
import { asyncHandler } from "../../utils/errorHandling.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = asyncHandler(async (req, res, next) => {
  const { userName, email, password } = req.body;
  const user = await userModel.findOne({ where: { email } });
  if (user) {
    return next(new AppError(`User registration`, 401));
  }
  const hashPassword = bcrypt.hashSync(
    password,
    parseInt(process.env.salt_Round)
  );
  const newUser = await userModel.create({
    userName,
    email,
    password: hashPassword,
  });
  return res.status(200).json({ message: "success", user: newUser });
});

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ where: { email } });
  if (user == null) {
    return next(new AppError("Invalid email", 400));
  } else {
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return next(new AppError("Invalid password", 400));
    }
    const token = jwt.sign(
      { id: user.id, name: user.userName },
      process.env.loginToken
    );
    return res.status(200).json({ message: "success", token });
  }
});
