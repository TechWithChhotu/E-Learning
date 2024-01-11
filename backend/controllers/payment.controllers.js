import Razorpay from "razorpay";
const RAZORPAY_SECRET_KEY = "8A1IMePCJ6P9lzOj42uvoHXa";
const RAZORPAY_ID_KEY = "rzp_test_Lje30DWDl2xWSJ";
import crypto from "crypto";

function generateSignature(orderId, paymentId, secretKey) {
  const hmac = crypto.createHmac("sha256", secretKey);
  const data = `${orderId}|${paymentId}`;
  hmac.update(data);
  const generatedSignature = hmac.digest("hex");
  return generatedSignature;
}

const order = (req, res) => {
  console.log(`Order Created Now`);

  let instance = new Razorpay({
    key_id: RAZORPAY_ID_KEY,
    key_secret: RAZORPAY_SECRET_KEY,
  });
  var options = {
    amount: req.body.amount, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  instance.orders.create(options, function (err, order) {
    console.log("Order ==> ", order);
    if (err) {
      return res.send({ code: 500, message: err });
    }
    return res.send({ code: 200, message: "order created", data: order });
  });
};

/*----------------->>Varify payment<<-----------------*/
const verify = (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;

  const generated_signature = generateSignature(
    razorpay_order_id,
    razorpay_payment_id,
    RAZORPAY_SECRET_KEY
  );

  if (generated_signature == razorpay_signature) {
    res.status(201).json({
      success: true,
      message: "Payment is successfull",
      amount: 500,
    });
  }
};

const ping = (req, res) => {
  res.send("PONG");
};

export { order, verify, ping };
