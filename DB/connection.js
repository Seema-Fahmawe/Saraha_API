import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("saraha", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const connectDB = () => {
  sequelize
    .sync()
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.error("Error connecting to the database", err);
    });
};

export default connectDB;
