const prompt = require('prompt-sync')();
const Cookies = require('js-cookie')



const guessGame = (min = 1, max = 2) => {
  
    //gets random numbers
    const getRandomNum = (max, min) => {
        
        return (Math.random() * (max-min) +min).toFixed(1);     
        
    }
   
    //prompts user for username
    let userName = prompt("Enter Username> ");
    // let expires = new Date()
     Cookies.set(userName, 'hiui', {expires: 7})
      console.log(Cookies.get)
    //only usernames can play
    if(userName) {
        console.log(userName)
        let stage = 1;
    
        
        let randomNumber = getRandomNum(max, min);
       

        //prompts for number
        let userGuess = Number(prompt("Predict number to one decimal place> "));
      console.log(Cookies.get('userName'))

        //checks that users input is within range
        if(userGuess < min || userGuess > max) {
            console.log("Number out of range")

        } else {
            //checks for correctness
            if(randomNumber == userGuess) {
                max++;
                stage++;
                
                console.log(Cookies.get(userName))
                console.log("stage", stage, max)
                console.log("Congratulation!!! .... Next level")
            
            } else {
                console.log("Oop!, Wrong guess, try again...")
            }
        }

        
    } else {
        
        let userName = prompt("Oop!, Enter Username");
        
    } 
    
}

guessGame();
