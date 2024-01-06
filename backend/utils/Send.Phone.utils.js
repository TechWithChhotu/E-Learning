import createTwilioClient from "twilio";

const accountSid = "AC887b26cf86f3e59fc847035d8cf28304";
const authToken = "ac64bf2109b3e63c5258dfbde994791f";

const twilioClient = createTwilioClient(accountSid, authToken);

import { generateOTP } from "../helper/helper.js";

const sendOTPonNumber = async (clientPhoneNumber = "+918920823219") => {
  try {
    const OTP = generateOTP();
    return await twilioClient.messages
      .create({
        body: `Learn Online, your varification code is ${OTP}. ThankU team Learn Online`,
        to: clientPhoneNumber,
        from: "+18582408056", // From a valid Twilio number
      })
      .then((message) => {
        return OTP;
      });
  } catch (err) {
    console.log(err);
  }
};

export default sendOTPonNumber;
