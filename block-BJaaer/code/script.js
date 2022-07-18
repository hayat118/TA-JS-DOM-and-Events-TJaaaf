let form=document.querySelector("form");

let userInfo={};

function handleSubmit(event){
event.preventDefault();
// console.log(event)
userInfo.name=form.elements.name.value;
userInfo.email=form.element.email.value;
userInfo.love=form.elements.love.value;
console.log(userInfo);
}

form.addEventListener("submit",handleSubmit);