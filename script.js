// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Array of numeric characters to be include in password
var numbericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of uppercase characters to be include in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// Array of lowercase characters to be include in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// Array of special characters to be include in password
var specialCharacters = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// function to promt user for password options
function getPasswordOptions() {
  var isValid = false;
  do {
    var length = prompt("How many characters woul like your password to contain?(between 8 and 128 characters)");
    var askNumbericCharacters = confirm("Do you want your password to include numbers?");
    var askLowerCasedCharacters = confirm("Do you want your password to include lowercase letters?");
    var askUpperCasedCharacters = confirm("Do you want your password to include uppercase letters?");
    var askSpecialCharacters = confirm("Do you want your password to include special characters?");
    var responses = {
      length: length,
      askNumbericCharacters: askNumbericCharacters,
      askLowerCasedCharacters: askLowerCasedCharacters,
      askUpperCasedCharacters: askUpperCasedCharacters,
      askSpecialCharacters: askSpecialCharacters
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!askNumbericCharacters)&&(!askLowerCasedCharacters)&&(!askUpperCasedCharacters)&&(!askSpecialCharacters))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
}
// function joins all the user responses and then creates the result
function generatePassword() {
  var passwordOptions = getPasswordOptions();
  var possibleCombo = [];
  var finalPassword = "";



  if (passwordOptions.askNumbericCharacters) {
    for (var i of numbericCharacters)
      possibleCombo.push(i);
  }
  if (passwordOptions.askLowerCasedCharacters) {
    for (var i of lowerCasedCharacters)
      possibleCombo.push(i);
  }
  if (passwordOptions.askUpperCasedCharacters) {
    for (var i of upperCasedCharacters)
      possibleCombo.push(i);
  }
  if (passwordOptions.askSpecialCharacters) {
    for (var i of specialCharacters)
      possibleCombo.push(i);
  }


  console.log(possibleCombo);


  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
    
  }
  console.log(finalPassword);

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);