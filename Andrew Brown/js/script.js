"use strict"

let button = document.querySelector('#wasting');

button.onclick = function(){
	let typeOfSyte = Number(document.querySelector('.type_of_syte').value);
	let designOfSyte = Number(document.querySelector('.designOfSyte').value);
	let adaptability = Number(document.querySelector('.adaptability').value);
	if(typeOfSyte == 0 || designOfSyte == 0 || adaptability == 0){
		alert("Все категории должны быть заполнены")
	}
	else{
		let data = typeOfSyte + designOfSyte + adaptability;
		let sroki = data/2500;
		document.querySelector('#data').innerHTML = data + "Р";
		document.querySelector('#sroki').innerHTML = sroki + "Д";
	}
	data = 0;
	sroki = 0;
}
