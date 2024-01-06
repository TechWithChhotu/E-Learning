import signinBanner from "../../assets/signin-banner.svg";
import logo from "../../assets/LO-White.png";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Toastify from "../toastify/Toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from "../../stores/user.slice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [otp, setOtp] = useState("");
  const [userOTP, setUserOTP] = useState("");

  const [otpAvailable, setOtpAvailable] = useState(false);

  const notify = (msg) =>
    toast.success(`${msg}`, {
      position: "top-center",
    });

  const handleSendOTP = async (e) => {
    e.preventDefault();

    if (!otpAvailable) {
      const result = await axios.post(
        "http://localhost:3000/api/v1/user/loginOrRegister",
        {
          phone: "8920823219",
        }
      );
      setOtp(result.data.OTP);
      notify("OTP Send Successfully");
      setOtpAvailable(true);
    } else {
      console.log(`OTP Available`);

      const result = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        {
          phone: "8920823219",
          OTP: `${otp}`,
          userOTP: `${userOTP}`,
        }
      );
      if (result) {
        dispatch(setAuth(result.data));
        navigate(-1);
        notify("Login Successfully");
      } else console.log(`something wrong, plz try again`);
    }
  };
  /*      {
        withCredentials: true,
      } */
  return (
    <div className="grid grid-cols-5  h-[450px]">
      <div className="col-span-3">
        <img src={signinBanner} alt="Sign-in Banner" />
      </div>

      <div className="col-span-2 h-full border-l border-gray-500 flex flex-col items-center  pt-10">
        <div className="flex justify-center gap-2 items-center pb-10">
          <img src={logo} alt="" className="rounded-full h-14" />
          <h2 className="text-[1.8rem] ">Learn Online</h2>
        </div>
        <p className="text-[1.5rem] pb-3">
          Get Onboard and jumpstart your career!
        </p>
        <p className="text-gray-500 pb-5">
          Please enter your phone number to login/register
        </p>

        <form onSubmit={handleSendOTP}>
          <div className="border-b border-gray-500 w-fit px-2 py-1">
            <select
              name="stdCode"
              id="STD-Code"
              className="outline-none text-[1.4rem] font-semibold"
            >
              <option value="IND +91">IND +91</option>
              <option value="USA +1">USA +1</option>
              <option value="UK +99">UK +99</option>
              <option value="AFG +78">AFG +78</option>
            </select>{" "}
            &nbsp; | &nbsp;&nbsp;
            <input
              type="text"
              placeholder="Enter your mobile num"
              id="PhoneNumber"
              className={`outline-none text-[1.1rem] text-gray-700  w-44 `}
              readOnly={otpAvailable}
            />
          </div>
          {otpAvailable && (
            <div className="mt-10 w-full  flex justify-center">
              <input
                type="text"
                name="userOTP"
                id="userOTP"
                className="border border-gray-500 rounded-lg h-8 outline-none px-2"
                placeholder="Enter your OTP"
                onChange={(e) => {
                  setUserOTP(e.target.value);
                }}
              />
            </div>
          )}

          <div className="flex justify-center mt-10">
            <button className="bg-orange-600 px-20 py-2 rounded-md text-white text-xl font-medium ">
              {otpAvailable ? "Login" : "Send OTP"}
            </button>
          </div>
        </form>
        <Toastify />
      </div>
    </div>
  );
}

export default Login;
