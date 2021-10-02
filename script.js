// Assignment Code
var generateBtn = document.querySelector("#generate");

var letters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseLetters = [];
var numberArray = [0,1,2,3,4,5,6,7,8,9];
var specialChars = [" ","!","\"","#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "\/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
// console.log(specialChars);
var arrayChooseFrom;
var blankPassword = "";

var arrayOfArrays = [];

function pickArray(numArrays) {
  var num = Math.floor(Math.random()*(numArrays+1));
  // console.log(num);
  return arrayOfArrays[num];
}

function pickCharacter(numOfChars) {
  var elementNum = Math.floor(Math.random()*(numOfChars+1));
  // console.log(elementNum);
  // console.log(arrayChooseFrom[elementNum]);
  return arrayChooseFrom[elementNum];
}

function generatePassword () {
  //reseting the variables and text area to blank
  arrayOfArrays = [];
  blankPassword = "";
  arrayChooseFrom = [];

  var passwordLength = prompt("How many characters would you like your password to be? (must be greater than 8 characters and less than 128 characters)");
  // console.log(parseInt(passwordLength,10));
  //passwordLength is a string and the comparison in the "if" statement will try to change its type to a number. If the user puts in a Nan it will go to the else statement
  if(passwordLength >= 8 && passwordLength <= 128) {
      var lowercase = confirm("Would you like lowercase letters in your password?");
      var uppercase = confirm("Would you like uppercase letters in your password?");
      var numbers = confirm("Would you like numbers in your password?");
      var special = confirm("Would you like special characters in your password?");
  
  if(!lowercase && !uppercase && !numbers && !special) {
    alert("You must choose at least 1 type of characters to include in your password");
    return generatePassword();
  }

  //if the user selects "confirm" for any of the character types to go in their password then the array holder those character types gets added to an array of arrays  
  if(lowercase) {
    arrayOfArrays.push(letters);
  }
  if(uppercase) {
    for(var i = 0; i < letters.length; i++) {
      uppercaseLetters.push(letters[i].toUpperCase());
    }
    arrayOfArrays.push(uppercaseLetters);
  }
  if(numbers) {
    arrayOfArrays.push(numberArray);
  }
  if(special) {
    arrayOfArrays.push(specialChars);
  }
  // console.log(arrayOfArrays); 
  
  //randomly pick an array to pick a character from based on user choices. Then randomly pick a character from the randomly chosen array. Do it as many times as the length of the password the user has chosen
  for(var j =0; j < passwordLength; j++) {
    arrayChooseFrom = pickArray(arrayOfArrays.length-1);
    // console.log(arrayChooseFrom);
    var randomCharacter = pickCharacter(arrayChooseFrom.length-1);
    blankPassword = blankPassword.concat(randomCharacter);
  }
  // console.log("Your password is: " + blankPassword);
  return blankPassword;

  }
  else {
    if(window.confirm("You must enter a number between 8 (inclusive) and 128 (inclusive). Click \"Ok\" to try again")) {
      return generatePassword();
    }
  }    
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
