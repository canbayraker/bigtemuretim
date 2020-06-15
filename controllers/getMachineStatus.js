const asyncErrorWrapper = require("express-async-handler");
const { sendResponseToClient } = require("../helpers/timeline/sendResponse");
const MachineState = require("../models/MachineState");
const Timeline = require("../models/Timeline");


const getMachineStatus = asyncErrorWrapper(async (req,res,next) => { 

    const allMachineStates = await MachineState.find();

    const { processid } = req.body;
    const lastRecord = await Timeline.findOne({processid: processid}).sort({ id: -1}).limit(1);

    if (lastRecord.label == "Kapalı") {
        oldVal = 0;
    }
    if (lastRecord.label == "Bekleme") {
        oldVal = 1;
    }
    if (lastRecord.label == "Üretim") {
        oldVal = 2;
    }

    return res
    .status(200)
    .json({
        success :   true,
        old     :   oldVal,
        data    :   allMachineStates
    });

    console.log("Console Report:    All Machine States get succesfully done");

});


module.exports = {
    getMachineStatus
};