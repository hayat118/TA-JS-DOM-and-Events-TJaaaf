let boxes=document.querySelector('.boxes')



function generateRandomColor(){
  
  let hexCharacters=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
  let color="#";
  for(let i=0; i<6; i++){
    let randomColor=Math.floor(Math.random()*16);
    color=color+hexCharacters[randomColor];
  }
  return color;
}

function generateRandomNumber(){
  let numbers=["0","1","2","3","4","5","6","7","8","9"];
  let finalNumber="";
  for(let i=0;i<3;i++){
    let randomNumber=Math.floor(Math.random()*10);
    // finalNumber=finalNumber+numbers[randomNumber]

  }
  return finalNumber;
}

function handleMouseMove(){
  let randomColor=generateRandomColor();
  boxes.style.backgroundColor=randomColor;
}

boxes.addEventListener('mousemove',handleMouseMove);