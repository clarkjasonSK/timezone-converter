
//input fields type date & time
var inputRegion = document.getElementById("_input_region")
var inputDate = document.getElementById("_input_date")
var inputTime = document.getElementById("_input_time")

var targetDate, latestDate

/*
//individual output fields 
var _output_usEst = document.getElementById("_out_us_est")
var _output_usPdt = document.getElementById("_out_us_pdt")
var _output_uk = document.getElementById("_out_uk")
var _output_nz = document.getElementById("_out_nz")
var _output_ausEast = document.getElementById("_out_aus_east")
var _output_ausWest = document.getElementById("_out_aus_west")
var _output_jp = document.getElementById("_out_jp")
var _output_ph = document.getElementById("_out_ph")
var _output_sa = document.getElementById("_out_sa")
var _output_br = document.getElementById("_out_br")
*/

//const timezones = new [3, 0, 8, 20, 18, 15, 16, 15, 9, 4]


const hourInMs = 3600000

const timezones = new Map()
timezones.set("_out_us_est", 3)
timezones.set("_out_us_pdt", 0)
timezones.set("_out_uk", 8)
timezones.set("_out_nz", 19)
timezones.set("_out_aus_east", 17)
timezones.set("_out_aus_west", 15)
timezones.set("_out_jp", 16)
timezones.set("_out_ph", 15)
timezones.set("_out_sa", 9)
timezones.set("_out_br", 4)


//setDateToday(inputDate, inputTime)

//alert(inputDate.getMonth() + " and " + inputTime.value)
/*
var nowTime = document.getElementById("_input_time")
nowTime.value = new Date();*/


function generateTimes(){

	setTargetDate()
	setOutputFields()

}

function setTargetDate(){
	//set targetDate from input fields date & time
	targetDate = new Date(inputDate.value)
	let[hours, mins] = inputTime.value.split(":")
	targetDate.setHours(hours, mins)

	//alert("timestamp: " + targetDate.getTime())
	//alert(" region: " + inputRegion.value + " datetime: " + targetDate)
	//alert("target time: " + targetDate.getTime() + " offset: " + (inputRegion.value*3600000))
	
	latestDate = new Date(targetDate.getTime() - (inputRegion.value*hourInMs))
	//alert("latest date: " + latestDate)
}

function setOutputFields(){
	for( let[key, value] of timezones){
		//alert("timezone: " + key + " and " + value)
		document.getElementById(key).value = getTimeOffset(value)
	}

}

function getTimeOffset(value){

	let newDate = new Date(latestDate.getTime()+(value*hourInMs)); 

	let tempString = newDate + ' '

	let[day, month] = tempString.split(" ")
	let timeString = ''

	if(newDate.getHours()%12 == 0){
		timeString += '12'
	}
	else if(newDate.getHours() < 12){
		timeString += newDate.getHours() 
	}
	else if( 12 < newDate.getHours()){
		timeString += (newDate.getHours()-12) 	
	}

	timeString += ':' + prependZero(newDate.getMinutes())

	if(newDate.getHours() < 12){
		timeString += ''+' a.m.'
	}
	else if(12 <= newDate.getHours()){
		timeString += ''+' p.m.'
	}
	

	return '' + month + ' '+ newDate.getDate() +', ' + timeString; 
}

function setDateToday(date, time){
	let today = new Date();
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
				+':'+prependZero(today.getMinutes())
}

function prependZero(number){
	if(number < 10)
		return '0'+number
	else
		return number
}