import express from "express";
import configRoutes from "./routes/config.routes";

const app = express();

app.use(express.json());
app.use("/api", configRoutes);

export default app;
