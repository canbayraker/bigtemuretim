
import {Request} from "../views/Request.js";    
const request = new Request();


$(document).ready(function() {
    $('#example').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
        ]
    });
  });
  
  
  // *** SELECTORS *** //  
  var makine1_toplamCalisma = (document.querySelector("#Makine1 td:nth-child(4)"));
  var makine1_toplamBekleme = (document.querySelector("#Makine1 td:nth-child(5)"));
  var makine1_toplamDurma   = (document.querySelector("#Makine1 td:nth-child(6)"));
  
  var makine2_toplamCalisma = (document.querySelector("#Makine2 td:nth-child(4)"));
  var makine2_toplamBekleme = (document.querySelector("#Makine2 td:nth-child(5)"));
  var makine2_toplamDurma   = (document.querySelector("#Makine2 td:nth-child(6)"));
  
  var makine3_toplamCalisma = (document.querySelector("#Makine3 td:nth-child(4)"));
  var makine3_toplamBekleme = (document.querySelector("#Makine3 td:nth-child(5)"));
  var makine3_toplamDurma   = (document.querySelector("#Makine3 td:nth-child(6)"));
  
  var makine4_toplamCalisma = (document.querySelector("#Makine4 td:nth-child(4)"));
  var makine4_toplamBekleme = (document.querySelector("#Makine4 td:nth-child(5)"));
  var makine4_toplamDurma   = (document.querySelector("#Makine4 td:nth-child(6)"));
  
  var makine5_toplamCalisma = (document.querySelector("#Makine5 td:nth-child(4)"));
  var makine5_toplamBekleme = (document.querySelector("#Makine5 td:nth-child(5)"));
  var makine5_toplamDurma   = (document.querySelector("#Makine5 td:nth-child(6)"));
  
  var makine6_toplamCalisma = (document.querySelector("#Makine6 td:nth-child(4)"));
  var makine6_toplamBekleme = (document.querySelector("#Makine6 td:nth-child(5)"));
  var makine6_toplamDurma   = (document.querySelector("#Makine6 td:nth-child(6)"));
  
  var makine7_toplamCalisma = (document.querySelector("#Makine7 td:nth-child(4)"));
  var makine7_toplamBekleme = (document.querySelector("#Makine7 td:nth-child(5)"));
  var makine7_toplamDurma   = (document.querySelector("#Makine7 td:nth-child(6)"));
  
  var makine8_toplamCalisma = (document.querySelector("#Makine8 td:nth-child(4)"));
  var makine8_toplamBekleme = (document.querySelector("#Makine8 td:nth-child(5)"));
  var makine8_toplamDurma   = (document.querySelector("#Makine8 td:nth-child(6)"));
  
  var makine9_toplamCalisma = (document.querySelector("#Makine9 td:nth-child(4)"));
  var makine9_toplamBekleme = (document.querySelector("#Makine9 td:nth-child(5)"));
  var makine9_toplamDurma   = (document.querySelector("#Makine9 td:nth-child(6)"));
  
  var makine10_toplamCalisma = (document.querySelector("#Makine10 td:nth-child(4)"));
  var makine10_toplamBekleme = (document.querySelector("#Makine10 td:nth-child(5)"));
  var makine10_toplamDurma   = (document.querySelector("#Makine10 td:nth-child(6)"));
  
  
  

  function dayEndReport(val1,val2,val3){
  
    makine1_toplamCalisma.textContent = val1;
    makine1_toplamBekleme.textContent = val2;
    makine1_toplamDurma.textContent = val3;
    
  }
  
  
  document.getElementById("getData").addEventListener("click",()=>{
    request.get("http://localhost:5050/api/endDayReport/get")
    .then(async data => {
    console.log(data);
    const val1 = data.data.nToplamCalismaDk;
    const val2 = data.data.nToplamBeklemeDk;
    const val3 = data.data.nToplamDurmaDk;
    dayEndReport(val1,val2,val3);
    })
    .catch(err => console.log(err));
    
    
  });
  
  
  




  
  
  
  
  
  
  
  
  
  
  