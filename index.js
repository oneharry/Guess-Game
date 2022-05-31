const prompt = require('prompt-sync')();



const guessGame = (min = 1, max = 2) => {

    //sets cookie
    const setCookie = (userName, stage) => {
        document.cookie = `username=${userName}, stage=${stage}`
    }
    
    const getCookie = (userName) => {
        const name = `${username}=`;
        const decoded = decodeURIComponent(document.cookie);
        const cookieArr = decoded.split(';');
        let value;
        cookieArr.forEach(x => {
            if(x.indexOf(name) === 0) {
                value = x.substring(name.length);
    
            } else {
                value = "";
            }
        })
        return value;
    }
    

    //gets random numbers
    const getRandomNum = (max, min) => {
        
        return (Math.random() * (max-min) + min).toFixed(1);
        
    }
   
    //prompts user for username
    let userName = prompt("Enter Username> ");

    //only usernames can play
    if(userName) {
        console.log(userName)
        let stage = 1;
    
        
        let randomNumber = getRandomNum(max, min);
        setCookie(userName, stage)

        //prompts for number
        let userGuess = Number(prompt("Predict number to one decimal place> "));

        //checks that users input is within range
        if(userGuess < min || userGuess > max) {
            console.log("Number out of range")

        } else {
            //checks for correctness
            if(randomNumber == userGuess) {
                max++;
                stage++;
                
                setCookie(userName, stage)
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