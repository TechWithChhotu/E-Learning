import { User } from "../models/user.models.js";
import { check, validationResult } from "express-validator";
import sendOTPonNumber from "../utils/Send.Phone.utils.js";
import { v2 } from "cloudinary";
//import sendOnWhatsApp from "../utils/send.whatsapp.utils.js";

/*======================Edit-Profile======================*/
const editProfile = async (req, res) => {
  try {
    const { firstName, lastName, phone } = req.body;
    // ****************--> file upload start*********************

    const user = await User.findOne({ phone });

    if (req.file) {
      try {
        const result = await v2.uploader.upload(req.file.path, {
          folder: "LearnOnline", // Save files in a folder named lms
          width: 250,
          height: 250,
          gravity: "faces", // This option tells cloudinary to center the image around detected faces (if any) after cropping or resizing the original image
          crop: "fill",
        });

        if (result) {
          //user.avatar = result.public_id;
          user.avatar = result.secure_url;

          // remove file from local server
          // fs.rm(`uploads/${req.file.filename}`);
        }
      } catch (err) {
        new AppError(`file not uploaded please try again, ERROR: ${err}`, 500);
      }
    }
    // ****************--> file upload end*********************
    user.name = `${firstName} ${lastName}`;
    await user.save();

    res.status(201).json({
      success: true,
      message: "Updated successfully",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

/*======================loginOrRegister======================*/
const loginOrRegister = async (req, res, next) => {
  try {
    const { phone } = req.body;

    const existingUser = await User.findOne({ phone });

    const OTP = await sendOTPonNumber("+918920823219");
    //sendOnWhatsApp();

    if (existingUser) {
      return res.status(201).json({
        success: true,
        message: "User exist",
        exist: true,
        OTP,
      });
    }

    res.status(201).json({
      success: true,
      message: "User does not exist",
      exist: false,
      OTP,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Some went wrong, plz try again",
    });
  }
};

/*======================Sign-Up======================*/
const register = async (req, res, next) => {
  const validationRules = [
    check("name").notEmpty().withMessage("Name is required"),
    check("email").isEmail().withMessage("Invalid email address"),
    check("phone").isMobilePhone().withMessage("Invalid phone number"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ];

  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, password, userOTP, OTP } = req.body;
  if (userOTP === OTP) {
    try {
      const user = await User.findOne({ email, phone });

      const newUser = await User.create({
        name,
        email,
        phone,
        password,
      });

      if (!newUser) {
        return res.json({
          success: false,
          message: "Something went wrong in creating user, plz try again",
        });
      }

      /*----------------------Set-Cookie----------------------*/
      const token = await newUser.generateToken();
      res.cookie("LearnOnline", token);

      //==============

      res.json({
        success: true,
        message: "User created successfully",
        data: newUser,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
  } else {
    res.json({
      success: false,
      message: "OTP Invalid",
    });
  }
};

/*======================Sign-In======================*/
const login = async (req, res, next) => {
  try {
    const validationRules = [
      check("phone").isMobilePhone().withMessage("Invalid phone number"),
    ];

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { phone, userOTP, OTP } = req.body;

    if (userOTP === OTP) {
      const user = await User.findOne({ phone });
      const token = user.generateToken();
      res.cookie("LearnOnline", token);

      res.status(200).json({
        success: true,
        message: "Login successfully",
        user,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const ping = (req, res) => {
  res.send("Pong");
};

export { ping, register, login, loginOrRegister, editProfile };
