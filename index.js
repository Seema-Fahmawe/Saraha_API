import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import initApp from "./src/app.router.js";
const app = express();

initApp(app, express);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
