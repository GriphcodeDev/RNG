const Roll = document.getElementById("roll");
const DiceInput = document.getElementById("dice");
const DiceResult = document.getElementById("result");
const DiceProb = document.getElementById("probability");

imagesArray = new Array(6);
imagesArray[0] = new Image();
imagesArray[0].src = "./assets/img_dice/1.png";
imagesArray[1] = new Image();
imagesArray[1].src = "./assets/img_dice/2.png";
imagesArray[2] = new Image();
imagesArray[2].src = "./assets/img_dice/3.png";
imagesArray[3] = new Image();
imagesArray[3].src = "./assets/img_dice/4.png";
imagesArray[4] = new Image();
imagesArray[4].src = "./assets/img_dice/5.png";
imagesArray[5] = new Image();
imagesArray[5].src = "./assets/img_dice/6.png";


    
    Roll.addEventListener("click", () => {
        if(DiceInput.value == 1) {
           let index = Math.floor(Math.random() * imagesArray.length);
            let diceImg = imagesArray[index];
            let prob = index + 1;

            DiceResult.innerHTML = `<img style="border-radius: 10px;" src="${diceImg.src}">`;
            
            DiceProb.innerHTML = prob;
        }
        else {
            DiceResult.innerHTML = false;
            
        }
    });





