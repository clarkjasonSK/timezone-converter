clearFields()


function clearFields(){
	//alert("clear!")

	const fields = document.getElementsByClassName("field");

	for( let i = 0 ; i < fields.length; i++){
		fields[i].value = ''
	}

}