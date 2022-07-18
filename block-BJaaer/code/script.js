let form=document.querySelector("form");
let modal=document.querySelector(".modal_overlay")
let modalInfo=document.querySelector(".modal_info")

// let userInfo={};

// function handleSubmit(event){
// event.preventDefault();
// // console.log(event)
// userInfo.name=form.elements.name.value;
// userInfo.email=form.element.email.value;
// userInfo.love=form.elements.love.value;
// console.log(userInfo);
// }

let userData={};


form.addEventListener("submit",(event)=>{
event.preventDefault();
let elements=event.target.elements;
// console.log(elements.gender.value);

userData.name=elements.name.value;
userData.email=elements.email.value;
userData.gender=elements.gender.value;
userData.color=elements.color.value;
userData.range=elements.range.value;
userData.fiction=elements.fiction.value;
userData.terms=elements.terms.value;

modal.classList.add("open");
let close=document.querySelector(".modal_close");

close.addEventListener('click',()=>{
  modal.classList.remove("open")
})
displayInfo(userData);
// console.log(userData);
});

function displayInfo(data={}){
  modalInfo.innerHTML="";
  let h1=document.createElement("h1");
  h1.innerText=`Hello ${data.name}`;
  let email=document.createElement("p");
  email.innerText=`Email: ${data.email}`;

  modalInfo.append(h1,email)

}
