let form=document.querySelector("form");


let userInfo={}

let errorMessages={}

function displayError(name) {
  form.elements[name].nextElementSibling.innerText=errorMessages[name];
  form.elements[name].parentElement.classList.add("error")
}

function displaySuccess(name) {
  form.elements[name].nextElementSibling.innerText="";
  errorMessages[name]="";
  form.elements[name].parentElement.classList.remove("error")
  form.elements[name].parentElement.classList.add("success")
}


function handleSubmit(event){
   event.preventDefault();
  //  console.dir(event.target)
  let elements=event.target.elements;
  const username=elements.username.value;
  const name=elements.name.value;
  const email=elements.email.value;
  const phone=elements.phone.value;
  const password=elements.password.value;
  const passwordCheck=elements["password-check"].value;
  
  // console.log({username,name,email,phone,password,passwordCheck})
// 1. Username can't be less than 4 characters

  if(username.length<4){
    errorMessages.username="Username can't be less than 4 characters";
    displayError("username")
  }else{
    displaySuccess("username")
  }

}
// 2. Name can't be numbers

if(!isNaN(name)){
  errorMessages.name="Name can't be numbers";
  displayError("name")
}else{
  displaySuccess("name")
}
// 3. Email must contain the symbol `@`
if(!email.includes('@')){
  errorMessages.email="Email must contain the symbol '@' ";
  displayError("email")
}else{
  displaySuccess("email")
}

// 5. Phone numbers can only be a number

if(isNaN(phone)){
  errorMessages.phone="Phone numbers can only be a number";
  displayError("phone")
}else{
  displaySuccess("phone")
}

// 8. Password and confirm password must be same.
if(password !==passwordCheck){
  errorMessages.password="Password and confirm password must be same.";
  displayError("password")
  displayError("password-check")
}else{
  displaySuccess("password")
  displaySuccess("password-check")
}




form.addEventListener("submit",handleSubmit);