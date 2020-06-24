const asyncErrorWrapper = require("express-async-handler");
const PerformanceTable = require("../models/PerformanceTable");


const createPerformanceTable = asyncErrorWrapper(async (req,res,next) => { 

  const newTable = await PerformanceTable.create({
    id: 1,
    machine1:{
      processid: "1",
      machineName: "Makine-1",
      operator: "Can Bayraker_dB",
      calismaSuresi: 1000,
      beklemeSuresi: 550,
      durmaSuresi: 700
    },
    machine2:{
      processid: "2",
      machineName: "Makine-2",
      operator: "Can Bayraker_dB",
      calismaSuresi: 1000,
      beklemeSuresi: 550,
      durmaSuresi: 700
    },
    machine3:{
      processid: "3",
      machineName: "Makine-3",
      operator: "Can Bayraker_dB",
      calismaSuresi: 1000,
      beklemeSuresi: 550,
      durmaSuresi: 700
    },
    machine4:{
      processid: "4",
      machineName: "Makine-4",
      operator: "Can Bayraker_dB",
      calismaSuresi: 1000,
      beklemeSuresi: 550,
      durmaSuresi: 700
    },
    machine5:{
      processid: "5",
      machineName: "Makine-5",
      operator: "Can Bayraker_dB",
      calismaSuresi: 1000,
      beklemeSuresi: 550,
      durmaSuresi: 700
    },
    machine6:{
      processid: "6",
      machineName: "Makine-6",
      operator: "Can Bayraker_dB",
      calismaSuresi: 1000,
      beklemeSuresi: 550,
      durmaSuresi: 700
    },
    machine7:{
      processid: "7",
      machineName: "Makine-7",
      operator: "Can Bayraker_dB",
      calismaSuresi: 1000,
      beklemeSuresi: 550,
      durmaSuresi: 700
    },
    machine8:{
      processid: "8",
      machineName: "Makine-8",
      operator: "Can Bayraker_dB",
      calismaSuresi: 1000,
      beklemeSuresi: 550,
      durmaSuresi: 700
    },
    machine9:{
      processid: "9",
      machineName: "Makine-9",
      operator: "Can Bayraker_dB",
      calismaSuresi: 1000,
      beklemeSuresi: 550,
      durmaSuresi: 700
    },
    machine10:{
      processid: "10",
      machineName: "Makine-10",
      operator: "Can Bayraker_dB",
      calismaSuresi: 1000,
      beklemeSuresi: 550,
      durmaSuresi: 700
    }
});

  return res
  .status(200)
  .json({
      success :   true,
      data : newTable
  });
});



const updatePerformanceTable = asyncErrorWrapper(async (req,res,next) => { 

  // const actualReportValues = await PerformanceTable.findOne();
  // console.log(actualReportValues);

  // return res
  // .status(200)
  // .json({
  //     success :   true,
  //     data : newTable
  // });


});

const getPerformanceTable = asyncErrorWrapper(async (req,res,next) => { 

  const actualReportValues = await PerformanceTable.findOne();

  return res
  .status(200)
  .json({
      success :   true,
      data : actualReportValues
  });

});


module.exports = {
  createPerformanceTable,
  updatePerformanceTable,
  getPerformanceTable
};