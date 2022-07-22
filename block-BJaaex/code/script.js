let allBoxes=document.querySelectorAll(".box");
let box=document.querySelector(".box")







allBoxes.forEach((box,index)=>{

  box.addEventListener("click",(event)=>{

    // box.innerHTML="";


  //   for(let i=0; i<=16; i++){
  //    let box=document.querySelector(".box")
  //    let randomNO=getRandomNumber(16);
  //    box.innerText=randomNO;
  //  }
      // event.target.innerText="";

   setTimeout(() => {
      event.target.innerText="";
      
    }, 2000);

  })
});


box.addEventListener('click', event => {

  const clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }

});
 


// function getRandomNumber(max){
//   return Math.floor(Math.random()*max)
// }



// allBoxes.addEventListener("click",handleclick);

