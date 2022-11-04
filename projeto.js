const coresArray = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige",
"Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood",
"CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk",
"Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey",
"DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange",
"DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue",
"DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet",
"DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
"FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro",
"GhostWhite","Gold","GoldenRod","Gray","Green","GreenYellow",
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

function randomColor() {
    let cor = coresArray[Math.floor(Math.random() * coresArray.length)];
    return cor;
}
let colorsInTheGame = []
for (let i = 0; i < 10; i++) {
  let cor = randomColor();
  colorsInTheGame.push(cor);
  for (let j = 0; j < colorsInTheGame.length; j++) {
    if (colorsInTheGame[i]===colorsInTheGame[j]) {
      colorsInTheGame.pop();
      colorsInTheGame.push(randomColor());
    }
  }
}
colorsInTheGame.sort();
console.log(colorsInTheGame)
function test(winner) {
  if (colorsInTheGame.includes(winner)){
      return true;
  }
  return false;
}

function init(){
  let correctColor = colorsInTheGame[Math.floor(Math.random() * colorsInTheGame.length)];
  while (true){

    let choose = prompt("Enter one of the colors that appears on the display: \n" +
    colorsInTheGame[0]+" , "+colorsInTheGame[1]+" , "+
    colorsInTheGame[2]+" , "+colorsInTheGame[3]+" , "+
    colorsInTheGame[4]+" , "+colorsInTheGame[5]+" , "+
    colorsInTheGame[6]+" , "+colorsInTheGame[7]+" , "+
    colorsInTheGame[8]+" , "+colorsInTheGame[9]);
    
    if (correctColor === choose) {
      document.body.style.backgroundColor = correctColor;
      alert("congratulation");
      return true;
  }
    if (!test(choose)){
      alert( "Please, type a valid color");
  } else if (choose > correctColor) {
    alert("Wrong. the color i chose is alphabetically lower");
  } else if (choose < correctColor){
    alert("Wrong. the color i chose is alphabetically higher");
  }  
  }
}








