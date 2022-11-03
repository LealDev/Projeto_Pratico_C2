var cores = [ "AliceBlue",
"AntiqueWhite",
"Aqua",
"Aquamarine",
"Azure",
"Beige",
"Bisque",
"Black",
"BlanchedAlmond",
"Blue",
"BlueViolet",
"Brown",
"BurlyWood",
"CadetBlue",
"Chartreuse",
"AliceBlue",
"AntiqueWhite",
"Aqua",
"Aquamarine",
"Azure",
"Beige",
"Bisque",
"Black",
"BlanchedAlmond",
"Blue",
"BlueViolet",
"Brown",
"BurlyWood",
"CadetBlue",
"Chartreuse","AliceBlue",
"AntiqueWhite",
"Aqua",
"Aquamarine",
"Azure",
"Beige",
"Bisque",
"Black",
"BlanchedAlmond",
"Blue",
"BlueViolet",
"Brown",
"BurlyWood",
"CadetBlue",
"Chartreuse",
];
let colorsInTheGame = []
for (let i = 0; i < 10; i++) {
  let colors = [cores[Math.floor(Math.random() * cores.length)]];
  colorsInTheGame.push(colors);
  for (let j = 0; j < colorsInTheGame.length; j++) {
    if (colorsInTheGame[i]===colorsInTheGame[j]) {
      colorsInTheGame[i].splice(colorsInTheGame[i],1, [cores[Math.floor(Math.random() * cores.length)]])
    }
  }
}


console.log(colorsInTheGame);
