const express = require("express");
const { createPerformanceTable , updatePerformanceTable , getPerformanceTable } = require("../controllers/performanceTable");
const router = express();

router.get("/create",createPerformanceTable);
router.get("/update",updatePerformanceTable);
router.get("/get",getPerformanceTable);

module.exports = router;