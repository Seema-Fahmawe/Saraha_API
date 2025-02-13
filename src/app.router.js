import connectDB from "../DB/connection.js";
import cors from "cors";
import userRouter from "./modules/user/user.router.js";
import authRouter from "./modules/auth/auth.router.js";
import messageRouter from "./modules/message/message.router.js";
export const initApp = (app, express) => {
  app.use(express.json());
  app.use(cors());
  app.use("/user", userRouter);
  app.use("/auth", authRouter);
  app.use("/message", messageRouter);
  app.use((err, req, res, next) => {
    return res.status(err.statusCode).json({ message: err.message });
  });
  connectDB();
};
export default initApp;
