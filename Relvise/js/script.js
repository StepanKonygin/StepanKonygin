
"use strict"

$( document ).ready(function(){
	  $( ".item-getintouch" ).hover(function(){ // задаем функцию при наведении курсора на элемент и при его отведении	
	    $( this ).toggleClass( "item-getintouch_active" ) // добавляем, или убираем класс у текущего элемента div
	  });
	});