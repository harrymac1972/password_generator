// Assignment code here
function generatePassword(){
  while (true) {
    var critVar = window.prompt("Please select Criteria:\n    'L' - Length\n    'C' - Character Types\n    'B' - Both");
    critVar = critVar.toUpperCase();
    if (critVar === 'L' || critVar === 'C' || critVar === 'B'){
      break;
    }
  }
if (critVar === 'L' || critVar === 'B'){
  var lengthVar = getLength()
} else {
  var lengthVar = 16;
}
if (critVar === 'C' || critVar === 'B'){
  var typesList = getTypesList();
}
if (typesList == 'false,false,false,false'){
  typesList = getRandomTypesList();
}
return "Password will go here";
}

function getLength(){
  while (true){
    var lengthVar = window.prompt("Please type Password Length (8-128)");
    // string coerced into number for comparison
    if (lengthVar >= 8 && lengthVar <= 128){
      break;
    }
  }
  return lengthVar;
}

function getTypesList(){
  var lowerVar = window.prompt("Include Lower Case?");
  var upperVar = window.prompt("Include Upper Case?");
  var numVar = window.prompt("Include Numbers?");
  var specialVar = window.prompt("Include Special Characters?");
  var typesList = [];
  if (lowerVar.length == 0){
    typesList.push(false);
  } else {
    typesList.push(getBool(lowerVar));
  }
  if (upperVar.length == 0){
    typesList.push(false);
  } else {
    typesList.push(getBool(upperVar));
  }
  if (numVar.length == 0){
    typesList.push(false);
  } else {
    typesList.push(getBool(numVar));
  }
  if (specialVar.length == 0){
    typesList.push(false);
  } else {
    typesList.push(getBool(specialVar));
  }
  return typesList;
}

function getBool(response){
  if (response[0].toUpperCase() === 'Y'){
    return true;
  } else {
    return false;
  }
}

function getRandomTypesList(){
  var trueUsed = 0;
  while (trueUsed == 0){
    var typesList = [];
    for (var i=0;i<4;i++){
      if (Math.floor(Math.random()*2)-1){
        typesList.push(true);
        trueUsed = 1;
      } else {
        typesList.push(false);
      }
    }
    window.alert(`==${typesList}==`);
  }
  return typesList;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
