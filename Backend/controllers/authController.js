const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const loginWithGoogle = async (req, res) => {
  try {
    const { token } = req.body;
    
    // Verify the token using Google OAuth library
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    
    // Find or create user in the database
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

    // Respond with user data
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: 'Authentication failed', error: err.message });
  }
};

module.exports = { loginWithGoogle };
