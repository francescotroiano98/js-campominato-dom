const boxElement = document.querySelector("section");

const buttonPlay = document.getElementById("play");

buttonPlay.addEventListener("click", function(){

    boxElement.innerHTML = "";
    console.clear();

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

        newBoxElement.classList.toggle("selected");

        console.log(number);

    });

    return newBoxElement;


}

