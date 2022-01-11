// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = {
  lowercase: ["a","b","c","d","e","f","g","h","i","j","k","m","n","o","p","q","r","s"];
  uppercase: ["A","B","C","D","E","F","G","H","I","J","K","M","N","O","P","Q","R","S"];
  numeric: [0,1 ,2, 3, 4, 5, 6, 7, 8, 9,];
  special: ["","!","@","#","#","$","%","^","&","*","(",")",];

};




// Write password to the #password input
var passwordLength;
 function askPasswordLength(){
   passwordLength = prompt("Please enter a password length between 8 and 128 characters.");
   if (passwordLength < 8 || passwordLength > 128){
     alert("Please enter a valid password length");
   }
 }

askPasswordLength();

var eligibleCharacter = [];
function askCharachterTypes(){
  for  (const [key,value]of Object.entries(characters)) {
    if (confirm("would you like to include ${key} characters?")) {
      eligibleCharacter = eligibleCharacter.concat(value);
    }
}
if (eligibleCharacter.length === 0){
  alert("Please select one character type.");
  askCharachterTypes();  
    }
}  
askCharachterTypes();
console.log(eligibleCharacter);


var passwordArray = [];

for (var i = 0; i < passwordLength; i++){
  passwordArray[i] = eligibleCharacter[Math.floor(Math.random() * eligibleCharacter.length)];
}
var password = passwordArray.join("");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
