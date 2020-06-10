const express = require("express");
const timeline = require("./timeline");
const endDayReport = require("./endDayReport");
const router = express();

router.use("/timeline",timeline);
//router.use("/endDayReport",endDayReport);


module.exports = router;