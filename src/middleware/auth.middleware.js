import { AppError } from "../utils/AppError.js";
import { asyncHandler } from "../utils/errorHandling.js";
import jwt from "jsonwebtoken";

const auth = () => {
  return asyncHandler(async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
      return next(new AppError("token is required", 400));
    }
    const decoded = jwt.verify(token, process.env.loginToken);
    if (!decoded) {
      return next(new AppError("Invalid token", 401));
    }
    req.id = decoded.id;
    next();
  });
};

export default auth;
