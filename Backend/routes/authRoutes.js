// const express = require('express');
// const router = express.Router();
// const { loginWithGoogle } = require('../controllers/authController');

// router.post('/login', loginWithGoogle);
const express = require('express');
const router = express.Router();
const { googleAuth } = require('../services/googleAuthService');

router.post('/login', async (req, res) => {
  try {
    const { token } = req.body;
    const { user } = await googleAuth(token); // Call your Google OAuth service function here
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error during login:', error); // Logs full error stack
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// module.exports = router;

module.exports = router;
