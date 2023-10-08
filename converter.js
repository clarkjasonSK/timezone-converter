
var inputDate = document.getElementById("_input_date")
var inputTime = document.getElementById("_input_time")

/*
var inputYear = document.getElementById("_input_year")
var inputMonth = document.getElementById("_input_month")
var inputDay = document.getElementById("_input_day")

var inputHour = document.getElementById("_input_hour")
var inputMinute = document.getElementById("_input_minute")*/

var usEst = document.getElementById("_out_us_est")
var usPdt = document.getElementById("_out_us_pdt")
var uk = document.getElementById("_out_uk")
var nz = document.getElementById("_out_nz")
var ausEast = document.getElementById("_out_aus_east")
var ausWest = document.getElementById("_out_aus_west")
var jp = document.getElementById("_out_jp")
var ph = document.getElementById("_out_ph")
var sa = document.getElementById("_out_sa")
var br = document.getElementById("_out_br")

//tempDate.value = "4:35am";
//alert ("hello! " + tempDate.value + ' <div class="center"></div> ')


//setDateToday(inputDate, inputTime)
//setInputPlaceholders(inputYear, inputMonth, inputDay, inputHour, inputMinute);


//alert(inputDate.getMonth() + " and " + inputTime.value)
/*
var nowTime = document.getElementById("_input_time")
nowTime.value = new Date();*/


function generateTimes(){
	var newDate = new Date(inputDate.value)
	let[hours, mins] = inputTime.value.split(":")
	newDate.setHours(hours, mins)
	usEst.value = '' + (newDate.getMonth()+1) 
				+ ' ' + newDate.getDate() 
				+ ' '+ newDate.getFullYear() 
				+ ' ' + newDate.getHours() 
				+ ':' + prependZero(newDate.getMinutes())
	usPdt.value = usEst.value

	alert(newDate - 1)
	
	//alert("test here " + hours + " and here " + mins)
}


function clearFields(){
	//alert("clear!")
	
	const fields = document.getElementsByClassName("field");
	
	//alert(outputFields.)

	for( var i = 0 ; i < fields.length; i++){
		fields[i].value = ''
		//alert(fields[i].value)
	}

}

function setDateToday(date, time){
	var today = new Date();
	/*
	year.placeholder = "Year (" + today.getFullYear() + ")"
	month.placeholder = "Month (" + (today.getMonth()+1) + ")"
	day.placeholder = "Day (" + today.getDate() + ")"

	hour.placeholder = "Hour (" + today.getHours() + ")"
	minute.placeholder = "Minute (" + today.getMinutes() + ")"*/
	
	 
	date.value = today.getFullYear() 
							+'-'+prependZero((today.getMonth()+1))
							+'-'+prependZero(today.getDate())
	time.value = today.getHours() 
							+':'+(today.getMinutes())
}

function prependZero(number){
	if(number < 10)
		return '0'+number
	else
		return number
}