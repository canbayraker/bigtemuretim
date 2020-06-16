const express = require("express");
const { createTimeline , getAllTimelines , updateEnd , deleteRecord } = require("../controllers/timeline");
const { getMachineStatus , createMachineStatus } = require("../controllers/getMachineStatus");
const router = express();


router.post("/create",createTimeline);
router.get("/getAll",getAllTimelines);
router.put("/updateEnd",updateEnd);
router.post("/getMachineStatus",getMachineStatus);
router.get("/deleteRecord",deleteRecord);
router.get("/createMachineStatus",createMachineStatus);


module.exports = router;