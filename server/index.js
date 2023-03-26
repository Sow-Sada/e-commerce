import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT || 6000;
const app = express();
app.use(cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
