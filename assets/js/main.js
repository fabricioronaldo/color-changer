const titulo = document.querySelector('.hex__color');
console.log(titulo)

const colorButton = document.querySelector('.main__button');
console.log(colorButton)

const background = document.querySelector('.main');
console.log(background)


const color = [
  "silver",
"gray",
"white",
"maroon",
"red",
"purple",
"fuchsia",
"green",
"lime",
"olive",
"yellow",
"navy",
"blue",
"teal",
"aqua",
"orange",
"aliceblue",
"antiquewhite",
"aquamarine",
"azure",
"beige",
"bisque",
"blanchedalmond",
"blueviolet",
"brown",
"burlywood",
"cadetblue",
"chartreuse",
"chocolate",
"coral",
"cornflowerblue",
"cornsilk",
"crimson",
"cyan",
"darkblue",
"darkcyan"
]

function getColorRandom() {
  return Math.floor(Math.random()*16777215).toString(16);
}

function getColorSolid() {
 return color[Math.floor(Math.random() * color.length)];
}

colorButton.addEventListener('click', function(){
  if (document.getElementById("hex").checked){
    let color = getColorRandom();
    background.style.backgroundColor = '#'+ color;
    titulo.innerHTML = '#' + color;
  } else if (document.getElementById("simple").checked){
      let color = getColorSolid();
      background.style.backgroundColor = color;
      titulo.innerHTML = color;
  }
})



