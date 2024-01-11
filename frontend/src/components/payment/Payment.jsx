import axios from "axios";
import logo from "../../assets/LO-White.png";
import PropTypes from "prop-types";

function Payment({ amount }) {
  const handleOpenRazorpay = (data) => {
    console.log(`Data ==> `);
    console.log(data);

    var options = {
      key: "rzp_test_Lje30DWDl2xWSJ", // Enter the Key ID generated from the Dashboard
      amount: data.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: data.data.currency,
      name: "Learn Online",
      description: "Learn Online",
      image: logo,
      order_id: data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async (response) => {
        console.log("response ==> ", response);
        await axios
          .post("http://localhost:3000/api/v1/payment/verify", { ...response })
          .then((res) => {
            console.log(`Payment is successful ${res}`);
          })
          .catch((e) => {
            console.log(e);
          });
      },

      notes: {
        address: "Learn Online",
      },
      theme: {
        color: "#1aa3ff",
      },
    };

    const razorpayInstance = new window.Razorpay(options);

    razorpayInstance.open();
  };

  const handlePayment = (amount) => {
    axios
      .post("http://localhost:3000/api/v1/payment/order", { amount })
      .then((res) => {
        console.log(res.data, " Line num 43");
        handleOpenRazorpay(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      <button
        onClick={() => handlePayment(amount * 100)}
        className=" bg-green-600 block m-auto my-20 py-2 px-10 rounded text-white font-semibold text-xl"
      >
        Pay now
      </button>
    </div>
  );
}

Payment.propTypes = {
  amount: PropTypes.number.isRequired,
};
export default Payment;
