
//input fields type date & time
var inputRegion = document.getElementById("_input_region")
var inputDate = document.getElementById("_input_date")
var inputTime = document.getElementById("_input_time")

var latestDate;

const hourInMs = 3600000

const timezones = new Map()
timezones.set("_out_us_edt", 3)
timezones.set("_out_us_pdt", 0)
timezones.set("_out_uk", 8)
timezones.set("_out_nz", 20)
timezones.set("_out_aus_east", 18)
timezones.set("_out_aus_west", 15)
timezones.set("_out_jp", 16)
timezones.set("_out_ph", 15)
timezones.set("_out_sa", 9)
timezones.set("_out_br", 4)

function generateTimes(){

	setTargetDate()
	setOutputFields()
	setOutputTextArea()
}

function setTargetDate(){
	//set targetDate from input fields date & time
	let targetDate = new Date(inputDate.value)
	let[hours, mins] = inputTime.value.split(":")
	targetDate.setHours(hours, mins)

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


function setOutputTextArea(){

	document.getElementById("_out_textarea").value = ''
+'<table>'
+'\n  <tr>'
+'\n    <th width="50%" class="center">Region</th>'
+'\n    <th width="50%" class="center">Local Release Time</th>'
+'\n  </tr>'
+'\n  <tr>'
+'\n    <td class="center">United States (EDT)</td>'
+'\n    <td class="center">'+ document.getElementById("_out_us_edt").value +'</td>'
+'\n  </tr>'
+'\n  <tr>'
+'\n    <td class="center">United States (PDT)</td>'
+'\n    <td class="center">'+ document.getElementById("_out_us_pdt").value +'</td>'
+'\n  </tr>'
+'\n  <tr>'
+'\n    <td class="center">United Kingdom</td>'
+'\n    <td class="center">'+ document.getElementById("_out_uk").value +'</td>'
+'\n  </tr>'
+'\n  <tr>'
+'\n    <td class="center">New Zealand</td>'
+'\n    <td class="center">'+ document.getElementById("_out_nz").value +'</td>'
+'\n  </tr>'
+'\n  <tr>'
+'\n    <td class="center">Australian East Coast</td>'
+'\n    <td class="center">'+ document.getElementById("_out_aus_east").value +'</td>'
+'\n  </tr>'
+'\n  <tr>'
+'\n    <td class="center">Australian West Coast</td>'
+'\n    <td class="center">'+ document.getElementById("_out_aus_west").value +'</td>'
+'\n  </tr>'
+'\n  <tr>'
+'\n    <td class="center">Japan</td>'
+'\n    <td class="center">'+ document.getElementById("_out_jp").value +'</td>'
+'\n  </tr>'
+'\n  <tr>'
+'\n    <td class="center">Philippines</td>'
+'\n    <td class="center">'+ document.getElementById("_out_ph").value +'</td>'
+'\n  </tr>'
+'\n  <tr>'
+'\n    <td class="center">South Africa</td>'
+'\n    <td class="center">'+ document.getElementById("_out_sa").value +'</td>'
+'\n  </tr>'
+'\n  <tr>'
+'\n    <td class="center">Brazil</td>'
+'\n    <td class="center">'+ document.getElementById("_out_br").value +'</td>'
+'\n  </tr>'
+'\n</table>'
}

function prependZero(number){
	return number < 10 ?  ('0'+number) : number

}