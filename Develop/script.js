// Assignment code here
function generatePassword(){
  while (true) {
    var critVar = window.prompt("Please select Criteria:\n    'L' - Length\n    'C' - Character Types\n    'B' - Both");
    critVar = critVar.toUpperCase();
    if (critVar === 'L' || critVar === 'C' || critVar === 'B'){
      break
    }
  }
return critVar;
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
