import express from "express";
import createOrder from "../payment/razorpay.payment.js";
import { order, verify } from "../controllers/payment.controllers.js";

const paymentRoute = express.Router();
paymentRoute.post("/order", order);
paymentRoute.post("/verify", verify);

export default paymentRoute;
