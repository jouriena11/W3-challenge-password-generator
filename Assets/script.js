// Assignments of variables used in password generation
var char26 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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

// Convert char26 uppercase string into lowercase string by using toLowerCase() string method
var char26Lower = char26.toLowerCase();

// Convert uppercase and lowercase strings into an array by using Array.from method, as this is more efficient than having to type the alphabet array ["A", "B", "C", and so on] manually.
var charUpper = Array.from(char26);
var charLower = Array.from(char26Lower)

// Assignment code

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  confirmLength = prompt("Please specify the length of your password between 8-128 characters");
  console.log(confirmLength)

  /* Expected behavior: If a user enters an incorrect value, e.g. a number that's less than 8,  a number that's greater than 128, 
  a negative number, or a blank, then an alert message would appear and exit once the user clicks 'ok.'

  If the user enters a correct value of the password link, a confirmation message would appear before proceeding to the password
  criteria specification.

  Although [while] loop can be used to automatically re-prompt and have the user re-enter the password length, I was advised that
  this could negatively affect user experience, especially mobile user experience. So [if] conditional statement is deemed more
  appropriate in this context.
  */
 
  if(confirmLength < 8 || confirmLength > 128){
    alert("Error: Your password must be between 8-128 characters. Please try again");
    return
  }
    alert("Your password will have " + confirmLength + " characters");
  
  // Determine password criteria -- 'Ok' = true; 'Cancel' = false
  
      var confirmUpper = confirm("Would you like to include uppercase characters in your password? Click 'OK' if you do.");
      var confirmLower = confirm("Would you like to include lowercase characters in your password? Click 'OK' if you do.");
      var confirmNumber = confirm("Would you like to include numbers in your password? Click 'OK' if you do.");
      var confirmSpecial = confirm("Would you like to include special characters in your password? Click 'OK' if you do.");
  
  /* If the user answers outside the parameters (i.e., not selecting any criteria) an alert message would appear, asking the
  user to re-specify the criteria. Here, the [while] loop is appropriate as a user probably wouldn't want to re-enter the 
  password length again. */

      while (confirmUpper === false && confirmLower === false && confirmNumber === false && confirmSpecial === false) {
      alert("Error! You must specify at least 1 parameter to generate a password");
      var confirmUpper = confirm("Would you like to include uppercase characters in your password? Click 'OK' if you do.");
      var confirmLower = confirm("Would you like to include lowercase characters in your password? Click 'OK' if you do.");
      var confirmNumber = confirm("Would you like to include numbers in your password? Click 'OK' if you do.");
      var confirmSpecial = confirm("Would you like to include special characters in your password? Click 'OK' if you do.");
      }

  /* Assign an action to the password parameters -- to include all arrays conditional to the user's true/false value in each
  confirm() method above, each variable has its own conditional statement and will be concatenated in passwordCombo variable 
  with concat() if the conditional statement is true. */
  
  var passwordCombo = [] // As concat() method only works on array, var passwordCombo is assigned an empty array and concatenated with the variable(s) conditional statement that returns true.

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


  /* Generate a random with the 'for' loop - the expressions in the loop behaves as a counter, dictating how many times the 
  code that follows (i.e., the user's specify password length) will run.
  
  We want the final random generated password to be a string, hence a var randomPassword is declared and assigned an empty 
  string value. The code within the 'for' loop will thereafter replace the randomPassword empty string with the newly created
  value, and the newly created value will be replaced by the newly created value, the process which is repeated for the same
  number of times as the password length.
  */
  
  var randomPassword = ""

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