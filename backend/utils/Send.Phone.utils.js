import createTwilioClient from "twilio";

const accountSid = "AC887b26cf86f3e59fc847035d8cf28304";
const authToken = "89ddc7afe4efd5326ea3f7c3dae1e71f";

const twilioClient = createTwilioClient(accountSid, authToken);

import { generateOTP } from "../helper/helper.js";

const sendOTPonNumber = async (clientPhoneNumber = "+918920823219") => {
  const OTP = generateOTP();
  twilioClient.messages
    .create({
      body: `Learn Online, your varification code is ${OTP}. ThankU team Learn Online`,
      to: clientPhoneNumber,
      from: "+18582408056", // From a valid Twilio number
    })
    .then((message) => OTP);
};

export default sendOTPonNumber;
