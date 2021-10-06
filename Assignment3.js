// Higher order function, because it calls other function

function calculateSum(num1, num2, callback)
 {

var x = num1+num2;

callback(x);
}

//callback function  ecause it gets invoked by other function
function displaySum(num){
    console.log(num);}

calculateSum(1,2, displaySum);  // Call the Function
calculateSum(3,4, displaySum);
calculateSum(1,9, displaySum);


//built in callback