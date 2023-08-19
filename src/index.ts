import express from "express";
import recipeRoute from "./routes/recipe";
import docsRouter from "./routes/docs";
import mongoose from "mongoose";
import { HandleServerError } from "./controller/recipe";
import cors from "cors";
import dotenv from "dotenv";
import { log } from "console";
import { getIndex } from "./controller";
dotenv.config();

const app = express();

mongoose.set("autoIndex", false);
mongoose.set("strictQuery", false);
const connectDB = async () => {
  try {
    if (process.env.MONGODB_URL)
      await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    process.exit(1);
  }
};

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", recipeRoute);
app.use("/docs", docsRouter);

app.get("/", getIndex);

app.use(HandleServerError);

connectDB().then(() => {
  app.listen(3000, () => {
    log("server listening");
  });
});
