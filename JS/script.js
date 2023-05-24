const boxElement = document.querySelector("section");

const buttonPlay = document.getElementById("play");

buttonPlay.addEventListener("click", function(){

    boxElement.innerHTML = "";
    console.clear(); 

    numbersArray = getRandomUniqueNumber(1, 100, 16);  //Il computer deve generare 16 numeri casuali 

    console.log(numbersArray);

    for (let i = 1; i <= 100; i++) {
        createBox(i);
        
    }

});

function createBox(number){

    let newBoxElement = document.createElement("div");

    newBoxElement.classList.add("box");

    newBoxElement.innerHTML = number;
        
    boxElement.appendChild(newBoxElement);

    newBoxElement.addEventListener("click", function() { //added evenlistener for change

        
        let bomb = false;

        for (let x = 0; x <= numbersArray.length; x++){

            if (number === numbersArray[x]){
                
                bomb = true;
            }
            
        } 
        
        if (bomb){
   
            console.log(bomb);
            newBoxElement.classList.add("loser");
            this.removeEventListener;

            alert("HAI PERSO, CLICCA PLAY PER COMINCIARE UNA NUOVA PARTITA")
            
            return false;
        
        } else {
           
            newBoxElement.classList.add("selected");
            console.log(number);
        }    


        

    });

    return newBoxElement;


}

/**
 * Function that generates an array of random unique numbers between two values (both included).
 *
 * @param minNum= The minimum interval for the random generated numbers
 * @param maxNum The maximum interval for the random generated numbers
 * @param elements The number of elements to be generated
 * @returns The list of random unique generated numbers, or an empty array if it is not possibile to generate that amount of numbers within the given interval.
 */

function getRandomUniqueNumber( minNum, maxNum, elements ){
  
    const numbersList = [];
  
    if ( (maxNum - minNum) < elements ){
  
        return [];
    }
  
    while (numbersList.length < elements){
  
        const newRandomNumber = getRandomInt(minNum, maxNum);
  
        if (!numbersList.includes(newRandomNumber)){
  
            numbersList.push(newRandomNumber);
        }
    }
  
    return numbersList;
  }
  
  /**
   * Function that generates a random number (not secure) between two values, both included.
   *
   * @param minumNumber the included minium value of the random generated number range.
   * @param maximumNumber the included maximum value of the random generated number range
   * @returns A randomly generated number.
   */
  
  function getRandomInt(minumNumber, maximumNumber){
  
    const randomNumber = Math.floor( Math.random() * ( maximumNumber - minumNumber +1) + minumNumber);
  
    return randomNumber;
  }
  
