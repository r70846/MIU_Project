// Russell Gaspard
// Project 1
// Visual Frameworks - MIU 1305
// Mobile Development
// Full Sail University

var json = {
	"musician1":{
		"fname":	["First Name:", "Russ"],	
		"lname":	["Last Name:", "Gaspard"],	
		"phone":	["Phone:", "321-439-0605"],		
		"email":	["Email:", "russg@fullsail.edu"],			
		"primary":	["Primary Instrument:", "Guitar"],	
		"all":		["Additional Instruments:", "Other", "Keyboard"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2013-01-1"],	
		"notes":	["Notes:", "Russ also plays fiddle, mandolin and harmonica."]	
	},
	"musician2":{
		"fname":	["First Name:", "Dave"],	
		"lname":	["Last Name:", "Cox"],	
		"phone":	["Phone:", "321-331-2791"],		
		"email":	["Email:", "dcox@bassman.com"],			
		"primary":	["Primary Instrument:", "Bass"],	
		"all":		["Additional Instruments:", "Keyboard", "Drums"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2013-05-5"],	
		"notes":	["Notes:", "Dave is not as interested in learning material but always ready to jam."]	
	},
	"musician3":{
		"fname":	["First Name:", "Dave"],	
		"lname":	["Last Name:", "Gibbs"],	
		"phone":	["Phone:", "407-529-8561"],		
		"email":	["Email:", "dgibbs@fullsail.com"],			
		"primary":	["Primary Instrument:", "Keys"],	
		"all":		["Additional Instruments:", "Guitar"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2012-06-16"],		
		"notes":	["Notes:", "Hard to get Dave to commit to a gig but always worth it."]	
	},
	"musician4":{
		"fname":	["First Name:", "John Paul"],	
		"lname":	["Last Name:", "McCune"],	
		"phone":	["Phone:", "321-806-8618"],		
		"email":	["Email:", "jp@fit.com"],			
		"primary":	["Primary Instrument:", "Drums"],	
		"all":		["Additional Instruments:", "Guitar"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2013-04-15"],	
		"notes":	["Notes:", "Love this guy."]	
	},
	"musician5":{
		"fname":	["First Name:", "Jenn"],	
		"lname":	["Last Name:", "Willsey"],	
		"phone":	["Phone:", "407-252-4264"],		
		"email":	["Email:", "jwillsey@redhead.gov"],			
		"primary":	["Primary Instrument:", "Vocals"],	
		"all":		["Additional Instruments:", "Drums"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2013-02-7"],		
		"notes":	["Notes:", "Sings a fine lead but incredible harmony as well."]	
	},
	"musician6":{
		"fname":	["First Name:", "Matt"],	
		"lname":	["Last Name:", "Tuten"],	
		"phone":	["Phone:", "407-310-7424"],		
		"email":	["Email:", "mtuten@gmail.com"],			
		"primary":	["Primary Instrument:", "Other"],	
		"all":		["Additional Instruments:", "Guitar"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2011-12-31"],	
		"notes":	["Notes:", "Mandolin player."]	
	},
	"musician7":{
		"fname":	["First Name:", "Nik"],	
		"lname":	["Last Name:", "Ritchie"],	
		"phone":	["Phone:", "321-439-0605"],		
		"email":	["Email:", "nrichie@fullsail.com"],			
		"primary":	["Primary Instrument:", "Drums"],	
		"all":		["Additional Instruments:", "Guitar"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2013-05-5"],	
		"notes":	["Notes:", "Nik works with me at Full Sail. Great drummer."]	
	},
	"musician8":{
		"fname":	["First Name:", "Derrick"],	
		"lname":	["Last Name:", "Harvin"],	
		"phone":	["Phone:", "321-331-2791"],		
		"email":	["Email:", "dharvin@fullsail.com"],			
		"primary":	["Primary Instrument:", "Keys"],	
		"all":		["Additional Instruments:", "Guitar"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2013-05-5"],	
		"notes":	["Notes:", "Killer Jazz player."]	
	},
	"musician9":{
		"fname":	["First Name:", "Ryan"],	
		"lname":	["Last Name:", "Walsh"],	
		"phone":	["Phone:", "407-678-1765"],		
		"email":	["Email:", "ryan@gmail.com"],			
		"primary":	["Primary Instrument:", "Bass"],	
		"all":		["Additional Instruments:", "Guitar"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2012-06-16"],		
		"notes":	["Notes:", "Crazy bass player."]	
	},
	"musician10":{
		"fname":	["First Name:", "Steve"],	
		"lname":	["Last Name:", "Prince"],	
		"phone":	["Phone:", "321-808-9264"],		
		"email":	["Email:", "prince@fit.com"],			
		"primary":	["Primary Instrument:", "Drums"],	
		"all":		["Additional Instruments:", "Bass"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2013-04-15"],	
		"notes":	["Notes:", "Hard hitter."]	
	},
	"musician11":{
		"fname":	["First Name:", "Joe"],	
		"lname":	["Last Name:", "DeBottis"],	
		"phone":	["Phone:", "407-252-4264"],		
		"email":	["Email:", "debottisy@htmail.com"],			
		"primary":	["Primary Instrument:", "Drums"],	
		"all":		["Additional Instruments:", "Drums"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2013-02-7"],		
		"notes":	["Notes:", "Very funky."]	
	},
	"musician12":{
		"fname":	["First Name:", "Bobby"],	
		"lname":	["Last Name:", "Speck"],	
		"phone":	["Phone:", "407-310-7424"],		
		"email":	["Email:", "bspeck@gmail.com"],			
		"primary":	["Primary Instrument:", "Guitar"],	
		"all":		["Additional Instruments:", "Other"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2011-12-31"],	
		"notes":	["Notes:", "Plays Mandolin as well."]	
	},
	"musician13":{
		"fname":	["First Name:", "Rick"],	
		"lname":	["Last Name:", "Scoles"],	
		"phone":	["Phone:", "407-324-8562"],		
		"email":	["Email:", "dscoles@fullsail.com"],			
		"primary":	["Primary Instrument:", "Other"],	
		"all":		["Additional Instruments:", "Guitar"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2012-06-16"],		
		"notes":	["Notes:", "Banjo player."]	
	},
	"musician14":{
		"fname":	["First Name:", "Fred"],	
		"lname":	["Last Name:", "Tully"],	
		"phone":	["Phone:", "321-806-8618"],		
		"email":	["Email:", "jp@fit.com"],			
		"primary":	["Primary Instrument:", "Vocals"],	
		"all":		["Additional Instruments:", "Guitar"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2013-04-15"],	
		"notes":	["Notes:", "Great with a ballad."]	
	},
	"musician15":{
		"fname":	["First Name:", "Sam"],	
		"lname":	["Last Name:", "Smitty"],	
		"phone":	["Phone:", "407-252-6123"],		
		"email":	["Email:", "smitty@gmail.com"],			
		"primary":	["Primary Instrument:", "Guitar"],	
		"all":		["Additional Instruments:", "Bass"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2013-02-14"],		
		"notes":	["Notes:", "Nice guy."]	
	},
	"musician16":{
		"fname":	["First Name:", "Mike"],	
		"lname":	["Last Name:", "Mabry"],	
		"phone":	["Phone:", "407-310-4235"],		
		"email":	["Email:", "mabry@hotmail.com"],			
		"primary":	["Primary Instrument:", "Other"],	
		"all":		["Additional Instruments:", "Bass"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2011-12-31"],	
		"notes":	["Notes:", "Trumpet Player."]	
	},
	"musician17":{
		"fname":	["First Name:", "Vince"],	
		"lname":	["Last Name:", "Brooks"],	
		"phone":	["Phone:", "321-439-0605"],		
		"email":	["Email:", "nrichie@fullsail.com"],			
		"primary":	["Primary Instrument:", "Keys"],	
		"all":		["Additional Instruments:", "Guitar"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2013-05-5"],	
		"notes":	["Notes:", "Mostly jazz."]	
	},
	"musician18":{
		"fname":	["First Name:", "Tom"],	
		"lname":	["Last Name:", "McCune"],	
		"phone":	["Phone:", "407-644-2791"],		
		"email":	["Email:", "tmccune@fullsail.com"],			
		"primary":	["Primary Instrument:", "Bass"],	
		"all":		["Additional Instruments:", "Bass"], 			
		"rating":	["Rating:", "6"],	
		"lgig":		["Last Gig:", "2013-05-5"],	
		"notes":	["Notes:", "Not bad."]	
	},
	"musician19":{
		"fname":	["First Name:", "Sally"],	
		"lname":	["Last Name:", "Tangen"],	
		"phone":	["Phone:", "407-878-1765"],		
		"email":	["Email:", "tangen@gmail.com"],			
		"primary":	["Primary Instrument:", "Vocals"],	
		"all":		["Additional Instruments:", "Guitar"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2012-06-16"],		
		"notes":	["Notes:", "Nice."]	
	},
	"musician20":{
		"fname":	["First Name:", "Hal"],	
		"lname":	["Last Name:", "Leanard"],	
		"phone":	["Phone:", "321-551-2397"],		
		"email":	["Email:", "hleanard@fit.com"],			
		"primary":	["Primary Instrument:", "Drums"],	
		"all":		["Additional Instruments:", "Bass"], 			
		"rating":	["Rating:", "10"],	
		"lgig":		["Last Gig:", "2013-04-15"],	
		"notes":	["Notes:", "..."]	
	}
}