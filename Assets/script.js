// Assignments of variables used in password generation
var char26 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Convert char26 uppercase string into lowercase string by using toLowerCase() string method
var char26Lower = char26.toLowerCase();

// Convert uppercase and lowercase strings into an array by using Array.from method, as this is more efficient than having to type the alphabet array ["A", "B", "C", and so on] manually.
var charUpper = Array.from(char26);
var charLower = Array.from(char26Lower)
var charNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var charSpecial = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Assignment code

var generateBtn = document.querySelector("#generate");

function confirm_Length() {
  confirmLength = prompt("Please specify the length of your password between 8-128 characters");
}

var confirmLength = prompt("Please specify the length of your password between 8-128 characters");

function generatePassword() {
  confirm_Length();
  console.log(confirmLength)
  
  /* Loop if answer is outside the parameters -- if confirmLength value is less than 8 or greater than 128
    - an alert message would appear
    - user is asked to re-specify password length
    - Once a permitted value is entered, a password length confirmation message appears before proceeding to confirming password criteria.
  */
  
  while (confirmLength < 8 || confirmLength > 128) {
      alert("Error: Your password must be between 8-128 characters. Please try again")
      confirm_Length();
      }
      alert("Your password will have " + confirmLength + " characters");
  
  /* Determine password criteria
      - 'Ok' = true
      - 'Cancel' = false  
  */
      var confirmUpper = confirm("Would you like to include uppercase characters in your password? Click 'OK' if you do.");
      var confirmLower = confirm("Would you like to include lowercase characters in your password? Click 'OK' if you do.");
      var confirmNumber = confirm("Would you like to include numbers in your password? Click 'OK' if you do.");
      var confirmSpecial = confirm("Would you like to include special characters in your password? Click 'OK' if you do.");
  
  // Loop if answer is outside the parameters -- a user must select (i.e., select "Ok") a minimum of 1 criteria
      while (confirmUpper === false && confirmLower === false && confirmNumber === false && confirmSpecial === false) {
      alert("Error! You must specify at least 1 parameter to generate a password");
      var confirmUpper = confirm("Would you like to include uppercase characters in your password? Click 'OK' if you do.");
      var confirmLower = confirm("Would you like to include lowercase characters in your password? Click 'OK' if you do.");
      var confirmNumber = confirm("Would you like to include numbers in your password? Click 'OK' if you do.");
      var confirmSpecial = confirm("Would you like to include special characters in your password? Click 'OK' if you do.");
      }

  // Assign an action to the password parameters -- do the following if condition stack on top of one another?
  var passwordCombo = []

  if (confirmUpper) {
    passwordCombo = passwordCombo.concat(charUpper)
  }
  console.log(confirmUpper)

  if (confirmLower) {
    passwordCombo = passwordCombo.concat(charLower)
  }
  console.log(confirmLower)

  if (confirmNumber) {
    passwordCombo = passwordCombo.concat(charNumber)
  }
  console.log(confirmNumber)

  if (confirmSpecial) {
    passwordCombo = passwordCombo.concat(charSpecial)
  }
  console.log(confirmSpecial)

  console.log(passwordCombo)

  /* Still don't understand the mechanism of this loop 
  - what does i refer to in this loop?
  - what's the function of [ ] in the 2nd line of this for loop? An array?
  */
  
  var randomPassword = ""

// i determines the number of times the code is run
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCombo[Math.floor(Math.random() * passwordCombo.length)]
    console.log(randomPassword)
  }
  return randomPassword

}

// Write password to the #password input, i.e, replace placeholder in the <textarea> with ID="password" with the generated password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);