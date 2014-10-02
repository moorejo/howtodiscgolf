// JavaScript Document
$('#rules').bind('click', function(){
		console.log('Click event fired on studetnsbtn');
		$.mobile.changePage('#rules',[allowSamePageTransition = false]);		
	});