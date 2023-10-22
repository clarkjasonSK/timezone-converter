generateUpdated();

function generateUpdated(){
	_time_updated = document.getElementById("_time_updated")
	_time_updated.innerHTML = 'updated_at: ';

	var today = new Date();

	_time_updated.innerHTML += today.getFullYear() 
							+'.'+prependZero((today.getMonth()+1))
							+'.'+prependZero(today.getDate())
							+' '+prependZero(today.getHours())
							+':'+prependZero((today.getMinutes()))

}