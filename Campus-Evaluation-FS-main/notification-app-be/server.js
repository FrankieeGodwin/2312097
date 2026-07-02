import express from "express";
import cors from "cors";
import notificationRouter from "./routes/notificationRoutes.js";

const app = express();
app.use(cors())

app.use(express.json())

app.use("/api/notifications",notificationRouter);

app.listen(5000,()=> console.log("Server Running on PORT 5000"));