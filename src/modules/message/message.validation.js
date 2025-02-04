import joi from "joi";

export const sendMessage = joi.object({
  content: joi.string().required(),
});

export const deleteMessage = joi.object({
  messageId: joi.number(),
});
