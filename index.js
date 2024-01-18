import express from "express";
import dotenv from "dotenv";
import router from "./src/routes/index.js";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();
const { PORT, DB_URI } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello world!");
});

mongoose
  .connect(`${DB_URI}`)
  .then(() => console.log("Database Connected!"))
  .catch((error) => console.log(error));

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
