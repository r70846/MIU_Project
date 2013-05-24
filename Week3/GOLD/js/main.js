// Russell Gaspard
// Project 3
// MIU 1305
// Mobile Development
// Full Sail University


$('#home').on('pageinit', function(){
	//home page code
});	
		
$('#addItem').on('pageinit', function(){

		var theForm = $('#theForm');
		    theForm.validate({
			invalidHandler: function(form, validator) {
			
			var errors = id('errors');
			errors.innerHTML = "";
			
			var message = "Please fill required fields: ";
			for(var key in validator.submitted){
				var label = $('label[for^="' + key + '"]')
				
				var text = label.text();
				text = text.substring(0,text.length-1)
				message = message + text + " ";
				
				console.log(text);
				}
				
				errors.innerHTML = message;

				//alert(message);
			
			},
			
			submitHandler: function() {
			//Clear Errors
			var errors = id('errors');
			errors.innerHTML = "";
			
		var data = theForm.serializeArray();
			saveData(data);
		}
		
	});
	
	//Element Selection Function
	function id(id){
		var thisElement = document.getElementById(id);
		return thisElement;
	}
	
});

//Supporting Functions

	function saveData(data){
		//alert("Hello");
		var randomID = Math.floor(Math.random()*100000); //Make new key
	
		//Save into localStorage
		localStorage.setItem(randomID, JSON.stringify(data));
		console.log(randomID + " " + JSON.stringify(data));
		alert("Musician Data Saved");	
		window.location.reload();
	};
	
	
	
	
	

