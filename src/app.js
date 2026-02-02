import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import competitorRoutes from "./routes/competitor.routes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/competitors", competitorRoutes);


export default app;
