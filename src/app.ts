import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRouter";
import cookieParser from "cookie-parser";
import transactionRoutes from "./routes/transactionRouter";
import categoryRoutes from "./routes/categoryRoutes";
import "./models";

const app = express();

const allowedOrigins = [
  "http://localhost:5050",
  "https://finance-mind-web.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    credentials: true,
  })
);


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/categories", categoryRoutes);

export default app;
