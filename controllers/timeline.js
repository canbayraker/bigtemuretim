const asyncErrorWrapper = require("express-async-handler");
const { sendResponseToClient } = require("../helpers/timeline/sendResponse");
const { updateWithActualTime } = require("../helpers/timeline/updateWithActualTime");
const Timeline = require("../models/Timeline");






const createFirstTimelines = asyncErrorWrapper(async (req,res,next) => {

    const { label , processid , start , end , bordercolor , color , id } = req.body;

    const newTimeline = await Timeline.create({
        label,
        processid,
        start,
        end,
        bordercolor,
        color,
        id
    });
    sendResponseToClient(newTimeline,res);
    console.log("Console Report:    First Timeline created with ProcessID: " + processid + "and with id: " + id);

});









const createTimeline = asyncErrorWrapper(async (req,res,next) => {

    const { label , processid , start , end , bordercolor , color , id } = req.body;

    // ID'ye 1 eklemek için son record aranıyor
    const lastRecord = await Timeline.findOne({processid: processid}).sort({ _id: -1}).limit(1);     // Son id ye sahip elemanı buluyorum
    const newID = (parseInt(lastRecord.id)) + 1;                                                    // Son id'li elemanın id'sine 1 ekliyorum

    // +1 ID'ye sahip yeni eleman DB'ye ekleniyor
    const newTimeline = await Timeline.create({
        label,
        processid,
        start,
        end,
        bordercolor,
        color,
        id : newID
    });
    sendResponseToClient(newTimeline,res);
    console.log("Console Report:    New timeline created in database successfully for machine: " + processid + "  with id: " + newID);
});







const getAllTimelines = asyncErrorWrapper(async (req,res,next) => {
    

    const allTimelines = await Timeline.find();

    sendResponseToClient(allTimelines,res);
    console.log("Console Report:    All timelines get succesfully done");
});




const updateEnd = asyncErrorWrapper(async (req,res,next) => {

    const { processid } = req.body;
    const lastRecord = await Timeline.findOne({processid: processid}).sort({ id: -1}).limit(1);     // Request'ten gelen processid'ye sahip elemanlar("D") arasından, son id ye sahip elemanı buluyorum
    // console.log("LAST RECORDS FOR UPDATE" + lastRecord);
    updateWithActualTime(lastRecord,res);
       

});


const deleteRecord = asyncErrorWrapper(async (req,res,next) => {
    const { id } = req.body;
    console.log("delete id" + id);
    const deletedReport = await Timeline.deleteMany({id: id});    
});




module.exports = {
    createFirstTimelines,
    createTimeline,
    getAllTimelines,
    updateEnd,
    deleteRecord
};