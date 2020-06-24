const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimelineSchema = new Schema({

    label: {
        type       :   String
    },
    processid: {
        type       :   String
    },
    start: {
        type       :   String
    },
    end: {
        type       :   String
    },
    bordercolor: {
        type       :   String
    },
    color: {
        type       :   String
    },
    id: {
        type       :   String
    }

});

module.exports = mongoose.model("Timeline",TimelineSchema);