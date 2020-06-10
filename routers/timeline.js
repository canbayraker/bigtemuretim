const express = require("express");
const { createTimeline , getAllTimelines , updateEnd } = require("../controllers/timeline");
const router = express();


router.post("/create",createTimeline);
router.get("/getAll",getAllTimelines);
router.put("/updateEnd",updateEnd);


module.exports = router;