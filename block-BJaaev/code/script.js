let input=document.querySelector(`input[type="text"]`);
let rootElm=document.querySelector(".todo-list");

let activeButton="all";


let all=document.querySelector(".all");
let active=document.querySelector(".active");
let completed=document.querySelector(".completed");
let clear=document.querySelector(".clear");



let allTodo=[];

//  let allTodo=[
//   {
//    name:"Learn Html",
//    isDone:false,
//   },
//   {
//     name:"Learn CSS",
//     isDone:true,
//   },
// ];


function addTodo(event){
  if(event.keyCode===13 && event.target.value){
    console.log(event.target.value)
  
  allTodo.push({
    name:event.target.value,
    isDone:false,
   });
   event.target.value=""
   createTodoList();
   localStorage.setItem("allTodo",JSON.stringify(allTodo));
}
}


function handleDelete(event){
  let id=event.target.dataset.id;
  allTodo.splice(id,1);
  createTodoList();
}

function handleChange(event){
  let id=event.target.id;
  // console.log(id)
  allTodo[id].isDone=!allTodo[id].isDone;
}







function createTodoList(data=allTodo){
  rootElm.innerHTML=""

        // <li>
        //   <input class="style-checkbox" id="1" type="checkbox">
        //   <label for="1">learn html</label>
        //   <span>X</span>
        // </li>

 allTodo.forEach((todo,i)=>{

   let li=document.createElement("li");
   let input=document.createElement("input");
     input.classList.add("style-checkbox");
     input.type="checkbox";
     input.id=i;
     input.checked=todo.isDone;
     input.setAttribute("data-id",i)
     input.addEventListener("change",handleChange);
   let label=document.createElement("label");
     label.for="i";
     label.innerText=todo.name;
   let span=document.createElement("span");
      span.innerText="X" ;
      span.setAttribute("data-id",i)
      span.addEventListener("click",handleDelete)
      
   li.append(input,label,span)
   rootElm.append(li)
 })

}
createTodoList();

 all.classList.add("selected");

 clear.addEventListener("click",()=>{
   allTodo=allTodo.filter((todo)=>!todo.isDone);
  //  console.log(notCompleted)
   createTodoList();

 });

 active.addEventListener("click",()=>{
  let notCompleted=allTodo.filter((todo)=>!todo.isDone);
   createTodoList(notCompleted);
   activeButton="active"
   updateActiveButton();
 })

 completed.addEventListener("click",()=>{
   let completedTodo=allTodo.filter((todo)=>todo.isDone);
   createTodoList(completedTodo);
   activeButton="completed";
   updateActiveButton()
 })
all.addEventListener("click",()=>{
  createTodoList();
  activeButton="all";
  updateActiveButton();
})

 function updateActiveButton(btn=activeButton){
     all.classList.remove("selected")
     active.classList.remove("selected")
     completed.classList.remove("selected")

  


   if(btn==="all"){
     all.classList.add("selected")
   }
   if(btn==="active"){
     active.classList.add("selected")
   }
   if(btn==="completed"){
     completed.classList.add("selcted")
   }
 }

 updateActiveButton();



 input.addEventListener("keyup",addTodo);
