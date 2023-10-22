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
  var typeVar = getType()
} else {
  var typeVar = 16;
}
return critVar;
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

function getType(){
  
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
