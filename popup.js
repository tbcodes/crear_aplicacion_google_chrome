$(function(){
	$('#nombre').keyup(function() {
		$('#saludar').text('Hola ' + $('#nombre').val());
	
	})
})
