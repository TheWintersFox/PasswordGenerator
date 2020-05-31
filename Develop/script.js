// Assignment Code
const generateBtn = document.querySelector("#generate");
const lowercase = ['a', 'b', 'c', 'e', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercase = ['A', 'B', 'C', 'E', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const specialCharacters = ['@', '#', '$', '%', '^', '&', '*'];
const numericalCharacters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
    let passwordLength = prompt("How long would you like your password to be? Choose between 8-128 characters");
    // If password criteria is less than 8 or more than 128 
    if (passwordLength < 8 || passwordLength > 128) {
        //Alerts user this doesn't work
        alert("Sorry this doesn't meet the criteria");
        //If criteria is met then function will run through statements
    } else {
        alert("You want " + passwordLength + " characters");
        const uppercaseConfirm = confirm(
            "does the password need to contain random upper case letters?"
        );
        const lowercaseConfirm = confirm(
            "would you like the PW need to contain random lowercase letters?"
        );
        const specialCharactersConfirm = confirm(
            "does the PW need to contain special random characters?"
        );
        const numericalCharactersConfirm = confirm(
            "would you like the PW to contain random numbers?"
        );
        let passwordArray = [];

        if (uppercaseConfirm !== true && lowercaseConfirm !== true && specialCharactersConfirm !== true && numericalCharactersConfirm !== true) {
            alert("You have to choose one");
        } else if (uppercaseConfirm == true && lowercaseConfirm == true && specialCharactersConfirm == true && numericalCharactersConfirm == true) {
            for (i = 0; i < passwordLength; i++) {
                let characterType = Math.floor(Math.random() * 4);

                if (characterType == 0) {
                    let randomUpper = uppercase[Math.floor(Math.random() * uppercase.length)];
                    passwordArray[i] = randomUpper;
                } else if (characterType == 1) {
                    let randomLower = lowercase[Math.floor(Math.random() * lowercase.length)];
                    passwordArray[i] = randomLower;
                } else if (characterType == 2) {
                    let randomSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
                    passwordArray[i] = randomSpecial;
                } else if (characterType == 3) {
                    let randomNumber = numericalCharacters[Math.floor(Math.random() * 10)];
                    passwordArray[i] = randomNumber;
                }
            }
            let finalPassword = passwordArray.join("");
            console.log(finalPassword);
            return finalPassword;
        }
    }
}