clearAll()

function clearAll(){
	//alert("clear!")

	const fields = document.getElementsByClassName("clearable");

	for( let i = 0 ; i < fields.length; i++){
		fields[i].value = ''
	}

}

function prependZero(number){
	return number < 10 ?  ('0'+number) : number
}