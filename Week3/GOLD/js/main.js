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
			},
			
			submitHandler: function() {
		var data = theForm.serializeArray();
			storeData(data);
		}
		
	});
	
	//Element Selection Function
	function id(id){
		var thisElement = document.getElementById(id);
		return thisElement;
	}
	
	//var storeDataButton = id("submit");
	//storeDataButton.addEventListener("click", saveData);
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

//Supporting Functions




	function saveData(key){
		alert("Hello");
	
		if(!key){
			var randomID = Math.floor(Math.random()*100000); //Make new key
		}else{
			var randomID = key; //reuse previos key to overwrite for "edit"
		}
		
		//Compile form data into an object - properties include array with label and value.
		var entry		={};

		entry.fname		= ["First Name:", id("fname").value];
		entry.lname		= ["Last Name:", id("lname").value];
		entry.phone		= ["Phone:", id("phone").value];
		entry.email		= ["Email:", id("email").value];
		entry.primary	= ["Primary Instrument:", id("primary").value];
		entry.all		= getAllInstruments();
		entry.rating	= ["Rating:", id("rating").value];
		entry.lgig		= ["Last Gig:", id("lgig").value];
		entry.notes		= ["Notes:", id("notes").value];
		
		//Save into localStorage
		localStorage.setItem(randomID, JSON.stringify(entry));
		console.log(randomID + " " + JSON.stringify(entry));
		alert("Musician Data Saved");	
	};
	
	
	
	
	

