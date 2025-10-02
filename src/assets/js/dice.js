const Roll = document.getElementById("roll");
const DiceInput = document.getElementById("dice");
const DiceResult = document.getElementById("result");


function DiceProb() {
    
    Roll.addEventListener("click", () => {
        if(DiceInput == 1) {
           let chance = Math.floor(Math.random(1) * 6);

            DiceResult.innerHTML = chance;
        }
    });


}

DiceProb();