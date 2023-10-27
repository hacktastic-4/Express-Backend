const express = require("express");

const router = express.Router();

const { optimization } = require("../contollers/ml");

router.get("/optimization/:id", optimization);

module.exports = router;
