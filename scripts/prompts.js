// special character to include in the password generator
let specialCharacters = "!@#";

// set after special characters promps are runned
let passwordSpecialCharacters;

//getter function to get special characters in main.js
export const getPasswordSpecialCharacters = () => passwordSpecialCharacters;


/* *create a series of prompts to get the special characters the password will include*/
export const showSpecialCharacterPrompts = () => {
  let chars = ""; // will hold only special character included in the password 

  for (let i = 0; i < specialCharacters.length; i++) {
    const promptText = `Do you which to include "${specialCharacters.charAt(i)}"  Y or N`;
    const promptAnswer = showSpecialCharacterPrompt(promptText);
    
    if(promptAnswer === "Y" || promptAnswer === "y"){
      chars = chars.concat(specialCharacters.charAt(i));
    }
  }

  passwordSpecialCharacters = chars;
}

/*
*Show prompt and return answer "Y or N"
*/
const showSpecialCharacterPrompt = (promptText) => {
  
  let prompt = prompt(promptText);

  if(prompt === "Y" || prompt === "y" || prompt === "N" || prompt === "n"|| prompt == null){
    return prompt;
  } else{
    confirm("please answer Y or N");
    showSpecialCharacterPrompt(promptText);
  }
}



