let form=document.querySelector("form");


function handleSubmit(event){
   event.preventDefault();
   console.dir(event.target)
}


form.addEventListener("submit",handleSubmit);