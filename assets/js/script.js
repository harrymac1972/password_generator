
// ======== ASSIGNMENT CODE STARTS ========

// Assignment code here
function generatePassword(){
  var criteriaVar = getCriteria();
  var lengthVar = getCriteriaLength(criteriaVar);
  var typesList = getCriteriaTypes(criteriaVar);
  var passwordString = findPassword(lengthVar,typesList);
  return passwordString;
}

function getBool(response){
  if (response[0].toUpperCase() === 'Y'){
    return true;
  } else {
    return false;
  }
}

function getCriteria(){
  var msgVar = "Please select Criteria:\n    'L' - Length"
  msgVar += "\n    'C' - Character Types\n    'B' - Both"
  while (true) {
    var criteriaVar = window.prompt(msgVar);
    criteriaVar = criteriaVar.toUpperCase();
    if (criteriaVar === 'L' || criteriaVar === 'C' || criteriaVar === 'B'){
      break;
    }
  }
  return criteriaVar;
}

function getCriteriaLength(criteriaVar){  
  if (criteriaVar === 'L' || criteriaVar === 'B'){
    var lengthVar = getLengthUser();
  } else {
    var lengthVar = 16;
  }
  return lengthVar;
}

function getCriteriaTypes(criteriaVar){
  if (criteriaVar === 'C' || criteriaVar === 'B'){
    var typesList = getTypesList();
  } else {
    var typesList = getTypesListRandom();
  }
  if (typesList == 'false,false,false,false'){
    typesList = getTypesListRandom();
  }
  return typesList;
}

function getLengthUser(){
  while (true){
    var lengthVar = window.prompt("Please type Password Length (8-128)");
    // string coerced into number for comparison
    if (lengthVar >= 8 && lengthVar <= 128){
      break;
    }
  }
  return lengthVar;
}

function getMasterString(typesList){
  var alphaString = 'abcdefghijklmnopqrstuvwxyz';
  var masterString = '';
  if (typesList[0]){
    masterString += alphaString;
  }
  if (typesList[1]){
    masterString += alphaString.toUpperCase();
  }
  if (typesList[2]){
    masterString += '1234567890';
  }
  if (typesList[3]){
    masterString += '!@#$%^&*(),.<>';
  }
  return masterString;
}

function getRandomNumber(maxNum){
  var randomNumber = Math.floor(Math.random()*maxNum);
  return randomNumber;
}

function getTypesList(){
  var lowerVar = window.prompt("Include Lower Case?");
  var upperVar = window.prompt("Include Upper Case?");
  var numVar = window.prompt("Include Numbers?");
  var specialVar = window.prompt("Include Special Characters?");
  // Note: wanted this cleaner but empty strings not passing as arguments
  var typesList = [];
  // Lower Characters
  if (lowerVar.length == 0){
    typesList.push(false);
  } else {
    typesList.push(getBool(lowerVar));
  }
  // Upper Characters
  if (upperVar.length == 0){
    typesList.push(false);
  } else {
    typesList.push(getBool(upperVar));
  }
  // Numerical Characters
  if (numVar.length == 0){
    typesList.push(false);
  } else {
    typesList.push(getBool(numVar));
  }
  // Special Characters
  if (specialVar.length == 0){
    typesList.push(false);
  } else {
    typesList.push(getBool(specialVar));
  }

  return typesList;
}

function getTypesListRandom(){
  var trueUsed = 0;
  while (trueUsed == 0){
    var typesList = [];
    for (var i=0; i<4; i++){
      if (getRandomNumber(2)-1){
        typesList.push(true);
        trueUsed = 1; // ensures at least one Type employed
      } else {
        typesList.push(false);
      }
    }
  }
  return typesList;
}

function findPassword(lengthVar,typesList){
  var masterString = getMasterString(typesList);
  var masterStringLength = masterString.length;
  var passwordString = "";
  for (var i=0; i<lengthVar; i++){
    var newCharIndex = getRandomNumber(masterStringLength);
    var newChar = masterString[newCharIndex];
    passwordString += newChar;
  }
  return passwordString;
}

// ======== ASSIGNMENT CODE ENDS ========

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
