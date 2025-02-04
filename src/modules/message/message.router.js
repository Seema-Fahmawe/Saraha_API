import { Router } from "express";
import * as messageController from "./message.controller.js";
import auth from "../../middleware/auth.middleware.js";
import validation from "../../middleware/validation.js";
import * as validator from "./message.validation.js";
const router = Router();
router.get("/", auth(), messageController.getMessages);
router.post(
  "/:receiverId",
  auth(),
  validation(validator.sendMessage),
  messageController.sendMessage
);
router.delete(
  "/:messageId",
  auth(),
  validation(validator.deleteMessage),
  messageController.deleteMessage
);
export default router;
