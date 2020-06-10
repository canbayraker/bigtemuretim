const express = require("express");
const { getEndDayReport } = require("../controllers/endDayReport");
const router = express();

router.get("/get",getEndDayReport);

module.exports = router;