const express = require("express");
const timeline = require("./timeline");
const performanceTable = require("./performanceTable");
const router = express();

router.use("/timeline",timeline);
router.use("/performance",performanceTable);


module.exports = router;