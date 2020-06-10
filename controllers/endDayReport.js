const asyncErrorWrapper = require("express-async-handler");
var nodes7 = require('nodes7');  // This is the package name, if the repository is cloned you may need to require 'nodeS7' with uppercase S
var conn = new nodes7;






// var doneReading = false;
// var doneWriting = false;

// var variables = { 

//     nToplamCalismaDk: 'DB6,INT0',
//     nToplamCalismaSn: 'DB6,INT2',
//     nToplamBeklemeDk: 'DB6,INT4',
//     nToplamBeklemeSn: 'DB6,INT6',
//     nToplamDurmaDk: 'DB6,INT8',
//     nToplamDurmaSn: 'DB6,INT10'

// };



//   var data;


  

//   conn.initiateConnection({port: 102, host: '192.168.200.1', rack: 0, slot: 1}, connected); // slot 2 for 300/400, slot 1 for 1200/1500

//   function connected(err) {
//     if (typeof(err) !== "undefined") {
//       // We have an error.  Maybe the PLC is not reachable.
//       console.log(err);
//       process.exit();
//     }

//     conn.setTranslationCB(function(tag) {return variables[tag];}); 	// This sets the "translation" to allow us to work with object names
//     conn.addItems(['nToplamCalismaDk' , 'nToplamCalismaSn' , 'nToplamBeklemeDk' , 'nToplamBeklemeSn' , 'nToplamDurmaDk' , 'nToplamDurmaSn']);     
    
//   }



//   function valuesReady(anythingBad, values) {
//     if (anythingBad) { console.log("SOMETHING WENT WRONG READING VALUES!!!!"); }
//     console.log(values);
//     console.log("Done reading.");

    
    
    
//     doneReading = true;
//     if (doneWriting) { process.exit(); }
//     data = values;
    
//   }
 

  

 
  const getEndDayReport = asyncErrorWrapper(async (req,res,next) => {
    await conn.readAllItems(valuesReady);
  
    newData = {
      test: 5
    };


    newData = await data;

    return res
    .status(200)
    .json({
      success :   true,
      data    :   newData
    });
    
});



module.exports = {
    getEndDayReport,
};