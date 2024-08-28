import express, { Request, Response } from "express";
import errorHandler from "./middlewares/errorHandler";
import { cardRouterHandler } from "./routes/card.route";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(express.json());
app.use(cors())

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health ok!" });
});

app.use("/api", cardRouterHandler);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
