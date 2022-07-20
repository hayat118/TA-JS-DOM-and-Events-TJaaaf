let input=document.querySelector(`input[type="text"]`);
let rootElm=document.querySelector(".todo-list");


 let allTodo=[
  {
   name:"Learn Html",
   isDone:false,
  },
  {
    name:"Learn CSS",
    isDone:true,
  },
];


input.addEventListener("keyup",(event)=>{
  if(event.keyCode===13){
    console.log(event.target.value)
  
  allTodo.push({
    name:event.target.value,
    isDone:false,
   })
   createTodoList();
}
})


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







function createTodoList(){
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