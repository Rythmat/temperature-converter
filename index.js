//Prompt the user to input a Fahrenheit temperature and let them know that we'll convert it to Celsius
const fahrenheitTemp = prompt("What Fahrenheit temperature would you like to convert to Celsius?");

//Create a function called convertToCelsius that takes in the user input (Fahrenheit temperature) and returns the Celsius temperature
//You can use the following calculation to convert a temperature from Fahrenheit to Celsius... celsiusTemp = (fahrenheitTemp - 32) * (5/9)
const convertToCelsius = () => {
  return Math.floor((fahrenheitTemp - 32) * (5/9));
}

//Create a function called describeTemperature which will take in a Fahrenheit temperature and return a description based on the following...
//  Temperature     ->     Description
//       < 32              ->      "very cold"
//       < 64              ->          "cold"        
//       < 86              ->         "warm"     
//      < 100             ->           "hot"       
//     >= 100            ->        "very hot"  
const describeTemperature = (fahren) => {

  if(fahren<32){
    return `very cold`;
  }else if(fahren<64){
    return `cold`;
  }else if(fahren<86){
    return `warm;`
  }else if(fahren<100){
    return `hot`;
  }else{
    return `very hot`;
  }

}

// 5. Send an alert to the user including the Fahrenheit temperature they entered, what that temperature is when it is converted to Celsius, and how that feels.

alert(`It is ${fahrenheitTemp}° F.\nThat is ${convertToCelsius()}° C.\nIt feels ${describeTemperature(fahrenheitTemp)}.`);

//Extra practice
//Create a function called getRandomInt that takes in a number and returns a random number between 0 (included) and the entered number (not included).
const getRandomInt = (zeroTo) => {
  return Math.floor(Math.random()*zeroTo);
}

//Testing pings
// console.log(fahrenheitTemp);
// console.log(convertToCelsius());
// console.log(describeTemperature(fahrenheitTemp));
//console.log(getRandomInt(50));