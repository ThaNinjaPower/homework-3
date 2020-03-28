// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // List of characters
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChars = "\"!#$%&()+,-./:;<=>?@[\]^_`{|}~";

  // Random password length between 8 and 128, both inclusive
  var passwordLength;
  while(true) {
    passwordLength = parseInt(prompt("Enter the desired password length."));
    if (passwordLength < 8) {
      alert("This password is not long enough. Must be between 8 and 128 characters.");
    }
    else if (passwordLength > 128) {
      alert("This password is too long. Must be between 8 and 128 characters.");
    }
    else {
      break;
    }
  }

  // Prompt to specifically pick types of characters
  var lowercasePrompt = confirm("Include lowercase letters?");
  var uppercasePrompt = confirm("Include uppercase letters?");
  var numberPrompt = confirm("Include numbers?");
  var specialPrompt = confirm("Include special characters?");

  var generatedPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    // chartype: 0 - lowercase, 1 - uppercase, 2 - number, 3 - special
    var charType = Math.floor(Math.random() * 4);

    if(charType === 0 && lowercasePrompt === true) {
      var randomChar = lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
      generatedPassword = generatedPassword.concat(randomChar);
      console.log(generatedPassword);
    }

    else if(charType === 1 && uppercasePrompt === true) {
      var randomChar = uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
      generatedPassword = generatedPassword.concat(randomChar);
      console.log(generatedPassword);
    }

    else if(charType === 2 && numberPrompt === true) {
      var randomChar = numbers.charAt(Math.floor(Math.random() * numbers.length));
      generatedPassword = generatedPassword.concat(randomChar);
      console.log(generatedPassword);
    }

    else if(charType === 3 && specialPrompt === true) {
      var randomChar = specialChars.charAt(Math.floor(Math.random() * specialChars.length));
      generatedPassword = generatedPassword.concat(randomChar);
      console.log(generatedPassword);
    }

    else {
      i--;
    }
  }

  return generatedPassword;
}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);