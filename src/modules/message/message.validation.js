import joi from "joi";

export const sendMessage = joi.object({
  content: joi.string().required(),
  receiverId: joi.number().required(),
});

export const deleteMessage = joi.object({
  messageId: joi.number().required(),
});
