const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MachineStateSchema = new Schema({

    Machine1: {
        type       :   Number
    },
    Machine2: {
        type       :   Number
    },
    Machine3: {
        type       :   Number
    },
    Machine4: {
        type       :   Number
    },
    Machine5: {
        type       :   Number
    },
    Machine6: {
        type       :   Number
    },
    Machine7: {
        type       :   Number
    },
    Machine8: {
        type       :   Number
    },
    Machine9: {
        type       :   Number
    },
    Machine10: {
        type       :   Number
    },
    Machine11: {
        type       :   Number
    },
    Machine12: {
        type       :   Number
    },
    Machine13: {
        type       :   Number
    },
    Machine14: {
        type       :   Number
    },
    Machine15: {
        type       :   Number
    }  
});

module.exports = mongoose.model("MachineState",MachineStateSchema);