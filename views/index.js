
// IMPORT
import {Request} from "./Request.js";    
const request = new Request();


//#region Fusion Chart Settings

const dataSource = {
  chart: {
    caption: "İmalat Takip Sistemi",
    subcaption: "Tuzla, Istanbul",
    theme: "fusion",
    dateformat: "dd-mm-yyyy hh:mn:ss",
    plottooltext: "Durum Aralığı <b>$start - $end - $duration</b> is <b>$label</b>"
  },
  legend: {
    item: [
      {
        label: "Üretim",
        color: "#62B58D"
      },
      {
        label: "Bekleme",
        color: "#FFC533"
      },
      {
        label: "Kapalı",
        color: "#F2726F"
      }
    ]
  },
   tasks: {
     task: [
    ]
  },
  processes: {
    isbold: "1",
    headertext: "Makineler",
    process: [
      {
        label: "Makine 1 ",
        id: "1"
      },
      {
        label: "Makine 2 ",
        id: "2"
      },
      {
        label: "Makine 3 ",
        id: "3"
      },
      {
        label: "Makine 4 ",
        id: "4"
      },
      {
        label: "Makine 5 ",
        id: "5"
      },
      {
        label: "Makine 6 ",
        id: "6"
      },
      {
        label: "Makine 7 ",
        id: "7"
      },
      {
        label: "Makine 8 ",
        id: "8"
      },
      {
        label: "Makine 9 ",
        id: "9"
      },
      {
        label: "Makine 10 ",
        id: "10"
      }
    ]
  },
  categories: [
    {
      category: [
        {
          start: "1-1-2000 07:30:00",
          end: "1-1-2000 19:30:00",
          name: "07:30 - 19:30"
        }
      ]
    },
    {
      bgalpha: "0",
      category: [
        {
          start: "1-1-2000 07:30:00",
          end: "1-1-2000 09:30:00",
          label: "Sabah 07:30 - 09:30"
        },
        {
          start: "1-1-2000 09:30:00",
          end: "1-1-2000 12:30:00",
          label: "Öğlenden Önce 09:30 - 12:30"
        },
        {
          start: "1-1-2000 12:30:00",
          end: "1-1-2000 15:30:00",
          label: "Öğlenden Sonra 12:30 - 15:30"
        },
        {
          start: "1-1-2000 15:30:00",
          end: "1-1-2000 17:30:00",
          label: "Akşam 15:30 - 17:30 "
        },
        {
          start: "1-1-2000 17:30:00",
          end: "1-1-2000 19:30:00",
          label: "Mesai 17:30 - 19:30"
        }
      ]
    }
  ]
};

//#endregion


//#region Get PLC Data and Decide

setInterval(() => {
  getStatus(1,"M1");
  getStatus(2,"M2");
  getStatus(3,"M3");
  getStatus(4,"M4");
  getStatus(5,"M5");
  getStatus(6,"M6");
  getStatus(7,"M7");
  getStatus(8,"M8");
  getStatus(9,"M9");
  getStatus(10,"M10");
}, 1000);


function getStatus(_processid,_machine){
  
  const data = {
    processid : _processid,
    machine   : _machine
  };

  request.post("https://mgcsolutions.net/api/timeline/getMachineStatus",data)
  .then(async data => {
    const oldVal = data.oldVal;
    const newVal = data.newVal;

    console.log("makine: " +_processid + "oldVal: " + oldVal);
    console.log("makine: " +_processid + "newVal: " + newVal);

  // DB'deki son timeline record ile plc'den geleni karşılaştırıyorum 
    if (newVal == oldVal) {
      console.log("VERİ AYNI : UPDATE");
      update(_processid);
    } 
    else {
      console.log("VERİ FARKLI : YENI TIMELINE");
      createNew(newVal,_processid);
    }   
  })
  .catch(err => console.log(err));
}

//#endregion


//#region REQUEST - GET ALL

setInterval(() => {
  request.get("https://mgcsolutions.net/api/timeline/getAll")
  .then(async data => {

  const test1 = data.data;
  console.log(test1); 
  dataSource.tasks.task = test1;

  })
  .catch(err => console.log(err));

}, 1000);

//#endregion


//#region REQUEST - UPDATE ENDTIME

function update(processid){

  const data = {
    processid : processid
  };

  request.put("https://mgcsolutions.net/api/timeline/updateEnd",data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
}

//#endregion


//#region REQUEST - CREATE TIMELINE

function createData(newData){
  request.post("https://mgcsolutions.net/api/timeline/create",newData)
    .then(async data => {
    const test1 = data;
    console.log("Create Response :  " +test1); 
    })
    .catch(err => console.log(err));
  }


function createNew(newRecord,processid){

  var currentDateTime = new Date();
  
  if (newRecord == 0) {

     const newData = {
      label       : "Kapalı",
      processid   : processid,
      start       : "1-1-2000 " + currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds(),
      end         : "1-1-2000 " + currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds(),
      bordercolor : "#62B58D",
      color       : "#F2726F"
    };
    createData(newData);
  }

    if (newRecord == 1) {

      const newData = {
        label       : "Bekleme",
        processid   : processid,
        start       : "1-1-2000 " + currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds(),
        end         : "1-1-2000 " + currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds(),
        bordercolor : "#62B58D",
        color       : "#FFC533"
      };
      createData(newData);
    }

    if (newRecord == 2) {

      const newData = {
      label       : "Üretim",
      processid   : processid,
      start       : "1-1-2000 " + currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds(),
      end         : "1-1-2000 " + currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds(),
      bordercolor : "#62B58D",
      color       : "#62B58D"
      };
      createData(newData);
    }
    
}

//#endregion


//#region  Create First Timeline For Each Machine
function createFirstTimelines(processid){

  var currentDateTime = new Date();
  const newData = {
    label       : "Kapalı",
    processid   : processid,
    start       : "1-1-2000 " + currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds(),
    end         : "1-1-2000 " + currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds(),
    bordercolor : "#62B58D",
    color       : "#F2726F",
    id          : "2"
  }; 

  request.post("https://mgcsolutions.net/api/timeline/createFirstTimelines",newData)
  .then(async data => {
  const test1 = data;
  console.log(test1); 
  })
  .catch(err => console.log(err));

}
//#endregion


//#region Fusion Chart Call

var myChart = new FusionCharts({
  type: "gantt",
  renderAt: "chart-container",
  width: "100%",
  height: "92%",
  dataFormat: "json",
});

myChart.render();


setInterval(() => {
  myChart.setChartData(dataSource);   // dataSource methodunun db'de değiştirdikçe burada render'a gerek kalmadan grafiğin yenilenmesini sağlıyorum
}, 100);

//#endregion
