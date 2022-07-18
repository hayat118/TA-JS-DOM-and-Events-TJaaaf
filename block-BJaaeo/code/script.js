let display=document.querySelector(".display");
let initialValue=0;
let allBtn=document.querySelectorAll("button");

function handleBtnClick(event){
    // console.log(event.target.innerText)
    if(event.target.classList.contains("equal")){
      display.innerText=eval(display.innerText);
      return;
    }
      if(event.target.classList.contains("clear")){
      display.innerText=initialValue;
      return;
    }
    if(display.innerText==initialValue){
      display.innerText=event.target.innerText;
    }else{
    display.innerText+=event.target.innerText;
    }
}

allBtn.forEach((btn)=>{
  btn.addEventListener("click",handleBtnClick);
});



display.innerText=initialValue;
