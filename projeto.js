const getCores = require('./getCores');

(async () => {
    vetorCores = await getCores();
    colorsArray = vetorCores;
    let colorsInTheGame = []
for (let i = 0; i < 10; i++) {
  let colors = [colorsArray[Math.floor(Math.random() * colorsArray.length)]];
  colorsInTheGame.push(colors);
  for (let j = 0; j < colorsInTheGame.length; j++) {
    if (colorsInTheGame[i]==colorsInTheGame[j]) {
      colorsInTheGame[i].splice(colorsInTheGame[i],1, [colorsArray[Math.floor
        (Math.random() * colorsArray.length)]])
    }
  }
}
function theGame(){
  
  correctChoose = [colorsArray[Math.floor(Math.random() * colorsArray.length)]]  
  while (true){

      let choose = prompt("Choose and type the color \n" + colorsInTheGame[0] +" "+ colorsInTheGame[1] +" "+ colorsInTheGame[2] + " " + colorsInTheGame[3] + " " + colorsInTheGame[4] + " " + colorsInTheGame[5] + " " + colorsInTheGame[6] + " " + colorsInTheGame[7] + " " + colorsInTheGame[8] + " " + colorsInTheGame[9]);

      if (correctChoose == choose) {
          document.body.style.backgroundColor = correctChoose;
          alert("Congratulation!");
          return true;
      }
      
      if (!check(choose)){
          alert("this is not a valid choice, please try again.");
      } else if (choose > correctChoose) {
          alert("Wrong! Color is alphabetically lower!");
      } else if (choose < correctChoose){
          alert("Wrong! Color is alphabetically lower!")
      }
      
  }
  

}



})();






