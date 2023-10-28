const express = require("express");

const router = express.Router();

const { optimization, singleUserIdData } = require("../contollers/ml");

router.get("/optimization/:id", optimization);
router.get("/singleUser/:id", singleUserIdData);

module.exports = router;
