const express = require('express');
const { protect } = require('../middleware/auth');
const { registerUser, loginUser, getMe, forgotPassword, resetPassword } = require('../controllers/auth');

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);

router.get('/me', protect, getMe);

router.post('/forgotpassword', forgotPassword);

router.put('/resetpassword/:resettoken', resetPassword);

module.exports = router;
