let firstBoxes=document.querySelectorAll(".first li");
let secondBox=document.querySelectorAll(".second")


firstBoxes.forEach((box,index)=>{
  box.addEventListener("click", (event)=>{
    // console.log(event.target)
    event.target.innerText=index+1;
    setTimeout(() => {
      event.target.innerText="";
    },5000);
  });
});

secondBox.forEach((box,index)=>{

  box.addEventListener("click",(event)=>{
  let text=event.target.dataset.text;
  // console.log(text);
   event.target.innerText=text;
    setTimeout(() => {
      event.target.innerText="";
    },5000);
})
});