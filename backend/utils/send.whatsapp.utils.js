// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

import createTwilioClient from "twilio";

const accountSid = "AC887b26cf86f3e59fc847035d8cf28304";
const authToken = "89ddc7afe4efd5326ea3f7c3dae1e71f";

const client = createTwilioClient(accountSid, authToken);

const sendOnWhatsApp = () => {
  console.log("SendOnWhasApp called");
  //reference point https://github.com/twilio/twilio-node
  client.messages
    .create({
      from: "whatsapp:+18582408056",
      body: "Hello there!",
      to: "whatsapp:+918920823219",
    })
    .then((message) => console.log(message.message));
};

export default sendOnWhatsApp;
