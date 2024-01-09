import express from "express";
import createOrder from "../payment/razorpay.payment.js";

const paymentRoute = express.Router();
paymentRoute.post("/create/orderId", createOrder);

export default paymentRoute;
