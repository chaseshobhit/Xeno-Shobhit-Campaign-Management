const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const verifyToken = async (token) => {
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      return ticket.getPayload();
    } catch (error) {
      console.error('Error verifying Google token:', error.message);
      throw new Error('Invalid Google token');
    }
  };
  

const googleAuth = async (token) => {
  const payload = await verifyToken(token);
  let user = await User.findOne({ googleId: payload.sub });

  if (!user) {
    user = new User({
      googleId: payload.sub,
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
    });
    await user.save();
  }

  const jwtToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { token: jwtToken, user };
};

module.exports = { googleAuth };
