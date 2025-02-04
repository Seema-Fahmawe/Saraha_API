import { asyncHandler } from "../utils/errorHandling.js";
import jwt from "jsonwebtoken";

const auth = () => {
  return asyncHandler(async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
      return next(new Error("token is required"));
    }
    const decoded = jwt.verify(token, process.env.loginToken);
    req.id = decoded.id;
    return next();
  });
};

export default auth;
