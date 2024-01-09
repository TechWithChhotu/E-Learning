import express from "express";
import cookieParser from "cookie-parser";
import userRoute from "./routers/user.routes.js";
import courseRoute from "./routers/course.routes.js";
import cors from "cors";
import paymentRoute from "./routers/payment.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/v1/user/", userRoute);
app.use("/api/v1/course/", courseRoute);
app.use("/api/v1/payment/", paymentRoute);

export default app;
