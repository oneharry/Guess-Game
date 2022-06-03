const prompt = require('prompt-sync')();



const guessGame = (min = 1, max = 2) => {
  
    //gets random numbers
    const getRandomNum = (max, min) => {
      //return random numer to 1 decimal place
      return (Math.random() * (max-min) +min).toFixed(1); 
    }

  //player info
  const player = {
    "name": "",
    "point": 0
  }
  
  let playGame = false;

  do {
    //prompts user for username
    let userName = prompt("Enter Username> ");
    player.name = userName;
  
      
    //only  entered usernames can play
    if(userName) {
      let correctAnswer = false;
      let stage = 1;
      let userGuess;
      playGame = false;
      
        
      do {
        
        let randomNumber = getRandomNum(max, min);
        
        console.log(userName, randomNumber, stage, max)
        
        //prompts for number
        userGuess = Number(prompt(`Input number between(${min}.0-${max}.0)`));
      
      //CHECK!!!!!!!!!!
        //checks that users input is within range
        //restart game if user enters number outside range
        if(userGuess < min || userGuess > max) {
          console.log("Number out of range")
          playGame = true;
          
          

        } else {
          
            //checks for correctness
            if(randomNumber == userGuess) {
              //guessed right
              //increase max and stage by 1
              //increment point by 1
              correctAnswer = true;
              max++;
              stage++;
              player.point++
              console.log(`Welcome to Stage ${stage}`)
              
            } else {
              correctAnswer = false;
              const start = prompt("Game Over! Start Again(y/n)> ");
              //determine next action from user 
              if(start.toLowerCase() === 'y') {
                playGame = true;
                
              } else if(start.toLowerCase() === 'n') {
                //ends game when user selects no
               console.log("Game ended")
                return;
              }  else {
                console.log('invalid answer')
                return;
              }
              
            }
        }
      } while(correctAnswer)
        

        
    } else {
      //checks if user didnt enter username
        console.log("Enter a valid username")
        playGame = true;
        
    }
  
  } while(playGame)
   
     
    
}

guessGame();
