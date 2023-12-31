import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next) => {
  try {
    const { LearnOnline } = req.cookies;

    if (!LearnOnline) {
      return next(
        res.status(401).json({
          success: false,
          message: "Unauthorized! plz login first",
        })
      );
    }

    //    verify the user with JWT and decode it to get its data
    jwt.verify(LearnOnline, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log(err);
      }
      req.user = decoded;
      console.log(`req.user ==> `);
      console.log(req.user);

      next();
    });

    //   check for expired tokens
    //     if (userDetails && Date.now() >= userDetails["exp"] * 1000 ) {
    //       throw new Error('Expired Token');
    // }
  } catch (err) {
    res.status(401).json({
      error: "isLoggined || Authentication failed. Please login again.",
    });
  }
};

export default isLoggedIn;
