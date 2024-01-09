import Razorpay from "razorpay";

var instance = new Razorpay({
  key_id: "rzp_test_Lje30DWDl2xWSJ",
  key_secret: "8A1IMePCJ6P9lzOj42uvoHXa",
});

const createOrder = async (req, res) => {
  var options = {
    amount: 50000, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  instance.orders.create(options, function (err, order) {
    console.log(order);
    res.send({ orderId: order.id });
  });
};

export default createOrder;
