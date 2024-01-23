const { sendMessage, getMessages } = require("../controllers/message.controller");
const express = require("express");
const router = express.Router();

// router.post('/messages', sendMessage)
router.get('/messages/:userId', getMessages);

module.exports = router