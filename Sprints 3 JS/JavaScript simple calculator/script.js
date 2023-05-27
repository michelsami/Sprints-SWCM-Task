//console.log("lo");



function sumFunction(){

	let firstNumberValue = document.getElementById("firstNumber").value;
	let secondNumberValue = document.getElementById("secondNumber").value;
	//let operator = document.getElementById("operator").value;


	var operators = {
		'+': function(a, b) { return a + b },
		'-': function(a, b) { return a - b },
		'/': function(a, b) { return a / b },
		'*': function(a, b) { return a * b },
		
	};
	
	var operator = document.getElementById("operator").value;


let additionResult = operators[operator](parseInt(firstNumberValue), parseInt(secondNumberValue));
	
	document.getElementById("result").value = additionResult;

}