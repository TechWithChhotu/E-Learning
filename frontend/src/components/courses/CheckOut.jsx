import { useParams } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import logo from "../../assets/LO-White.png";

function CheckOut() {
  const { id } = useParams();
  const [totalPrice, setTotalPrice] = useState(0);

  const data = useSelector((state) => state.userSlice.courses);
  const [course, setCourse] = useState({});

  useEffect(() => {
    const result = data ? data.find((e) => e._id == id) : "";
    setCourse(result);
    setTotalPrice(
      Math.round(result.price - (course.price * course.discount) / 100)
    );
  }, [course, data, id]);

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

  return (
    <div className="flex justify-center mt-14">
      <div className="max-w-sm bg-white  border-gray-100 rounded-lg overflow-hidden shadow-lg dark:bg-white dark:border-white">
        <div className="flex justify-between px-2 w-72 py-2">
          <img className="rounded-t-lg w-40 " src={course.thumbnail} alt="" />
          <h5 className="mb-2 text-sm  font-semibold tracking-tight text-gray-800 text-center">
            {course.title}
          </h5>
        </div>

        <div className="p-5 py-0  h-20 ">
          <div>
            <p className="mb-2 text-sm text-gray-500">Have a discount coupon</p>
            <div className="flex gap-2   justify-center items-center">
              <input
                type="text"
                className="outline-none  bg-gray-200 px-2 text-sm py-1 rounded-md "
                placeholder="Enter coupon code"
              />
              <button className="text-orange-600 text-sm font-semibold">
                Apply
              </button>
            </div>
          </div>
        </div>

        <div className="px-10 grid gap-y-2">
          <p className="flex justify-between text-sm">
            <span>Subtotal:</span>{" "}
            <span>
              <FaIndianRupeeSign className="inline-block" />
              {course.price}.00
            </span>
          </p>
          <p className="flex justify-between text-sm">
            <span>Discount:</span>
            <span className="text-green-600 font-semibold ">
              <FaIndianRupeeSign className="inline-block" />
              {Math.round((course.price * course.discount) / 100)}.00
            </span>
          </p>
          <p className="border"></p>
          <p className="flex justify-between text-sm">
            <span>Total:</span>
            <span className="">
              <FaIndianRupeeSign className="inline-block" />{" "}
              {course.discount == 100 ? "Free" : totalPrice}.00
            </span>{" "}
          </p>
        </div>

        <div className="flex justify-center items-center py-5">
          <button
            onClick={() => {
              handlePayment(totalPrice * 100);
            }}
            className="bg-orange-500 text-sm rounded-md px-2 hover:bg-orange-600 text-center py-2 text-white"
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
