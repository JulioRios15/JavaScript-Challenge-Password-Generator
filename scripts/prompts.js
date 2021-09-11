/*------------------------------SpecialCharacters Prompt---------------------------------------- */

// special character to include in the password generator
let specialCharacters = "!@#$%^&*()";

// set after special characters promps are runned
let passwordSpecialCharacters;

//getter function to get special characters in main.js
export const getPasswordSpecialCharacters = () => passwordSpecialCharacters;


/* *create a series of prompts to get the special characters the password will include*/
export const showSpecialCharacterPrompts = () => {
  let chars = ""; // will hold only special character included in the password 

  for (let i = 0; i < specialCharacters.length; i++) {
    const promptText = `Do you which to include "${specialCharacters.charAt(i)}"  Y or N`;
    const promptAnswer = showYesOrNoPrompt(promptText);
    
    if(promptAnswer === "Y" || promptAnswer === "y"){
      chars = chars.concat(specialCharacters.charAt(i));
    }
  }

  passwordSpecialCharacters = chars;
}

/*------------------------Password Prompt------------------------------------------------------- */
let passwordLength = 0;

export const getPasswordLength = () => passwordLength;

export const showPasswordLengthPrompt = () => {
  let p = prompt('Password Length (8-128)');

  //if value entered is a number
  if(!isNaN(p) && parseInt(p) >= 8 && parseInt(p) <= 128){
      passwordLength = parseInt(p);
  } else{
    confirm("please enter a valid number between 8-128");
    showPasswordLengthPrompt();
  }

}

/*------------------------Character Types Prompt------------------------------------------------ */

let characterTypes = [
  {required: false, name: "lowercase"},
  {required: false, name: "uppercase"},
  {required: false, name: "numeric"},
  {required: false, name: "special characters"}
];

export const getPasswordCharTypes = () => characterTypes;

// returns true if at least one of the charater types its true
const characterTypesValid = () => {

  for (let i = 0; i < characterTypes.length; i++) {
    if(characterTypes[i].required ===true) return true;   
  }

  return false;
}

export const showCharacterTypesPrompts = () => {

  characterTypes.map((item) => {
    const promptText = `Do you which to inclide ${item.name} values? Y or N`;
    const promptAnswer = showYesOrNoPrompt(promptText);

    if(promptAnswer === "Y" || promptAnswer === "y"){ 
      item.required = true;

      if(item.name === "special characters"){
        let c = confirm('Do you wich to include all special characters?');
        (c) ? passwordSpecialCharacters = specialCharacters : showSpecialCharacterPrompts(); 
      }
    }
  });

  // if we didnt select any char types, run the promps again
  if(!characterTypesValid()){
    confirm("Please select at least on Character Type");
    showSpecialCharacterPrompts();
  }
}

/*---------------------------General------------------------------------------------------------*/ 
/*
*Show a general prompt and return answer "Y or N"
*/
const showYesOrNoPrompt = (promptText) => {
  
  let p = prompt(promptText);

  if(p === "Y" || p === "y" || p === "N" || p === "n"|| p == null){
      return p;
  } else{
      confirm("please answer Y or N");
      showYesOrNoPrompt(promptText);
  }
}



