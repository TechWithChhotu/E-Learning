import express from "express";
import cookieParser from "cookie-parser";
import userRoute from "./routers/user.routes.js";
import courseRoute from "./routers/course.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user/", userRoute);
app.use("/api/v1/course/", courseRoute);

export default app;
