
// IMPORT
import {Request} from "./Request.js";    
const request = new Request();

const dataSource = {
    chart: {
      caption: "Bigtem Makine Üretim Takibi",
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
          id: "A"
        },
        {
          label: "Makine 2 ",
          id: "B"
        },
        {
          label: "Makine 3 ",
          id: "C"
        },
        {
          label: "Makine 4 ",
          id: "D"
        },
        {
          label: "Makine 5 ",
          id: "E"
        },
        {
          label: "Makine 6 ",
          id: "F"
        },
        {
          label: "Makine 7 ",
          id: "G"
        },
        {
          label: "Makine 8 ",
          id: "H"
        },
        {
          label: "Makine 9 ",
          id: "I"
        },
        {
          label: "Makine 10 ",
          id: "J"
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







// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  PLC - GET MACHINE STATUS XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
setInterval(() => {

  const data = {
    processid : "D"
  };

  request.post("https://mgcsolutions.net/api/timeline/getMachineStatus",data)
  .then(async data => {
  const allMachineStates = data.data[0];
  const oldVal = data.old;
  console.log("machine 4 data"+ allMachineStates.Machine4 + "old val:" + oldVal);

  // DB'deki son timeline record ile plc'den geleni karşılaştırıyorum
    if (allMachineStates.Machine4 == oldVal) {
      console.log("VERİ AYNI : UPDATE");
      update();
    } else {
      console.log("VERİ FARKLI : YENI");
      createNew(allMachineStates.Machine4);
    }
    
  })
  .catch(err => console.log(err));
}, 1000);


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //






// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  REQUEST - GET ALL  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
setInterval(() => {
  request.get("https://mgcsolutions.net/api/timeline/getAll")
  .then(async data => {

  const test1 = data.data;
  console.log(test1); 
  dataSource.tasks.task = test1;

  })
  .catch(err => console.log(err));

}, 1000);
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //



// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  REQUEST - UPDATE END TIME  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
function update(){

  const data = {
    processid : "D"
  };

  request.put("https://mgcsolutions.net/api/timeline/updateEnd",data)
  .then(data => console.log(data))
  .catch(err => console.log(err));
}
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //






function createData(newData){
  request.post("https://mgcsolutions.net/api/timeline/create",newData)
    .then(async data => {
    const test1 = data;
    console.log(test1); 
    })
    .catch(err => console.log(err));
  }

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  REQUEST - CREATE TIMELINE  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX   //
function createNew(newRecord){

  var currentDateTime = new Date();
  
  if (newRecord == 0) {

     const newData = {
      label       : "Kapalı",
      processid   : "D",
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
        processid   : "D",
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
      processid   : "D",
      start       : "1-1-2000 " + currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds(),
      end         : "1-1-2000 " + currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds(),
      bordercolor : "#62B58D",
      color       : "#62B58D"
      };
      createData(newData);
    }
    
}

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //




document.getElementById("btnCreateKapalı").addEventListener("click",() => {
  alert("İlk Kayıt");
  createFirstData();
});

function createFirstData(){

  var currentDateTime = new Date();
  const newData = {
    label       : "Kapalı",
    processid   : "D",
    start       : "1-1-2000 " + currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds(),
    end         : "1-1-2000 " + currentDateTime.getHours() + ":" + currentDateTime.getMinutes() + ":" + currentDateTime.getSeconds(),
    bordercolor : "#62B58D",
    color       : "#F2726F"
  };

  request.post("https://mgcsolutions.net/api/timeline/create",newData)
  .then(async data => {
  const test1 = data;
  console.log(test1); 
  })
  .catch(err => console.log(err));
}










// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  FUSION CHART CALL  XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //
var myChart = new FusionCharts({
  type: "gantt",
  renderAt: "chart-container",
  width: "100%",
  height: "100%",
  dataFormat: "json",
});

myChart.render();


setInterval(() => {
  myChart.setChartData(dataSource);   // dataSource methodunun db'de değiştirdikçe burada render'a gerek kalmadan grafiğin yenilenmesini sağlıyorum
}, 100);
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX //

