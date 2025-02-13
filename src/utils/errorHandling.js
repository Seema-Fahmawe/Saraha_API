import { AppError } from "./AppError.js";

export const asyncHandler = (fun) => {
  return async (req, res, next) => {
    try {
      return await fun(req, res, next);
    } catch (error) {
     console.log(error);
      return next(new AppError("catch errro", 500));
    }
  };
};
