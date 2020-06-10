const asyncErrorWrapper = require("express-async-handler");
const { sendResponseToClient } = require("../helpers/timeline/sendResponse");
const { updateWithActualTime } = require("../helpers/timeline/updateWithActualTime");
const Timeline = require("../models/Timeline");




const createTimeline = asyncErrorWrapper(async (req,res,next) => {

    const { label , processid , start , end , bordercolor , color , id } = req.body;

    const lastID = await Timeline.findOne({processid: processid}).sort({ id: -1}).limit(1);     // Son id ye sahip elemanı buluyorum
    const newID = (parseInt(lastID.id)) + 1;                                                    // Son id'li elemanın id'sine 1 ekliyorum

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
    console.log("Console Report:    New timeline created in database successfully with id:" + newID);
});







const getAllTimelines = asyncErrorWrapper(async (req,res,next) => {


    const allTimelines = await Timeline.find();

    sendResponseToClient(allTimelines,res);
    console.log("Console Report:    All timelines get succesfully done");
});




const updateEnd = asyncErrorWrapper(async (req,res,next) => {

    const { processid , id } = req.body;

    const timeLine = await Timeline.findOne({ processid: processid, id: id });  // İlgili processid ve id 'ye sahip elemanı bul

    updateWithActualTime(timeLine,res);
       

});




module.exports = {
    createTimeline,
    getAllTimelines,
    updateEnd
};