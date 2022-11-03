const colorsArray = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige",
"Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood",
"CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk",
"Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey",
"DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange",
"DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue",
"DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet",
"DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
"FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro",
"GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow",
"HoneyDew","HotPink","IndianRed ","Indigo  ","Ivory","Khaki","Lavender",
"LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral",
"LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen",
"LightPink","LightSalmon" ,"LightSeaGreen","LightSkyBlue","LightSlateGray",
"LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen",
"Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
"MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen",
"MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose",
"Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange",
"OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise",
"PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
"Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon",
"SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue",
"SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal",
"Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow",
"YellowGreen"]

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

      let choose = prompt("Choose and type the color \n" + colorsInTheGame[0] +
      " "+ colorsInTheGame[1] +" "+ colorsInTheGame[2] + " " + 
      colorsInTheGame[3] + " " + colorsInTheGame[4] + " " + 
      colorsInTheGame[5] + " " + colorsInTheGame[6] + " " +
      colorsInTheGame[7] + " " + colorsInTheGame[8] + " " +
      colorsInTheGame[9]);

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








