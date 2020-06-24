// IMPORT
import {Request} from "./Request.js";    
const request = new Request();

//#region DOM
const Machine1 = {
	machineName				: document.getElementById("M1_machineName"),
	operator				: document.getElementById("M1_operator"),
	calismaSuresi			: document.getElementById("M1_calismaSuresi"),
	beklemeSuresi			: document.getElementById("M1_beklemeSuresi"),
	durmaSuresi				: document.getElementById("M1_durmaSuresi")
};
const Machine2 = {
	machineName				: document.getElementById("M2_machineName"),
	operator				: document.getElementById("M2_operator"),
	calismaSuresi			: document.getElementById("M2_calismaSuresi"),
	beklemeSuresi			: document.getElementById("M2_beklemeSuresi"),
	durmaSuresi				: document.getElementById("M2_durmaSuresi")
};
const Machine3 = {
	machineName				: document.getElementById("M3_machineName"),
	operator				: document.getElementById("M3_operator"),
	calismaSuresi			: document.getElementById("M3_calismaSuresi"),
	beklemeSuresi			: document.getElementById("M3_beklemeSuresi"),
	durmaSuresi				: document.getElementById("M3_durmaSuresi")
};
const Machine4 = {
	machineName				: document.getElementById("M4_machineName"),
	operator				: document.getElementById("M4_operator"),
	calismaSuresi			: document.getElementById("M4_calismaSuresi"),
	beklemeSuresi			: document.getElementById("M4_beklemeSuresi"),
	durmaSuresi				: document.getElementById("M4_durmaSuresi")
};
const Machine5 = {
	machineName				: document.getElementById("M5_machineName"),
	operator				: document.getElementById("M5_operator"),
	calismaSuresi			: document.getElementById("M5_calismaSuresi"),
	beklemeSuresi			: document.getElementById("M5_beklemeSuresi"),
	durmaSuresi				: document.getElementById("M5_durmaSuresi")
};
const Machine6= {
	machineName				: document.getElementById("M6_machineName"),
	operator				: document.getElementById("M6_operator"),
	calismaSuresi			: document.getElementById("M6_calismaSuresi"),
	beklemeSuresi			: document.getElementById("M6_beklemeSuresi"),
	durmaSuresi				: document.getElementById("M6_durmaSuresi")
};
const Machine7 = {
	machineName				: document.getElementById("M7_machineName"),
	operator				: document.getElementById("M7_operator"),
	calismaSuresi			: document.getElementById("M7_calismaSuresi"),
	beklemeSuresi			: document.getElementById("M7_beklemeSuresi"),
	durmaSuresi				: document.getElementById("M7_durmaSuresi")
};
const Machine8 = {
	machineName				: document.getElementById("M8_machineName"),
	operator				: document.getElementById("M8_operator"),
	calismaSuresi			: document.getElementById("M8_calismaSuresi"),
	beklemeSuresi			: document.getElementById("M8_beklemeSuresi"),
	durmaSuresi				: document.getElementById("M8_durmaSuresi")
};
const Machine9 = {
	machineName				: document.getElementById("M9_machineName"),
	operator				: document.getElementById("M9_operator"),
	calismaSuresi			: document.getElementById("M9_calismaSuresi"),
	beklemeSuresi			: document.getElementById("M9_beklemeSuresi"),
	durmaSuresi				: document.getElementById("M9_durmaSuresi")
};
const Machine10 = {
	machineName				: document.getElementById("M10_machineName"),
	operator				: document.getElementById("M10_operator"),
	calismaSuresi			: document.getElementById("M10_calismaSuresi"),
	beklemeSuresi			: document.getElementById("M10_beklemeSuresi"),
	durmaSuresi				: document.getElementById("M10_durmaSuresi")
};
//#endregion

//#region REQUEST - GET REPORT

google.charts.load('current', {'packages':['corechart']});

