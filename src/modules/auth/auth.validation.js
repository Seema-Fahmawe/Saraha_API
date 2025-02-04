import joi from "joi";

export const registerSchema = joi.object({
  userName: joi.string().min(2).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
});

export const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
