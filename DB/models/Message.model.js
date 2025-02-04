import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import userModel from "./User.model.js";

const messageModel = sequelize.define(
  "Message",
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
userModel.hasMany(messageModel);
messageModel.belongsTo(userModel);

export default messageModel;