setInterval(() => {

	google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

		request.get("https://mgcsolutions.net/api/performance/get")
		.then(async data => {

		Machine1.machineName.textContent 	= await data.data.machine1.machineName;
		Machine1.operator.textContent 		= await data.data.machine1.operator;
		Machine1.calismaSuresi.textContent 	= (await data.data.machine1.calismaSuresi) + "  Saniye";
		Machine1.beklemeSuresi.textContent 	= await data.data.machine1.beklemeSuresi;
		Machine1.durmaSuresi.textContent 	= await data.data.machine1.durmaSuresi;

		Machine2.machineName.textContent 	= await data.data.machine2.machineName;
		Machine2.operator.textContent 		= await data.data.machine2.operator;
		Machine2.calismaSuresi.textContent 	= await data.data.machine2.calismaSuresi;
		Machine2.beklemeSuresi.textContent 	= await data.data.machine2.beklemeSuresi;
		Machine2.durmaSuresi.textContent 	= await data.data.machine2.durmaSuresi;

		Machine3.machineName.textContent 	= await data.data.machine3.machineName;
		Machine3.operator.textContent 		= await data.data.machine3.operator;
		Machine3.calismaSuresi.textContent 	= await data.data.machine3.calismaSuresi;
		Machine3.beklemeSuresi.textContent 	= await data.data.machine3.beklemeSuresi;
		Machine3.durmaSuresi.textContent 	= await data.data.machine3.durmaSuresi;

		Machine4.machineName.textContent 	= await data.data.machine4.machineName;
		Machine4.operator.textContent 		= await data.data.machine4.operator;
		Machine4.calismaSuresi.textContent 	= await data.data.machine4.calismaSuresi;
		Machine4.beklemeSuresi.textContent 	= await data.data.machine4.beklemeSuresi;
		Machine4.durmaSuresi.textContent 	= await data.data.machine4.durmaSuresi;

		Machine5.machineName.textContent 	= await data.data.machine5.machineName;
		Machine5.operator.textContent 		= await data.data.machine5.operator;
		Machine5.calismaSuresi.textContent 	= await data.data.Machine5.calismaSuresi;
		Machine5.beklemeSuresi.textContent 	= await data.data.machine5.beklemeSuresi;
		Machine5.durmaSuresi.textContent 	= await data.data.machine5.durmaSuresi;

		Machine6.machineName.textContent 	= await data.data.machine6.machineName;
		Machine6.operator.textContent 		= await data.data.machine6.operator;
		Machine6.calismaSuresi.textContent 	= await data.data.machine6.calismaSuresi;
		Machine6.beklemeSuresi.textContent 	= await data.data.machine6.beklemeSuresi;
		Machine6.durmaSuresi.textContent 	= await data.data.machine6.durmaSuresi;

		Machine7.machineName.textContent 	= await data.data.machine7.machineName;
		Machine7.operator.textContent 		= await data.data.machine7.operator;
		Machine7.calismaSuresi.textContent 	= await data.data.machine7.calismaSuresi;
		Machine7.beklemeSuresi.textContent 	= await data.data.machine7.beklemeSuresi;
		Machine7.durmaSuresi.textContent 	= await data.data.machine7.durmaSuresi;

		Machine8.machineName.textContent 	= await data.data.machine8.machineName;
		Machine8.operator.textContent 		= await data.data.machine8.operator;
		Machine8.calismaSuresi.textContent 	= await data.data.machine8.calismaSuresi;
		Machine8.beklemeSuresi.textContent 	= await data.data.machine8.beklemeSuresi;
		Machine8.durmaSuresi.textContent 	= await data.data.machine8.durmaSuresi;

		Machine9.machineName.textContent 	= await data.data.machine9.machineName;
		Machine9.operator.textContent 		= await data.data.machine9.operator;
		Machine9.calismaSuresi.textContent 	= await data.data.machine9.calismaSuresi;
		Machine9.beklemeSuresi.textContent 	= await data.data.machine9.beklemeSuresi;
		Machine9.durmaSuresi.textContent 	= await data.data.machine9.durmaSuresi;

		Machine10.machineName.textContent 	= await data.data.machine10.machineName;
		Machine10.operator.textContent 		= await data.data.machine10.operator;
		Machine10.calismaSuresi.textContent = await data.data.machine10.calismaSuresi;
		Machine10.beklemeSuresi.textContent = await data.data.machine10.beklemeSuresi;
		Machine10.durmaSuresi.textContent 	= await data.data.machine10.durmaSuresi;
	})	
	.catch(err => console.log(err));



    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        [ Machine1.machineName.textContent + ' Op: ' +  Machine1.operator.textContent, 11],
        ['Makine 2   Can Bayraker', 2],
        ['Makine 3   Can Bayraker', 2],
        ['Makine 4', 2],
		['Makine 5', 7],
		['Makine 6', 7],
		['Makine 7', 5],
		['Makine 8', 6],
		['Makine 9', 8],
		['Makine 10', 11]
		  
    ]);

    var options = {
        title: ''
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
	}	
	
}, 1000);

//#endregion

      