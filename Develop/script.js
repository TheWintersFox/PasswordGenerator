// Assignment Code
const generateBtn = document.querySelector("#generate");


const lowercase = ['a', 'b', 'c', 'e', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'E', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialCharacters = ['@', '#', '$', '%', '^', '&', '*', '=', '|'];
const numericalCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];



function generatePassword() {
    let passwordCriteria = 8 - 128;
    const passwordLength = prompt("How long would you like your password to be? Choose between 8-128 characters");
    alert("You want " + passwordCriteria + " characters");

    const uppercaseConfirm = confirm(
        "does the password need to contain random upper case letters?"
    );

    const lowercaseConfirm = confirm(
        "would you like the PW need to contain random lowercase letters?"
    );
    const specialCharacters = confirm(
        "does the PW need to contain special random characters?"
    );
    const numericalCharacters = confirm(
        "would you like the PW to contain random numbers?"
    );

    for (i = 0, i < passwordLength, i++) {
        let autogenPassword = Math.floor(Math.random() * password.Length);
    }
}

// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);