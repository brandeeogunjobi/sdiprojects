//alert("JavaScript works!");

// Brandee Ogunjobi
//SDI Term 1408
// Project 2

// Start - 
	alert("Hello!");
	
 //prompt
 var name = prompt ("Are you ready for the story?", " ");
//Procedure - Return Value
var getGreetingByName = function(name) {
	var currentHour = (new Date()).getHours(),
		timeOfDay, greeting;
		if (currentHour < 12) { timeOfDay = "morning"; }
		else if (currentHour < 17) { timeOfDay = "afternoon"; }
		else { timeOfDay = "evening"; }
		greeting = "Good " + timeOfDay + "," + name + "!";
		//console.log();
		return greeting;
};

var fullGreeting = getGreetingByName("Mr. Lewis");

console.log(fullGreeting);
console.log("We are looking forward to hearing from you!");
console.log("In the last story the boys won an Ice Cream Party,");
console.log("we are continuing where we had left off.");



// Confirm - Variables
var q = "What is 10+10?"
var a = 20;
var c = "<h2>Great job!</h2>"
var ic = "<h2>Sorry, right answer was \20.</h2>"
var response = prompt(q,"20");
		if (response != a)
			 { alert("Wrong, it was 20!!"); }
		else { alert("Correct! You got it!"); }
var o = (response == a) ? c : ic;
document.write("<BR/>");
document.write(o);


    
// Number Function
var cupSales = " cups of Lemonade"
var ice = myFunction(3*5);
	console.log("They were so happy to exceed their goal selling over " + ice  + cupSales + ".");
	function myFunction(x, t) {
		return 3 * 5;
}

// String Function
var cream = "Ice Cream"
	alert:console.log("Don't worry, we will have the " + cream + " party soon!");
var whatTime = "Five O'Clock"
if (whatTime == "Five O'clock")
{
	console.log("whatTime is Five O'Clock");
}

// Boolean Function

var ll = 15;
var yy = 25;
var myBrother = "Tyelerr";
var myBoy = "Johnny";
var l = true, y = true, w = false;
if ((l && y) || w) {
        console.log("The expression is true");
    } else {
        console.log("The expression is false");
    }
console.log("So the results are in " + myBoy + " sold " + ll + ".");
console.log("And " + myBrother + " sold " + yy + "!");

var l = true;
if(l == true)
{
console.log("this is true");
}
if ((l && y) || w) {
        console.log("The expression is true");
    } else {
        console.log("The expression is false");
    }
	
// Return Value

var number1 = 3;
function times(number1)
{
	var c =(number1*5)
	console.log ;return c; 
}

var boysName = "Happy Faces"
var reward = "Yummy Yum"
var feedBoys = function (boysName, reward) {
	console.log("Gave some " + reward + " to " + boysName);
};
var boysName = "Happy Faces"
var reward = "Yummy Yummy Ice Cream"
feedBoys("The Boys", "Yummy Yum Ice Cream");
console.log("I already gave the little " + boysName + " some " + reward);

// variables
var cream = "Ice Cream";
var myBoy = "Johnny";
var myBrother = "Tyelerr"
var cupSales = "cups of Lemonade"
var lemonadeSales = "exceeded your sales"
var stringA = "If it is hot outside,"
var stringB = "the boys will sell "
var question ="Did the boys make there sales quota?"



s=prompt('Do you have a favorite ice cream?','Chocolate Chip');
  alert('If you like ice cream join the story!');



console.log(myBoy +  " is waiting for his " + cream + ".");
console.log(myBoy + " and " + myBrother + " you both " +  lemonadeSales + "!" + " Are you ready for your party?");
console.log('Don\'t you just love ' + cream + "?");
console.log('My favorite ' + cream + " is vanilla!");
console.log(myBrother + " says the party is at " + whatTime + " and " + myBoy + ' shouts "hooray"!');

//Boolean Function
var appleStreet = false;
var beanStreet = false;
var javaStreet = true;

if ((!appleStreet && !beanStreet) || javaStreet) {
        console.log("The expression is true");
    } else {
        console.log("The expression is false");
    }
    console.log("You made it to JavaStreet Ice Cream Shop!");
 //Local Variables   
function myFunction() 
{
	var choco = "Chocolate Ice Cream";
	var vanilla = "Vanilla Ice Cream";
	if (choco != vanilla) {
			var straw = "Strawberry";
		} else {
			var mint = "Mint Chocolate Chip"
			}
}

// While Loop 

 var scoops = 0;
console.log("Starting Loop" + "<br />");
while (scoops < 10){
  console.log("Current Count : " + "Get More Scoops!" + scoops + "<br />");
  scoops++;
}
console.log("Scoops Complete!");
console.log("Hope your enjoying that heaping ice cream sunday!");

// return boolean

var avocadoIce = false;
var chileIce = false;
var chocoice = true;

if ((!avocadoIce && !chileIce) || chocoice) {
        console.log("The expression is true");
    } else {
        console.log("The expression is false");
    }
 {
}
// Comparison and Outputs


var numberOfScoops = prompt("How many scoops did you eat?")

if(numberOfScoops===10)
{
    console.log("I finished ten scoops!")
}

else if(numberOfScoops<10)
{
    console.log("I couldn't finish!")
}
else if(numberOfScoops>10)
{
    console.log("I am the champion!")
}



///// Number Function
var bellyAche = " Oh, I feel sick!"
var iceCream = myFunction(3*5);
	console.log("They were feeling sick Johnny ate " + iceCream  + " scoops and said, " + bellyAche);
	function myFunction(x, t) {
		return 2 * 5;


	
}
// Local Variable
var name = "Johnny";

if (name) {
	var name = "Johnny"
	console.log (name + " Go to bed and rest!");
}

// Number

console.log(15 - 5);   
console.log(2 * 5);     
console.log(1 / 10);

// For Loop
for (var iceCream = 0, limit = 10; iceCream < limit; iceCream++) {
    
    console.log('Currently at ' + iceCream);
    
}

// Return Number - Return Number - Math - Output

var lemonadeMoney = function(useCash) {
	var pricePerScoop = 3,
		scoops;
	if (useCash < pricePerScoop) {
		console.log("That's not enough to buy anything!");
		scoops = 0;
	}
	scoops = Math.floor(useCash / pricePerScoop);
	return scoops;
};

var gotScoops = lemonadeMoney(30);
console.log("Thanks for buying " + gotScoops + " scoops of Ice Cream!");



///// String Function - String -String

var sdiProject = "Making ice cream in code has been awesome.";

console.log(sdiProject);
var say = function(message) {console.log(message); };
say("I hope this works!");

////// Local Variables

////// String Concatenation 

////// Return String









   
    
    
    
    
    
    
 








