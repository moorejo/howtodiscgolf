// JavaScript Document

$(document).ready(function(e){
	var user = 'TFHS';
	var pass = 'bruins';
	var userinput;
	var passinput;
	
	$('#indexLogin').bind('click', function(){
		console.log('Click event fired on indexLogin');
		userinput = $('#indexUsername').val();
		passinput = $('#indexPassword').val();
		console.log('Username:' + $('#indexUsername').val());
		console.log('Password:' + $('#indexPassword').val());
		if(userinput == user && passinput == pass){
			console.log('Login Successful!');
			$.mobile.changePage('#home',[allowSamePageTransition = false]);
			$('#incorrect').text('');
			$('');
		}
		else{
			$('#incorrect').text('Username or password incorrect.');	
		}
	});
	
	
	
	$('#studentsbtn').bind('click', function(){
		console.log('Click event fired on studetnsbtn');
		$.mobile.changePage('#students',[allowSamePageTransition = false]);		
	});
	$('#reportbtn').bind('click', function(){
		console.log('Click event fired on reportbtn');
	});
	$('#settingsbtn').bind('click', function(){
		console.log('Click event fired on settingsbtn');
		$.mobile.changePage('#settings',[allowSamePageTransition = false]);
	});
	$('#logout').bind('click', function(){
		console.log('Click event fired on logout');
		$.mobile.changePage('#index',[allowSamePageTransition = false]);
	});
	$('#newStudentsbtn').bind('click', function(){
		console.log('Click event fired on newStudentsbtn');
		$.mobile.changePage('#newStudents',[allowSamePageTransition = false]);
	});
	$('#changePassword').bind('click', function(){
		console.log('Click event fired on changePassword');
		$.mobile.changePage('#passwordChange',[allowSamePageTransition = false]);
	});
	$('#savechange').bind('click', function(){
		console.log('Click event fired on saveChange');
		userinput = $('#userNameinput').val();
		passinput = $('#passwordinput').val();
		var newpass = $('#newPassword').val();
		var confirmnewpass = $('#confirmPassword').val();
		if(userinput == user && passinput == pass){
			console.log('Username:' + userinput);
			console.log('Password:' + passinput);
			if(newpass == confirmnewpass){
				console.log('newPassword:' + newpass);
				console.log('confirmPassword:' + confirmnewpass);
				pass = newpass;
				alert('Password Changed Successfully!');
				$('#incorrectb').text('');
				$.mobile.changePage('#home');
			}
			else{
				$('#incorrectb').text('Passwords do not match.');	
			}
		}
		else{
			$('#incorrectb').text('Incorrect Username or Password.');	
		}
		
	});
		
	
});