let input=document.querySelector(`input[type="text"]`);
let rootElm=document.querySelector('.movies_list');

// console.log(input);
let allMovies=[
  {
  name:"Forest Gump",
  watched:false,
},
 {
  name:"Inception",
  watched:true,
},

];

input.addEventListener('keyup',(event)=>{
  if(event.keyCode=== 13){
     console.log(event.target.value);

// adding movie
    
     allMovies.push({
       name:event.target.value,
       watched:false,
     })
     createMovieUI();
  }
})

function deleteMovie(event){
  //  event.target.parentElement.remove();
  let id=event.target.dataset.id;
  allMovies.splice(id,1);
  createMovieUI();
}
function handleChange(event){
  let id=event.target.id;
  // console.log(id)
 allMovies[id].watched=!allMovies[id].watched;
}


function createMovieUI(){
        // <li>
        //   <input class="style-checkbox" id="1" type="checkbox">
        //   <label for="1">Checkbox</label>
        //   <span>X</span>
        // </li>
      rootElm.innerHTML="";

  allMovies.forEach((movie,i)=>{

    let li=document.createElement("li");
    let input=document.createElement("input");
    input.classList.add("style-checkbox");
    input.type="checkbox"
    input.id=i;
    input.checked=movie.watched;
    
    input.addEventListener("change",handleChange)

    let label=document.createElement("label");
    label.for="i";
    label.innerText=movie.name
    let span=document.createElement("span");
    span.innerText="X";
    
    span.setAttribute("data-id",i)
    span.addEventListener("click",deleteMovie)

    li.append(input,label,span)
    rootElm.append(li)
  });
}

createMovieUI();