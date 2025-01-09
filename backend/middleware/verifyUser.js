const jwt = require('jsonwebtoken');
const User = require('../models/User');  // Adjust the path as needed

const verifyUser = async (req, res, next) => {
  const token = req.header("auth-token");
  
  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  try {
    // Verify the token using the JWT secret from .env
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    
    // Find the user from the token's user ID
    const user = await User.findById(verified.id);
    
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    
    // Attach the user to the request object for use in subsequent middleware
    req.user = user;
    next();
  } catch (err) {
    return res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = verifyUser;
