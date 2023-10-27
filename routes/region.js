const express = require("express");

const router = express.Router();

const {
  regionWiseResult,
  regionWiseNumericResult,
} = require("../contollers/region");

router.get("/:region/:category", regionWiseResult);
router.get("/:region/:category/:numeric", regionWiseNumericResult);

module.exports = router;
