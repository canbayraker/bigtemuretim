const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PerformanceTableSchema = new Schema({

    id: {
        type       :   Number
    },
    machine1: {
        processid: {
            type       :   String
        },
        machineName: {
            type       :   String
        },
        operator: {
            type       :   String
        },
        calismaSuresi: {
            type       :   Number
        },
        beklemeSuresi: {
            type       :   Number
        },
        durmaSuresi: {
            type       :   Number
        }
    },
    machine2: {
        processid: {
            type       :   String
        },
        machineName: {
            type       :   String
        },
        operator: {
            type       :   String
        },
        calismaSuresi: {
            type       :   Number
        },
        beklemeSuresi: {
            type       :   Number
        },
        durmaSuresi: {
            type       :   Number
        }
    },
    machine3: {
        processid: {
            type       :   String
        },
        machineName: {
            type       :   String
        },
        operator: {
            type       :   String
        },
        calismaSuresi: {
            type       :   Number
        },
        beklemeSuresi: {
            type       :   Number
        },
        durmaSuresi: {
            type       :   Number
        }
    },
    machine4: {
        processid: {
            type       :   String
        },
        machineName: {
            type       :   String
        },
        operator: {
            type       :   String
        },
        calismaSuresi: {
            type       :   Number
        },
        beklemeSuresi: {
            type       :   Number
        },
        durmaSuresi: {
            type       :   Number
        }
    },
    machine5: {
        processid: {
            type       :   String
        },
        machineName: {
            type       :   String
        },
        operator: {
            type       :   String
        },
        calismaSuresi: {
            type       :   Number
        },
        beklemeSuresi: {
            type       :   Number
        },
        durmaSuresi: {
            type       :   Number
        }
    },
    machine6: {
        processid: {
            type       :   String
        },
        machineName: {
            type       :   String
        },
        operator: {
            type       :   String
        },
        calismaSuresi: {
            type       :   Number
        },
        beklemeSuresi: {
            type       :   Number
        },
        durmaSuresi: {
            type       :   Number
        }
    },
    machine7: {
        processid: {
            type       :   String
        },
        machineName: {
            type       :   String
        },
        operator: {
            type       :   String
        },
        calismaSuresi: {
            type       :   Number
        },
        beklemeSuresi: {
            type       :   Number
        },
        durmaSuresi: {
            type       :   Number
        }
    },
    machine8: {
        processid: {
            type       :   String
        },
        machineName: {
            type       :   String
        },
        operator: {
            type       :   String
        },
        calismaSuresi: {
            type       :   Number
        },
        beklemeSuresi: {
            type       :   Number
        },
        durmaSuresi: {
            type       :   Number
        }
    },
    machine9: {
        processid: {
            type       :   String
        },
        machineName: {
            type       :   String
        },
        operator: {
            type       :   String
        },
        calismaSuresi: {
            type       :   Number
        },
        beklemeSuresi: {
            type       :   Number
        },
        durmaSuresi: {
            type       :   Number
        }
    },
    machine10: {
        processid: {
            type       :   String
        },
        machineName: {
            type       :   String
        },
        operator: {
            type       :   String
        },
        calismaSuresi: {
            type       :   Number
        },
        beklemeSuresi: {
            type       :   Number
        },
        durmaSuresi: {
            type       :   Number
        }
    }
    
});

module.exports = mongoose.model("PerformanceTable",PerformanceTableSchema);