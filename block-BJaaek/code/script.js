let first=document.querySelector('.first');
let second=document.querySelector('.second');
// let banner=document.querySelector('.banner')


function generateRandomColor(){
  let hexCharacters=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
  let color="#";
  for (let i=0; i<6; i++){
    let randomNumber=Math.floor(Math.random()*16);
    // hexCharacters[randomNumber]
    color=color+hexCharacters[randomNumber];

  }
  return color;
}
function handleClick(){
  let randomColor=generateRandomColor();
  first.style.backgroundColor=randomColor;
}

function handleMouseMove(){
  let randomColor=generateRandomColor();
  second.style.backgroundColor=randomColor;
}

 first.addEventListener('click',handleClick);
 second.addEventListener('mousemove',handleMouseMove);
