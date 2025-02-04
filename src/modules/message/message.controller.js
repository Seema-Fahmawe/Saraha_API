import messageModel from "../../../DB/models/Message.model.js";
import userModel from "../../../DB/models/User.model.js";
import { asyncHandler } from "../../utils/errorHandling.js";

export const getMessages = asyncHandler(async (req, res, next) => {
  const messages = await messageModel.findAll({
    where: {
      UserId: req.id,
    },
  });
  return res.json({ message: "success", messages });
});

export const sendMessage = asyncHandler(async (req, res, next) => {
  const { content } = req.body;
  const { receiverId } = req.params;
  const user = await userModel.findOne({ where: { id: receiverId } });
  if (user === null) {
    return next(new Error("Invalid receiver"));
  }
  const message = await messageModel.create({ content, UserId: receiverId });
  return res.json({ message: "success", message });
});

export const deleteMessage = asyncHandler(async (req, res, next) => {
  const { messageId } = req.params;

  const message = await messageModel.destroy({
    where: {
      id: messageId,
      UserId: req.id,
    },
  });

  if (message === 0) {
    return next(
      new Error("Message not found or you don't have permission to delete it")
    );
  }
  return res.status(200).json({ message: "success" });
});
