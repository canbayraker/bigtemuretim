const asyncErrorWrapper = require("express-async-handler");
const { sendResponseToClient } = require("../helpers/timeline/sendResponse");
const MachineState = require("../models/MachineState");
const Timeline = require("../models/Timeline");


const createMachineStatus = asyncErrorWrapper(async (req,res,next) => { 

    const createDB = await MachineState.create({
        Id: 1,
        Machine: {
            M1: 0,
            M2: 0,
            M3: 0,
            M4: 0,
            M5: 0,
            M6: 0,
            M7: 0,
            M8: 0,
            M9: 0,
            M10: 0,
            M11: 0,
            M12: 0,
            M13: 0,
            M14: 0,
            M15: 0
        }
    });

    return res
    .status(200)
    .json({
        success :   true
    });


});



const getMachineStatus = asyncErrorWrapper(async (req,res,next) => { 

    const allMachineStates = await MachineState.findOne();

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
    createMachineStatus,
    getMachineStatus
};