import { 
  getPasswordSpecialCharacters,
  showPasswordLengthPrompt,
  getPasswordLength,
  showCharacterTypesPrompts,
  getPasswordCharTypes,
} from "./prompts.js";

// Assignment code here
const generatePassword = () => {

  // Prompts Initialization
  showPasswordLengthPrompt();
  showCharacterTypesPrompts();

  // Get the password generation requirements
  let passwordLength = getPasswordLength();
  let charTypes = getPasswordCharTypes();
  let specialCharacters = getPasswordSpecialCharacters();

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let capitalLetters = alphabet.toUpperCase();
  let alphanumeric = "1234567890";

  //chars that may be included in the password generator
  let passwordCombination = "";

  // store the password generated
  let passwordGenerated = "";

  // add possible chars included in the password based in our character type selection prompts
  for (let i = 0; i < charTypes.length; i++) {
        if(charTypes[i].name === "lowecase" && charTypes[i].required === true){
          passwordCombination = passwordCombination.concat(alphabet);
        }
        if(charTypes[i].name === "uppercase" && charTypes[i].required === true){
          passwordCombination = passwordCombination.concat(capitalLetters);
        }
        if(charTypes[i].name === "numeric" && charTypes[i].required === true){
          passwordCombination = passwordCombination.concat(alphanumeric);
        }
        if(charTypes[i].name === "special characters" && charTypes[i].required === true){
          passwordCombination = passwordCombination.concat(specialCharacters);
        }  
  }

  //generate the password
  for (let i = 0; i < passwordLength; i++) {
    let n = Math.floor(Math.random() * passwordCombination.length);
    let charToAdd = passwordCombination.charAt(n);
    passwordGenerated = passwordGenerated.concat(charToAdd);
  }

  return passwordGenerated;
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