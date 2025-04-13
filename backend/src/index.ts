import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string);
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({
    message: "Welcome to Booking App",
  });
});

app.listen(7000, () => {
  console.log("Server is running on port 7000");
});
