// Assignment Code
const generateBtn = document.querySelector("#generate");

const lowercase = "abcedfghijklmnopqrstuvwxyz";
const uppercase = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";
const specialCharacters = "@#$%^&*=|";
const numericalCharacters = "1234567890";

let passwordCriteria = 8 - 128;

const passwordCriteria = prompt("How long would you like your password to be? Choose between 8-128 characters");
alert("You want " + passwordCriteria + " characters");

function generatePassword()
const uppercaseConfirm = confirm("does the password need to contain random upper case letters?")

const lowercaseConfirm = confirm("would you like the PW need to contain random lowercase letters?")

const specialCharacters = confirm("does the PW need to contain special random characters?")

const numericalCharacters = confirm("would you like the PW to contain random numbers?")




// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);