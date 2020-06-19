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

    const { processid , machine } = req.body;
    const oneMachineState = await MachineState.findOne();
    const lastRecord = await Timeline.findOne({processid: processid}).sort({ _id: -1}).limit(1);

    const _newVal = oneMachineState.Machine[machine];

    if (lastRecord.label == "Kapalı") {
       _oldVal = 0;
    }   
    if (lastRecord.label == "Bekleme") {
        _oldVal = 1;
    }
    if (lastRecord.label == "Üretim") {
        _oldVal = 2;
    }
    

    return res
    .status(200)
    .json({
        success     :   true,
        oldVal      :   _oldVal,
        newVal      :   _newVal
    });

    console.log("Console Report:    All Machine States get succesfully done");

});


module.exports = {
    createMachineStatus,
    getMachineStatus
};